import React from 'react';
import styles from './App.module.css';
import Form from '../organisms/form';
import Text from '../atoms/text';
import { useSelector } from 'react-redux';

const App = () => {
  const result = useSelector(state => state.countCurrency.result)
  
  return (
    <div className={styles.app}>
      <Text name="title">currency exchange rate</Text>  
      <Form />
      <Text name="result">{result}</Text>  
    </div>
  );
}

export default App;
