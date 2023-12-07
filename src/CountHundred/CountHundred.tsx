import { useState, useEffect } from 'react';
import styles from './CountHundred.module.css';

function CountHundred() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setCount(100);
    }, []);

    useEffect(() => {
        document.title = inputValue || 'CountHundred';
    }, [inputValue]);

    const handleCountButton = () => {
        setCount(count + 1);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const fontSize = 16 + (count - 100);

    return (
        <div className={styles.countHundredWrapper}>
            <button className={styles.countHundredButton} onClick={handleCountButton}>+</button>
            <p style={{ fontSize: `${fontSize}px` }}>Count: {count}</p>
            <input 
                className={styles.countHundredInput} 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
            />
            <p>{inputValue}</p>
        </div>
    )
}

export default CountHundred;