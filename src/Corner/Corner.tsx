import { useRef, useState } from 'react';
import styles from './Corner.module.css';

function Corner() {
    const cornerBoxRef = useRef<HTMLDivElement | null>(null);
    const [isInCorner, setIsInCorner] = useState(false);

    const moveToTopRight = () => {
        if (cornerBoxRef.current) {
            const containerWidth = cornerBoxRef.current.parentElement?.offsetWidth || 0;
            const boxWidth = cornerBoxRef.current.offsetWidth;

            cornerBoxRef.current.style.top = '1rem';
            cornerBoxRef.current.style.left = `calc(${containerWidth - boxWidth - 1}px - 1rem)`;

            setIsInCorner(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.cornerBox} ref={cornerBoxRef}>
                {isInCorner && (
                    <span className={styles.centeredText}>I'm in the right corner</span>
                )}
            </div>
            <button className={styles.cornerButton} onClick={moveToTopRight}>Send to corner</button>
        </div>
    )
}

export default Corner;