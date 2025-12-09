import React, { useEffect, useState, useCallback } from 'react';
import { X } from 'lucide-react';
import styles from './NavigationMenu.module.css';

interface NavigationMenuProps {
  showMenu: boolean;
  onToggleMenu: () => void;
  onMenuItemClick: (item: string) => void;
}

const menuItems = ['HOME', 'TOURS', 'ABOUT', 'MUST SEE PLACES', 'GALLERY', 'CONTACT'];

const NavigationMenu: React.FC<NavigationMenuProps> = ({ 
  showMenu, 
  onToggleMenu,
  onMenuItemClick 
}) => {
  const [isClosing, setIsClosing] = useState(false);

  // Handle menu close with animation
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onToggleMenu();
      setIsClosing(false);
    }, 400); // Match the closing animation duration
  }, [onToggleMenu]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showMenu && !isClosing) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showMenu, isClosing, handleClose]);


  // Prevent body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMenu]);

  const handleMenuItemClick = (item: string) => {
    handleClose();
    setTimeout(() => {
      onMenuItemClick(item);
    }, 200);
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <div className={styles.menuToggle}>
        {!showMenu ? (
          <button 
            onClick={onToggleMenu}
            className={`${styles.menuButton} ${styles.lightText}`}
            aria-label="Open navigation menu"
            data-menu-button
          >
            MENU
          </button>
        ) : (
          <button
            onClick={handleClose}
            className={styles.closeButton}
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Menu Overlay - Always mounted for animations */}
      <div className={`${styles.menuOverlay} ${showMenu ? styles.open : ''} ${isClosing ? styles.closing : ''}`}>
        {/* Backdrop */}
        <div 
          className={styles.backdrop}
          onClick={handleClose}
          aria-hidden="true"
        />
        
        {/* Menu Panel - Right Half */}
        <div className={styles.menuPanel}>
          <div className={styles.menuContent}>
            {/* Menu Items */}
            <nav className={styles.menuNavigation}>
              {menuItems.map((item, index) => (
                <div
                  key={item}
                  className={styles.menuItemWrapper}
                  onClick={() => handleMenuItemClick(item)}
                  style={{
                    animationDelay: showMenu 
                      ? `${0.2 + index * 0.08}s` 
                      : `${(menuItems.length - index) * 0.03}s`,
                  }}
                >
                  <div className={styles.menuItemContainer}>
                    <h3 className={styles.menuItemTitle}>
                      {item}
                    </h3>
                    
                    {/* Animated underline */}
                    <div className={styles.menuItemUnderline} />
                    
                    {/* Hover accent */}
                    <div className={styles.menuItemAccent} />
                  </div>
                  
                  {/* Menu item number */}
                  <div className={styles.menuItemNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </nav>

            {/* Menu Footer */}
            <div className={styles.menuFooter}>
              <div className={styles.menuFooterLine} />
              <div className={styles.menuFooterText}>
                EST. 1992 — BHUTAN
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;