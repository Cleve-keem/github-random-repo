import styles from './Button.module.css'

function Button({
    text = "Default",
    id = "special",
    handleClick,
}){    // const { text = "Default", id } = props

    if(handleClick){
        handleClick()
    }
    return (
      <div>
        <button className={styles["my-button"]} id={id}>{text}</button>
      </div>
    )
  }

  export default Button