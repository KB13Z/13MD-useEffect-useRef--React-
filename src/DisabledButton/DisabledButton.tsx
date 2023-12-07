import { useState, useEffect } from 'react';
import styles from './DisabledButton.module.css';

function DisabledButton() {
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        setButtonDisabled(true);
    
        const timeoutId = setTimeout(() => {
          setButtonDisabled(false);
        }, 5000);
    
        return () => clearTimeout(timeoutId);
      }, []);

    return (
        <button className={styles.disabledButton} disabled={isButtonDisabled}>BUTTON</button>
    )
}

export default DisabledButton;