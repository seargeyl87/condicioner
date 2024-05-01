"use client";

import { useState } from "react";
import styles from "../style/Main.module.css";
import Modal from "./Modal";
import ModalThanks from "./ModalThanks";
import Button from "../components/Button";

function Main() {
  const [modalActive, setModalActive] = useState(false);
  const [modalThanksActive, setModalThanksActive] = useState(false);

// const handleModalActive = () => { 
//   setModalActive(true) 
// }

  const changeModalThanks = () => {
                                // сделать условия if(введен номер и запрос отправлен, затем выполняются 2 данные функции) else надпись - введите корректно номер телефона
    setModalActive(false);
    setModalThanksActive(true);
  };



  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.content_description}>
          <div className={styles.main_head}>
            <h1>
              Продажа и установка кондиционеров под ключ от официального дилера
            </h1>
          </div>
          <div className={styles.benefits}>
            <div className={styles.benefits_item}>
              <div className={styles.icon}></div>
              <div className={styles.info}>
                Бесплатный выезд специалиста на замер
              </div>
            </div>
            <div className={styles.benefits_item}>
              <div className={styles.icon}></div>
              <div className={styles.info}>
                Подберем кондиционер и выполним установку любой сложности
              </div>
            </div>
            <div className={styles.benefits_item}>
              <div className={styles.icon}></div>
              <div className={styles.info}>
                Гарантия на оборудование и монтаж до 5 лет
              </div>
            </div>
          </div>
          <div className={styles.consult}>
            <div className={styles.consult_txt}>
              Хотите получить консультацию? Оставьте заявку и мы вам перезвоним
              в ближайшее время
            </div>
            <Button setModalActive={setModalActive}>Получить консультацию Button</Button>
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
}

export default Main;
