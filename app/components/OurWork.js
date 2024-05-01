import styles from "../style/OurWork.module.css";
import Link from "next/link";
import condicioner1 from "../img/condicioner1.jpeg";
import condicioner2 from "../img/condicioner2.jpeg";
import condicioner3 from "../img/condicioner3.jpeg";
import condicioner4 from "../img/condicioner4.jpeg";
import condicioner5 from "../img/condicioner5.jpeg";
import condicioner6 from "../img/condicioner6.jpeg";

function OurWork() {
  return (
    <div className={styles.our_work}>
      <div className={styles.our_work_into}>
        <div className={styles.our_work_head}>
          <h2>Наши работы</h2>
        </div>
        <div className={styles.foto_list}>
          <div className={styles.foto_item}>
            <img src={condicioner1.src} />
          </div>
          <div className={styles.foto_item}>
            <img src={condicioner2.src} />
          </div>
          <div className={styles.foto_item}>
            <img src={condicioner3.src} />
          </div>
          <div className={styles.foto_item}>
            <img src={condicioner4.src} />
          </div>
          <div className={styles.foto_item}>
            <img src={condicioner5.src} />
          </div>
          <div className={styles.foto_item}>
            <img src={condicioner6.src} />
          </div>
        </div>
        <div className={styles.btn}>
          <button>
            <Link href="/pages/objects">Смотреть все работы</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
