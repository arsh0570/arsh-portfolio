import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const isNight = theme === 'night';

  // Dynamic styles based on theme
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: isNight ? '#111827' : '#f9fafb', 
  };

  const iconColor = isNight ? '#e5e7eb' : '#4b5563';     
  const hoverColor = isNight ? '#3b82f6' : '#0a66c2';    

  return (
    <div style={containerStyle}>
      <div style={styles.iconsWrapper}>
        {/* Email Icon */}
        <a
          href="mailto:arshobeidy0@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="Email"
          style={{ color: iconColor }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={styles.icon}
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 7L2 7" />
          </svg>
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://linkedin.com/in/arsh-obeidy-1742521a9"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="LinkedIn"
          style={{ color: iconColor }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={styles.icon}
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>

      {/* Dynamic hover styles */}
      <style>
        {`
          .contact-icon {
            transition: all 0.2s ease;
            display: inline-block;
          }
          .contact-icon:hover {
            color: ${hoverColor} !important;
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  iconsWrapper: {
    display: 'flex',
    gap: '3rem',
  },
  icon: {
    width: '64px',
    height: '64px',
    strokeWidth: 1.5,
  },
};

export default Contact;