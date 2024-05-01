import styles from "../style/PopularArticle.module.css";

function PopularArticle() {
    return (
        <div className={styles.popular_articles}>
        <div className={styles.popular_articles_head}>
          <h2>Популярные статьи</h2>
        </div>
        <div className={styles.popular_articles_list}>
          <div className={styles.popular_articles_list_item}>
            <div className={styles.popular_articles_list_item_picture1}></div>
            <div className={styles.popular_articles_list_item_head}>
              <h3>Как выбрать кондиционер в квартиру?</h3>
            </div>
            <div className={styles.popular_articles_list_item_description}>
              <p>
                Проблема правильного выбора нужной модели кондиционеров
                беспокоит 95% наших покупателей. Поэтому в рамках этой статьи мы
                дадим вам практические рекомендации по выбору кондиционера для
                дома или офиса.
              </p>
            </div>
          </div>
          <div className={styles.popular_articles_list_item}>
            <div className={styles.popular_articles_list_item_picture2}></div>
            <div className={styles.popular_articles_list_item_head}>
              <h3>Как выбрать кондиционер в квартиру?</h3>
            </div>
            <div className={styles.popular_articles_list_item_description}>
              <p>
                Проблема правильного выбора нужной модели кондиционеров
                беспокоит 95% наших покупателей. Поэтому в рамках этой статьи мы
                дадим вам практические рекомендации по выбору кондиционера для
                дома или офиса.
              </p>
            </div>
          </div>
          <div className={styles.popular_articles_list_item}>
            <div className={styles.popular_articles_list_item_picture3}></div>
            <div className={styles.popular_articles_list_item_head}>
              <h3>Как выбрать кондиционер в квартиру?</h3>
            </div>
            <div className={styles.popular_articles_list_item_description}>
              <p>
                Проблема правильного выбора нужной модели кондиционеров
                беспокоит 95% наших покупателей. Поэтому в рамках этой статьи мы
                дадим вам практические рекомендации по выбору кондиционера для
                дома или офиса.
              </p>
            </div>
          </div>
        </div>
      </div>

    )
}

export default PopularArticle;