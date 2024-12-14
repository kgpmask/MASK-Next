// Button.jsx
import React from 'react';
import styles from '../styles/Button.module.css';
import { useRouter } from 'next/router';



const Button = ({ text, icon: Icon, color, url }) => {
  const router = useRouter();

  const handleClick = () => {
    if (url) {
      router.push(url);
    }
  };

  const buttonStyles = [
    styles.button,
    color === 'primary' ? styles.primary : styles.secondary,
  ].join(' ');

  return (
    <button className={buttonStyles} onClick={handleClick}>
      <div className={styles.contentWrapper}>
        {Icon && <span className={styles.buttonIcon}>{<Icon />}</span>}
        <span className={styles.buttonText}>{text}</span>
      </div>
    </button>
  );
};

export default Button;
