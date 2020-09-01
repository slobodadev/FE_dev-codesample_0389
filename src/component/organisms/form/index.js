import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateСurrency } from '../../../store/reducers/countCurrency';
import styles from './index.module.css';
import FormInputItem from '../../molecules/formInputItem';
import FormSelectItem from '../../molecules/formSelectItem';
import Button from '../../atoms/button';

const Form = () => {
    const listOfCurrency = useSelector(state => state.countCurrency.listOfCurrency)
    const baseCurrency = useSelector(state => state.countCurrency.base)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState(100)
    const [currency, setCurrency] = useState(listOfCurrency[0])
    const [secondarycurrency, setSecondaryCurrency] = useState('')
    const [secondaryListOfCurrency, setSecondaryListOfCurrency] = useState([])

    const handleCountAmount = () => {
        dispatch(updateСurrency(inputValue, currency, secondarycurrency))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCountAmount()
    }

    useEffect(() => {
        handleCountAmount()
    }, [])

    useEffect(() => {
        const arr = listOfCurrency.filter(item => item !== baseCurrency)
        setSecondaryListOfCurrency(arr)
        !secondarycurrency && setSecondaryCurrency(arr[0])
    }, [listOfCurrency])

    useEffect(() => {
        secondarycurrency && handleCountAmount()
    }, [currency, secondarycurrency])

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FormInputItem 
                label="fill amount" 
                value={inputValue} 
                setInputValue={setInputValue}
            />
            <FormSelectItem 
                options={listOfCurrency} 
                label="choose your currency" 
                setSelectValue={setCurrency}
            />     
            <FormSelectItem 
                options={secondaryListOfCurrency} 
                label="rates currency" 
                setSelectValue={setSecondaryCurrency}
            />
            <Button name="primary" type="submit" text="count"/>  
        </form>
    )
}

export default Form;
