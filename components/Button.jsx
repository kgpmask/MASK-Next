// Button.jsx
import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ text, color, onClick }) => {
  const buttonStyles = [
    styles.button,
    color === 'primary' ? styles.primary : styles.secondary,
  ].join(' ');

  return (
    <button className={buttonStyles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;