import React from 'react';
import styles from './index.module.css';

const customInput = ({ type = 'text', placeholder, value, name = 'input', ...props }) => {

    return (
        <input className={styles[name]} type={type} placeholder={placeholder} value={value} {...props}/>
    )
}
    
export default customInput;
