import styles from "../style/Button.module.css";

const Button = (props) => {
  const classes = `${styles.btn} ` + props.className;   // надо разобраться, чтобы модальное окно открывалась из любого места сайта где есть кнопки

  return (
    <button onClick={() => {props.setModalActive(true)}} className={classes}>   
      {props.children}
    </button>
  );
};

export default Button;
  