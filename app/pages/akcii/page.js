"use client";

import { useState } from "react";
import styles from "../../style/Akcii.module.css";
import condicioner1 from "../../img/condicioner1.jpeg";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ModalThanks from "../../components/ModalThanks";

const Akcii = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalThanksActive, setModalThanksActive] = useState(false);

  const changeModalThanks = () => {
    // сделать условия if(введен номер и запрос отправлен, затем выполняются 2 данные функции) else надпись - введите корректно номер телефона
    setModalActive(false);
    setModalThanksActive(true);
  };

  return (
    <div className={styles.akcii}>
      <div className={styles.akcii_into}>
        <h1>Акции</h1>
        <div className={styles.akcii_blocks}>
          <div className={styles.akcii_item}>
            <div className={styles.akcii_item_foto}>
              <img src={condicioner1.src} />
            </div>
            <div className={styles.akcii_item_txt}>
              <h2>Скидка 30% на монтаж при покупке кондиционеров Gree</h2>
              <span>2023-03-21</span>
              <p>Купите кондиционер Гри и получите монтаж со скидкою 30%</p>
              <div className={styles.btn_order}>
                <Button setModalActive={setModalActive}>Оставить заявку</Button>
              </div>
            </div>
          </div>

          <div className={styles.akcii_item}>
            <div className={styles.akcii_item_foto}>
              <img src={condicioner1.src} />
            </div>
            <div className={styles.akcii_item_txt}>
              <h2>Скидка 30% на монтаж при покупке кондиционеров Gree</h2>
              <span>2023-03-21</span>
              <p>Купите кондиционер Гри и получите монтаж со скидкою 30%</p>
              <div className={styles.btn_order}>
                <Button setModalActive={setModalActive}>Оставить заявку</Button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        changeModalThanks={changeModalThanks}
      />
      <ModalThanks
        modalThanksActive={modalThanksActive}
        setModalThanksActive={setModalThanksActive}
      />
    </div>
  );
};

export default Akcii;
