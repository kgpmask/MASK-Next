/*{Button component} */

import React from 'react';
import Image from 'next/image';
import './styles/Button.module.css';

export default function Button({ text, color, onClick, icon }) {
    return (
        <button className={`button button-${color}`} onClick={onClick}>
            {text}
            {icon && <Image src={icon} alt="icon" className="button-icon" />}
        </button>
    );
}