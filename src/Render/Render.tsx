import { useState, useEffect } from 'react';
import styles from './Render.module.css';

function Render() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log('First render');
    }, []);

    useEffect(() => {
        console.log('Render');
    });

    const handleCountButton = () => {
        setCount(count + 1);
        console.log('Changing count');
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        console.log('Input change');
    };

    return (
        <div className={styles.renderWrapper}>
            <button className={styles.countButton} onClick={handleCountButton}>+</button>
            <p>Count: {count}</p>
            <input 
                className={styles.renderInput} 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
            />
            <p>{inputValue}</p>
        </div>
    )
}

export default Render;