import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, parse } from 'path';

const PUBLIC_DIR = './public';
const BACKUP_DIR = './public/originals';

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  // Create backup directory
  await mkdir(BACKUP_DIR, { recursive: true });

  const files = await readdir(PUBLIC_DIR);
  const imageFiles = files.filter(f =>
    /\.(jpg|jpeg|png)$/i.test(f) && !f.includes('logo') && !f.includes('Logo') && !f.includes('LOGO')
  );

  let totalSaved = 0;
  let processed = 0;

  for (const file of imageFiles) {
    const inputPath = join(PUBLIC_DIR, file);
    const { name } = parse(file);
    const webpPath = join(PUBLIC_DIR, `${name}.webp`);
    const backupPath = join(BACKUP_DIR, file);

    try {
      const originalStats = await stat(inputPath);
      const originalSize = originalStats.size;

      // Create WebP version
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(webpPath);

      // Also create optimized JPG (fallback) - resize if too large
      const metadata = await sharp(inputPath).metadata();
      const maxWidth = 1920;

      let pipeline = sharp(inputPath);

      if (metadata.width && metadata.width > maxWidth) {
        pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
      }

      // Backup original
      await sharp(inputPath).toFile(backupPath);

      // Overwrite with optimized version
      await pipeline
        .jpeg({ quality: 80, progressive: true })
        .toFile(inputPath + '.tmp');

      // Rename temp to original
      const { rename } = await import('fs/promises');
      await rename(inputPath + '.tmp', inputPath);

      const newStats = await stat(inputPath);
      const webpStats = await stat(webpPath);
      const saved = originalSize - webpStats.size;
      totalSaved += saved;
      processed++;

      console.log(`✅ ${file}`);
      console.log(`   Original: ${(originalSize / 1024).toFixed(0)}KB`);
      console.log(`   JPG:      ${(newStats.size / 1024).toFixed(0)}KB`);
      console.log(`   WebP:     ${(webpStats.size / 1024).toFixed(0)}KB (${((1 - webpStats.size / originalSize) * 100).toFixed(0)}% smaller)\n`);

    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err.message);
    }
  }

  console.log('━'.repeat(50));
  console.log(`\n🎉 Done! Processed ${processed} images`);
  console.log(`💾 Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
  console.log(`\n📁 Original files backed up to: ${BACKUP_DIR}`);
  console.log('\n⚠️  Next steps:');
  console.log('   1. Update your components to use .webp images');
  console.log('   2. Or use <picture> element with WebP + JPG fallback');
}

optimizeImages().catch(console.error);
