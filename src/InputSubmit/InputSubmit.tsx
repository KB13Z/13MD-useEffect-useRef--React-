import styles from './InputSubmit.module.css';
import { useRef, useState } from 'react';

function InputSubmit() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValues, setInputValues] = useState<string[]>([]);

    const handleSubmitButton = () => {
        if (inputRef.current && inputRef.current.value.trim() !== '') {
            const inputValue = inputRef.current.value;
            setInputValues(prevValues => [...prevValues, inputValue]);
            inputRef.current.value = '';
            inputRef.current.focus();
        }
    };

    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputWrapper}>
                <input className={styles.input} type="text" ref={inputRef} />
                <button className={styles.submitButton} onClick={handleSubmitButton}>SUBMIT</button>
            </div>
            <div>
                {inputValues.map((value, index) => (
                    <p className={styles.value} key={index}>{value}</p>
                ))}
            </div>
        </div>
    )
}

export default InputSubmit;