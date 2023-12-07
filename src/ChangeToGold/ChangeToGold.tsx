import { useRef, useState } from 'react';
import styles from './ChangeToGold.module.css';

function ChangeToGold() {
    const boxRef = useRef<HTMLDivElement>(null);
    const [isGold, setIsGold] = useState(false);

    const changeColor = () => {
        if (boxRef.current) {
            boxRef.current.style.backgroundColor = isGold ? 'initial' : 'gold';
            setIsGold(!isGold);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.box} ref={boxRef}></div>
            <button className={styles.changeColorButton} onClick={changeColor}>Change color</button>
        </div>
    )
}

export default ChangeToGold;