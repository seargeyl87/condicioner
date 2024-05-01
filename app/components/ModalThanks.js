import styles from "../style/ModalThanks.module.css";

const ModalThanks = ({ modalThanksActive, setModalThanksActive }) => {
  return (
    <div
      className={modalThanksActive ? styles.active : styles.modal}
      onClick={() => setModalThanksActive(false)}
    >
      <div
        className={styles.modal_thanks_content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal_thanks_close}>
          <p onClick={() => setModalThanksActive(false)}>X</p>
        </div>
        <div className={styles.modal_thanks_info}>
          <p>
            Спасибо за заявку, наш менеджер свяжется с вами в ближайшее время!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalThanks;
