import Button from './Button';
import styles from '../styles/HeroBanner.module.css';
import Image from 'next/image';

const HeroBanner = ({ heroTitle, heroContent, buttonContent, buttonURL}) => {
    return (
        <div className={styles.heroBanner}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>{heroTitle}</h1>
                <p className={styles.heroText}>{heroContent}</p>
                <Button text={buttonContent} url = {buttonURL} color = "red" />
            </div>
        </div>
    );
}

export default HeroBanner;