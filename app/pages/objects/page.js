"use client";
import { useState } from "react";
import styles from "../../style/Objects.module.css";
import cond from "../../img/cond1.jpeg";

const Objects = () => {
  const [ourObjects, setOurObjects] = useState([
    { src: "/_next/static/media/condicioner3.ac75354b.jpeg", id: 1 },
    { src: "/_next/static/media/condicioner3.ac75354b.jpeg", id: 2 },
    { src: "/_next/static/media/condicioner3.ac75354b.jpeg", id: 3 },
    { src: "/_next/static/media/condicioner3.ac75354b.jpeg", id: 4 },
    { src: "/_next/static/media/condicioner3.ac75354b.jpeg", id: 5 },
    { src: "/_next/static/media/condicioner3.ac75354b.jpeg", id: 6 },
  ]);
  return (
    <div className={styles.objects}>
      <h1>Наши объекты</h1>
      <div className={styles.container}>
        {ourObjects.map((item) => (
          <div className={styles.objects_item}>
            <img src={item.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objects;
