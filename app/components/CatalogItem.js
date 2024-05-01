"use client";

import { useState } from "react";

import styles from "../style/CatalogItem.module.css";
import Button from "../components/Button";
import Modal from "./Modal";
import ModalThanks from "./ModalThanks";


function CatalogItem(cond) {

  const [modalActive, setModalActive] = useState(false);
  const [modalThanksActive, setModalThanksActive] = useState(false);

  const changeModalThanks = () => {
    // сделать условия if(введен номер и запрос отправлен, затем выполняются 2 данные функции) else надпись - введите корректно номер телефона
setModalActive(false);
setModalThanksActive(true);
};

  return (
    <div className={styles.catalog_cond_list_item}>
      <div
        className={styles.catalog_cond_list_item_picture}
        style={{
          backgroundImage: `url(${cond.cond.src})`,
        }}
      ></div>

      <div className={styles.catalog_cond_list_item_head}>
        <h4>{cond.cond.name}</h4>
      </div>
      <div className={styles.catalog_cond_list_item_price}>
        {cond.cond.price} руб
      </div>
      <div className={styles.catalog_cond_list_item_description}>
        <div className={styles.catalog_cond_list_item_area}>
          <p>Обслуживаемая площадь:</p>
          <p>{cond.cond.area} кв м</p>
        </div>
        <div className={styles.catalog_cond_list_item_power_cool}>
          <p>Мощность охлаждения:</p>
          <p>{cond.cond.powerCold} кВт</p>
        </div>
        <div className={styles.catalog_cond_list_item_power_heat}>
          <p>Мощность обогрева:</p>
          <p>{cond.cond.powerHeat} кВт</p>
        </div>
      </div>
      <div className={styles.catalog_cond_list_item_buttons}>
        <Button className={styles.btn} setModalActive={setModalActive}>Оставить заявку</Button>
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

export default CatalogItem;
