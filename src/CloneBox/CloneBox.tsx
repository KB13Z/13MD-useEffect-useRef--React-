import { useRef } from 'react';
import styles from './CloneBox.module.css';

function CloneBox() {
    const boxRef = useRef<HTMLDivElement | null>(null);

    const handleCloneBox = () => {
        if (boxRef.current && boxRef.current.parentNode) {
            const clonedBox = boxRef.current.cloneNode(true) as HTMLDivElement;
            boxRef.current.parentNode.appendChild(clonedBox);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.boxesWrapper}>
                <div className={styles.box} ref={boxRef}></div>
            </div>
            <button className={styles.cloneButton} onClick={handleCloneBox}>Clone box</button>
        </div>
    )
}

export default CloneBox;