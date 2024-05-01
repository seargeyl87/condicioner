import styles from "../style/Advantages.module.css";


function Advantages() {
    return (
        <div className={styles.advantages}>
        <div className={styles.advantages_head}>
          <h2>Почему стоит выбрать именно нас?</h2>
        </div>
        <div className={styles.advantages_blocks}>
          <div className={styles.advantages_block_item}>
            <div className={styles.advantages_block_item_icon_experience}></div>
            <div className={styles.advantages_block_item_info}>
              <div className={styles.advantages_block_item_head}>
                <h4>Опыт работы</h4>
              </div>
              <div className={styles.advantages_block_item_description}>
                Мы работаем более 15 лет и выполнили более 4000 заказов
              </div>
            </div> 
          </div>

          <div className={styles.advantages_block_item}>
            <div className={styles.advantages_block_item_icon_time}></div>
            <div className={styles.advantages_block_item_info}>
              <div className={styles.advantages_block_item_head}>
                <h4>Соблюдение сроков</h4>
              </div>
              <div className={styles.advantages_block_item_description}>
                Мы твердо соблюдаем сроки и выполняем заказ в день,
                согласованный с клиентом
              </div>
            </div>
          </div>

          <div className={styles.advantages_block_item}>
            <div className={styles.advantages_block_item_icon_quality}></div>
            <div className={styles.advantages_block_item_info}>
              <div className={styles.advantages_block_item_head}>
                <h4>Качество монтажа</h4>
              </div>
              <div className={styles.advantages_block_item_description}>
                Для монтажа кондиционеров мы используем только сертифицированные
                расходные материалы европейского качества
              </div>
            </div>
          </div>

          <div className={styles.advantages_block_item}>
            <div className={styles.advantages_block_item_icon_help}></div>
            <div className={styles.advantages_block_item_info}>
              <div className={styles.advantages_block_item_head}>
                <h4>Помощь в подборе</h4>
              </div>
              <div className={styles.advantages_block_item_description}>
                Мы помогаем нашим клиентам подобрать кондиционер с оптимальным
                соотношением цена/качество
              </div>
            </div>
          </div>
        </div>
      </div>

    )

}

export default Advantages;