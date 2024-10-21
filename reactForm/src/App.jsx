import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [value, setValue] = useState("deecode");
  const [checked, setChecked] = useState(true);

  return (
    <div className={styles.form}>
      <input
        className={styles['input-field']}
        type="text"
        value={value}
        onChange={ (event) => { 
          setValue(event.target.value)
        }}
      />
      <input
        className={styles['checkbox-field']}
        type="checkbox"
        checked={checked}
        onChange={ () => { setChecked(!checked) } }
      />
      <div className={styles.flex}>
        <button
          className={styles['update-input']}
          onClick={ (event) => { 
            setValue(event.target.value)
            console.log(event.target)
          }}
        >
          Update Input Value
        </button>

        <button 
          className={styles['update-checkbox']}
          onClick={ () => { setChecked(!checked) } }
        >
          Update Checked
        </button>
      </div>

    </div>
  )
}

export default App
