import Button from './Button';
import styles from '../styles/HeroBanner.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroBanner = ({ heroTitle, heroContent, buttonContent, buttonURL }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Add a slight delay for animation
        const timeout = setTimeout(() => setAnimate(true), 300);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`${styles.heroBanner} ${animate ? styles.fadeIn : ''}`}>
            <div className={`${styles.heroContent} ${animate ? styles.slideUp : ''}`}>
                <h1 className={styles.heroTitle}>{heroTitle}</h1>
                <p className={styles.heroText}>{heroContent}</p>
                <Button text={buttonContent} url={buttonURL} color="red" />
            </div>
        </div>
    );
};

export default HeroBanner;
