import React from 'react'
import styles from './index.module.css';
import Input from '../../atoms/input';
import Text from '../../atoms/text';

const FormInputItem = ({ label, value, setInputValue }) => {

    return (
        <div className={styles.block}>
            <Text name="label">
               {label}
            </Text>
            <Input value={value} onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    )
}

export default FormInputItem;
