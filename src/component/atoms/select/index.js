import React from 'react';
import styles from './index.module.css';

const customSelect = ({ options = [], name = "select", ...props }) => {

    return (
        <select className={styles[name]} defaultValue={options[0]} {...props}>
            {options.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
    )
}

export default customSelect;
