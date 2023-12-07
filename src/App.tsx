import styles from './App.module.css';
import FocusedInput from './FocusedInput/FocusedInput';
import InputSubmit from './InputSubmit/InputSubmit';
import DisabledButton from './DisabledButton/DisabledButton';
import CountButton from './CountButton/CountButton';
import ColorDropdown from './ColorDropdown/ColorDropdown';
import Render from './Render/Render';
import CountHundred from './CountHundred/CountHundred';
import ChangeToGold from './ChangeToGold/ChangeToGold';
import CloneBox from './CloneBox/CloneBox';
import Corner from './Corner/Corner';

function App() {

  return (
    <>
      <div className={styles.firstPartWrapper}>
        <FocusedInput/>
        <InputSubmit />
        <DisabledButton />
        <CountButton />
        <ColorDropdown />
      </div>
      <div className={styles.secondPartWrapper}>
        <Render />
        <CountHundred />
      </div>
      <div className={styles.thirdPartWrapper}>
        <ChangeToGold />
        <CloneBox />
        <Corner />
      </div>
    </>
  )
}

export default App
