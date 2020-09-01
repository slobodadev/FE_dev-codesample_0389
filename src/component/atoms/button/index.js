import React from 'react';
import styles from './index.module.css';

const customButton = ({ text, type, name, ...props }) => {

    return (
        <button className={styles[name]} type={type} {...props}>{text}</button>
    )
}

export default customButton;
