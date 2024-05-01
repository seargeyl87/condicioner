"use client";

import styles from "../style/Questions.module.css";
import ModalThanks from "./ModalThanks";
import { useState } from "react";
import ButtonSendOrder from "../components/ButtonSendOrder";



function Questions() {
  const [modalThanksActive, setModalThanksActive] = useState(false);

  const changeModalThanks = () => {
    // сделать условия if(введен номер и запрос отправлен, затем выполняются 2 данные функции) else надпись - введите корректно номер телефона
    setModalThanksActive(true)

  }
    return (
 
      <div className={styles.questions}>
      <div className={styles.questions_head}>
        <h2>Остались вопросы?</h2>
        <div className={styles.questions_content}> 
          <div className={styles.questions_foto}></div>
          <div className={styles.questions_form}>
            <div className={styles.questions_form_info}>
              <p>Оставьте заявку и наш менеджер перезвонит вам в самое ближайшее время</p>
            </div>
            <div className={styles.questions_form}>
            <input type="text" placeholder="Введите ваше имя"/>
            <input type="text" placeholder="Введите ваш телефон"/>
            </div>
            <div className={styles.questions_btn}>
              <ButtonSendOrder changeModalThanks={changeModalThanks}>Оставить заявку</ButtonSendOrder>
            </div>
          </div>
        </div>
      </div>
      <ModalThanks
        modalThanksActive={modalThanksActive}
        setModalThanksActive={setModalThanksActive}
      />
    </div>

    )
}

export default Questions;