import { useState } from 'react';
import styles from './ColorDropdown.module.css';

function ColorDropdown() {
    const [selectedColor, setSelectedColor] = useState('');
    const [colorBoxes, setColorBoxes] = useState<string[]>([]);

    const handleAddButton = () => {
        if (selectedColor) {
            setColorBoxes([...colorBoxes, selectedColor]);
        }
    };

    return (
        <>
            <div className={styles.dropdownWrapper}>
                <button className={styles.addButton} onClick={handleAddButton}>+</button>
                <select className={styles.selectColor} value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                    <option value="" disabled>COLOR DROPDOWN</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="pink">Pink</option>
                </select>
            </div>
            <div className={styles.colorBoxesWrapper}>
                {colorBoxes.map((color, index) => (
                    <div
                        key={index}
                        className={styles.colorBox}
                        style={{ backgroundColor: color }}
                    ></div>
                ))}
            </div>
        </>
    )
}

export default ColorDropdown;