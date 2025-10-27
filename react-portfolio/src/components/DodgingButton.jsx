import { useEffect, useRef } from 'react';
import './DodgingButton.css';

const DodgingButton = () => {
  const buttonRef = useRef(null);
  const posX = useRef(0);
  const posY = useRef(0);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          // Move away from cursor
          const angle = Math.atan2(dy, dx);
          posX.current -= Math.cos(angle) * 50;
          posY.current -= Math.sin(angle) * 50;

          // Limit movement
          posX.current = Math.max(-100, Math.min(100, posX.current));
          posY.current = Math.max(-100, Math.min(100, posY.current));

          button.style.transform = `translate(${posX.current}px, ${posY.current}px)`;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleClick = () => {
    alert('You caught me! 👍');
  };

  return (
    <div className="dodging-button-container">
      <button
        ref={buttonRef}
        className="dodging-button"
        onClick={handleClick}
      >
        Press Me
      </button>
    </div>
  );
};

export default DodgingButton;
