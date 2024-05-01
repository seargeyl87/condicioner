import styles from "../style/ButtonSendOrder.module.css";

const ButtonSendOrder = (props) => {
  const classes = `${styles.button_serd_order} ` + props.className;
  return (
    <button className={classes} onClick={props.changeModalThanks}>
      {props.children}
    </button>
  );
};

export default ButtonSendOrder;
 