import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Check for interactive elements
    const handleMouseEnter = (e) => {
      const target = e.target;
      const isLink = target.tagName === 'A' || target.closest('a');
      const isButton = target.tagName === 'BUTTON' || target.closest('button');
      const isInput = target.tagName === 'INPUT' || target.closest('input');
      const isTextarea = target.tagName === 'TEXTAREA' || target.closest('textarea');
      const isInteractive = isLink || isButton || isInput || isTextarea;
      
      if (isInteractive) {
        setIsHovering(true);
        if (isLink) {
          setCursorText('Click');
          setCursorType('link');
        } else if (isButton) {
          setCursorText('Tap');
          setCursorType('button');
        } else if (isInput || isTextarea) {
          setCursorText('Type');
          setCursorType('input');
        } else {
          setCursorText('');
          setCursorType('hover');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
      setCursorType('default');
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const getCursorColor = () => {
    switch (cursorType) {
      case 'link':
        return 'from-blue-500 to-cyan-500';
      case 'button':
        return 'from-purple-500 to-cyan-500';
      case 'input':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-white to-white';
    }
  };

  return (
    <>
      {/* Main Cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
          transition: 'transform 0.1s cubic-bezier(0.1, 0.7, 1.0, 1.0)',
        }}
      >
        <div
          className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
            isHovering 
              ? `scale-150 bg-gradient-to-r ${getCursorColor()} border-transparent` 
              : 'scale-100 border-white bg-white/20'
          } ${isClicking ? 'scale-75' : ''}`}
        ></div>
      </div>

      {/* Outer Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          transition: 'transform 0.2s cubic-bezier(0.1, 0.7, 1.0, 1.0)',
        }}
      >
        <div
          className={`w-10 h-10 rounded-full border transition-all duration-300 ${
            isHovering 
              ? `scale-150 opacity-50 border-transparent bg-gradient-to-r ${getCursorColor()} blur-sm` 
              : 'scale-100 opacity-100 border-white/30'
          } ${isClicking ? 'scale-75' : ''}`}
        ></div>
      </div>

      {/* Cursor Text */}
      {cursorText && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{
            transform: `translate(${position.x + 20}px, ${position.y - 15}px)`,
            transition: 'transform 0.1s cubic-bezier(0.1, 0.7, 1.0, 1.0), opacity 0.2s ease-out',
          }}
        >
          <div className={`px-3 py-1.5 bg-gradient-to-r ${getCursorColor()} text-white text-xs font-bold rounded-full whitespace-nowrap shadow-lg backdrop-blur-sm`}>
            {cursorText}
          </div>
        </div>
      )}

      {/* Trailing Dots */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            transform: `translate(${position.x - (2 + i * 2)}px, ${position.y - (2 + i * 2)}px)`,
            transition: `transform ${0.15 + i * 0.05}s cubic-bezier(0.1, 0.7, 1.0, 1.0)`,
            opacity: 0.7 - i * 0.2,
          }}
        >
          <div 
            className={`rounded-full bg-gradient-to-r ${getCursorColor()}`}
            style={{
              width: `${4 - i * 1}px`,
              height: `${4 - i * 1}px`,
            }}
          ></div>
        </div>
      ))}

      {/* Ripple Effect on Click */}
      {isClicking && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9996]"
          style={{
            transform: `translate(${position.x - 25}px, ${position.y - 25}px)`,
          }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-white/50 animate-ping"></div>
        </div>
      )}
    </>
  );
};

export default CustomCursor;
