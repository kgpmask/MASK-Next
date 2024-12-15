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
    'red' : {
      backgroundColor: '#e43332',
      color: '#fff',
    }, 
    'black' : {
      backgroundColor: '#000',
      color: '#fff',
    }, 
    'trans-white' : {
      backgroundColor: 'transparent',
      color: '#fff',
      border: '1px solid #fff',
    }, 
    'trans-black' : {
      backgroundColor: 'transparent',
      color: '#000',
      border: '1px solid #000',
    }
  }

  const style = buttonStyles[color] || buttonStyles['red'];

  return (
    <button className={styles.button} style = { style } onClick={handleClick}>
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