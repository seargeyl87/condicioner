import styles from "../style/Footer.module.css";
import Link from "next/link";


const Footer = () => (
  <footer className={styles.footer}> 
    <div className={styles.footer_into}>
      <div className={styles.requisites}>
        <span className={styles.company}>ИП Кириченко А А</span><br/>
        <span className={styles.info}>
          УНП 491059396 <br/> Р/с: BY83TECN30126211800100000000 в РУ №3 ОАО
          "Технобанк" БИК TECNBY22 Регистрационный номер в Торговом реестре
          Республики Беларусь: 356661 Свидетельство о государственной
          регистрации №491059396 выдано 31.07.2019 г.
        </span>
      </div>
      <div className={styles.articles}>
      <div className={styles.articles_into}>
          <div className={styles.head}>Популярные статьи</div>
          <div className={styles.article_item}><Link href="/pages/stati/stati-item">Как выбрать кондиционер в квартиру?</Link></div>
          <div className={styles.article_item}><Link href="/pages/stati/stati-item">Уход за кондиционером</Link></div>
          <div className={styles.article_item}><Link href="/pages/stati/stati-item">Преимущества инверторных кондиционеров</Link></div>
          <div className={styles.article_item}><Link href="/pages/stati/stati-item">Как правильно выбрать мощность кондиционера</Link></div>
      </div>
      </div>
      <div className={styles.contacts}>
          <div className={styles.head}>Контакты</div>
          <p>+375296290022</p>
          <p>info@mail.ru</p>
          <p>220131, РБ, г. Минск, 4-ый переулок Кольцова 51, оф.715</p>
      </div>
    </div>
  </footer>
);

export default Footer;
