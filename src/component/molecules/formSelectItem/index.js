import React from 'react'
import styles from './index.module.css';
import Select from '../../atoms/select';
import Text from '../../atoms/text';

const FormSelectItem = ({ options, label, setSelectValue }) => {

    return (
        <div className={styles.block}>
            <Text name="label">
                {label}
            </Text>
            <Select options={options} onChange={(e) => setSelectValue(e.target.value)}/>
        </div>
    )
}

export default FormSelectItem;
