import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Import right arrow icon
import styles from '../styles/Button.module.css';
import { useRouter } from 'next/router';

const Button = ({ text, color, icon: Icon, url }) => {
  const router = useRouter();

  const handleClick = () => {
    if (url) {
      router.push(url); // Route to the specified URL
    }
  };
  const buttonStyles = {
    backgroundColor: color,
    color: color === '#fff' ? '#333' : '#fff',
  }

  return (
    <button className={styles.button} style = { buttonStyles } onClick={handleClick}>
      <div className={styles.contentWrapper}>
        {/* Render custom icon or default arrow */}

        <span className={styles.buttonText}>{text}</span>

        {Icon ? (
          <span className={styles.buttonIcon}><Icon /></span>
        ) : (
          <span className={styles.buttonIcon}><FiArrowRight /></span>
        )}
      </div>
    </button>
  );
};

export default Button;
