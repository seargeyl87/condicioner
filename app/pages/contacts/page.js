import styles from "../../style/Contacts.module.css";
import operator from "../../img/operator.jpg";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h1>Контакты</h1>
      <div className={styles.container}>
        <div className={styles.contacts_info}>

          <div className={styles.contacts_phones}>
            <h2>Наши телефоны</h2>
            <div className={styles.phone}>
              <div className={styles.logo_phone}></div>
              <p>+375291492879</p>
            </div>
            <div className={styles.phone}>
              <div className={styles.logo_phone}></div>
              <p>+375291492879</p>
            </div>
          </div>

          <div className={styles.contacts_email}>
            <h2>E-mail:</h2>
            <div className={styles.email}>
              <div className={styles.logo_email}></div>
              <p>swiehfi@mail.ru</p>
            </div>
          </div>

          <div className={styles.contacts_work_time}>
            <h2>Время работы:</h2>
            <div className={styles.time}>
              <p>Пн - Пт: с 9:00 до 18:00</p>
              <p>Сб - Вс: с 9:00 до 18:00</p>
            </div>
          </div>


        </div>
        <div className={styles.contacts_img}>
          <img src={operator.src} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
