import React from 'react';
import styles from './index.module.css';

const customText = ({ children, name }) => {
   
    return (
        <p className={styles[name]}>{children}</p>
    )
}

export default customText;
