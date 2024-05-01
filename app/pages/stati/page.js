import styles from "../../style/Stati.module.css";
import condicioner1 from "../../img/condicioner1.jpeg";
import Link from "next/link";
 
function Stati() {
  return (
    <div className={styles.stati}> 
      <div className={styles.stati_into}>
        <h1>Полезные статьи</h1>
        <div className={styles.stati_blocks}>


          <div className={styles.stati_item}>
            <div className={styles.stati_item_foto}> 
              <Link href="/pages/stati/stati-item">
                <img src={condicioner1.src} />
              </Link>
            </div>
            <div className={styles.stati_item_txt}>
              <Link href="/pages/stati/stati-item">
                <h2>Как выбрать кондиционер в квартиру?</h2>
              </Link>
              <span>2023-03-21</span>
              <p>
                Ни для кого не секрет, что при покупке кондиционера важно не
                только правильно подобрать оборудование, но и позаботиться о его
                качественной установке. Несомненно, этим делом должны заниматься
                профессионалы, ведь от того, как будет произведен монтаж
                кондиционера
              </p>
              <div className={styles.details}>
              <Link href="/pages/stati/stati-item">Подробнее</Link>
              </div>
            </div>
          </div>

          <div className={styles.stati_item}>
            <div className={styles.stati_item_foto}> 
              <Link href="/pages/stati/stati-item">
                <img src={condicioner1.src} />
              </Link>
            </div>
            <div className={styles.stati_item_txt}>
              <Link href="/pages/stati/stati-item">
                <h2>Уход за кондиционером</h2>
              </Link>
              <span>2023-03-21</span>
              <p>
                Ни для кого не секрет, что при покупке кондиционера важно не
                только правильно подобрать оборудование, но и позаботиться о его
                качественной установке. Несомненно, этим делом должны заниматься
                профессионалы, ведь от того, как будет произведен монтаж
                кондиционера
              </p>
              <div className={styles.details}>
              <Link href="/pages/stati/stati-item">Подробнее</Link>
              </div>
            </div>
          </div>


          <div className={styles.stati_item}>
            <div className={styles.stati_item_foto}>
              <Link href="/pages/stati/stati-item">
                <img src={condicioner1.src} />
              </Link>
            </div>
            <div className={styles.stati_item_txt}>
              <Link href="/pages/stati/stati-item">
                <h2>Преимущества инверторных кондиционеров</h2>
              </Link>
              <span>2023-03-21</span>
              <p>
                Ни для кого не секрет, что при покупке кондиционера важно не
                только правильно подобрать оборудование, но и позаботиться о его
                качественной установке. Несомненно, этим делом должны заниматься
                профессионалы, ведь от того, как будет произведен монтаж
                кондиционера{" "}
              </p>
              <div className={styles.details}>
              <Link href="/pages/stati/stati-item">Подробнее</Link>
              </div>
            </div>
          </div>
          <div className={styles.stati_item}>
            <div className={styles.stati_item_foto}>
              <Link href="/pages/stati/stati-item">
                <img src={condicioner1.src} />
              </Link>
            </div>
            <div className={styles.stati_item_txt}>
              <Link href="/pages/stati/stati-item">
                <h2>Как правильно выбрать мощность кондиционера</h2>
              </Link>
              <span>2023-03-21</span>
              <p>
                Ни для кого не секрет, что при покупке кондиционера важно не
                только правильно подобрать оборудование, но и позаботиться о его
                качественной установке. Несомненно, этим делом должны заниматься
                профессионалы, ведь от того, как будет произведен монтаж
                кондиционера
              </p>
              <div className={styles.details}>
              <Link href="/pages/stati/stati-item">Подробнее</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stati;
