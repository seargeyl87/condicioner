import styles from "../style/Modal.module.css";
import ButtonSendOrder from "../components/ButtonSendOrder";

const Modal = ({ active, setActive, changeModalThanks }) => {
  return (
    <div
      className={active ? styles.active : styles.modal}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal_close}>
          <p
            onClick={() => {
              setActive(false);
            }}
          >
            X
          </p>
        </div>

        <div className={styles.modal_info}>
          <h2>Оставьте заявку и мы перезвоним вам в ближайшее время</h2>
        </div>
        <div className={styles.modal_data}>
          <input placeholder="Введите ваше имя" />
          <input placeholder="Введите ваш телефон*" />
        </div>
        <div className={styles.modal_btn}>
          <ButtonSendOrder changeModalThanks={changeModalThanks}>Оставить заявку</ButtonSendOrder>
        </div>
      </div>
    </div>
  );
};

export default Modal;