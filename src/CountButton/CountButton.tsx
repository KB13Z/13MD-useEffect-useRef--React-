import { useState } from 'react';
import styles from './CountButton.module.css';

function CountButton() {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    return (
        <>
            <div className={styles.countWrapper}>
                <button className={styles.countButton} onClick={handleButtonClick}>COUNT: {count}</button>
                <div className={styles.countSquare}>{Math.pow(2, count)}</div>
            </div>
        </>
    )
}

export default CountButton;