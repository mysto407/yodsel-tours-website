import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { tourName, tourOption, name, email, phone, travelers, startDate, message } = await request.json();

    if (!name || !email || !tourName) {
      return NextResponse.json(
        { error: 'Name, email, and tour are required' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'Yodsel Tours <noreply@yodselbhutan.com>',
      to: ['bhutanyodsel@gmail.com'],
      replyTo: email,
      subject: `New Booking Request: ${tourName} - Yodsel Tours`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Tour:</strong> ${tourName}</p>
        <p><strong>Option:</strong> ${tourOption || 'Standard'}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Travelers:</strong> ${travelers || 'Not specified'}</p>
        <p><strong>Start Date:</strong> ${startDate || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional message'}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    );
  }
}
