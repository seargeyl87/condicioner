"use client";
import { useState } from "react";
import styles from "../style/Navbar.module.css";
import Link from "next/link"; 
import Modal from "./Modal";
import ModalThanks from "./ModalThanks";

function Navbar() {
  const [modalActive, setModalActive] = useState(false);
  const [modalThanksActive, setModalThanksActive] = useState(false);

  const changeModalThanks = () => {
    // сделать условия if(введен номер и запрос отправлен, затем выполняются 2 данные функции) else надпись - введите корректно номер телефона
setModalActive(false);
setModalThanksActive(true);
};

  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <div className={styles.header_logo}>
          <img src="https://xn--24-6kc5ajgi3c.xn--90ais/wp-content/themes/climate24/src/img/logo.png" />
        </div>
        <div className={styles.header_info}>
          <p>Продажа и установка кондиционеров под ключ</p>
        </div> 
        <div className={styles.header_mode}>
          <p>Режим работы</p> 
          <p>Пн-Пт: с 9:00 до 18:00</p>
          <p>Сб-Вс: с 10:00 до 18:00</p> 
        </div>
        <div className={styles.header_order_btn}>
          <button onClick={() => setModalActive(true)}>заказать звонок</button>
        </div>
        <div className={styles.header_phone}>
          <p>+39458030945</p>
          <p>+39458030945</p>
        </div>
      </div>
      <div className={styles.menu}>
        <ul className={styles.menu_list}> 
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/pages/catalog">Каталог</Link>
          </li> 
          <li>
            <Link href="/pages/about">О нас</Link>
          </li>
          <li>
            <Link href="/pages/stati">Статьи</Link>
          </li>
          <li>
            <Link href="/pages/montaj">Монтаж</Link>
          </li>
          <li> <Link href="/pages/akcii">Акции</Link></li>
          <li> <Link href="/pages/objects">Наши объекты</Link></li>
          <li><Link href="/pages/contacts">Контакты</Link></li>
        </ul>
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

export default Navbar;
