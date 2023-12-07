import styles from './FocusedInput.module.css'

function FocusedInput() {
    return (
        <div>
            <input className={styles.focusedInput} autoFocus />
        </div>
    )
} 

export default FocusedInput;