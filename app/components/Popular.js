"use client";

import { useState } from "react";
import styles from "../style/Popular.module.css";
import CatalogItem from "./CatalogItem";
import Link from "next/link"; 



function Popular() {

  
  const [popularList, setPopularList] = useState([
    {
      name: "Сплит-система gree",
      price: 2000,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 25,
      powerCold: 2.5,
      powerHeat: 2.5,
      manufacturer: "gree",
      type: "кассетный",
    },
    {
      name: "Сплит-система gree",
      price: 2300,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 23,
      powerCold: 2.5,
      powerHeat: 2.8,
      manufacturer: "gree",
      type: "настенный",
    },
    {
      name: "Сплит-система gree",
      price: 2300,
      src: "./_next/static/media/energolux.4173834b.jpeg",
      area: 23,
      powerCold: 2.5,
      powerHeat: 2.8,
      manufacturer: "gree",
      type: "колонный",
    },
    {
      name: "Сплит-система gree",
      price: 2300,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 23,
      powerCold: 2.5,
      powerHeat: 2.8,
      manufacturer: "gree",
      type: "колонный",
    }

  ])
  return (
    <div className={styles.popular}>
      <div className={styles.popular_head}>
        <h2>Популярные модели</h2>
      </div>
      <div className={styles.popular_blocks}>
        {/* <div className={styles.popular_power}>
          <button>До 20 кв м</button>
          <button>От 20 до 30 кв м</button>
          <button>От 30 до 35 кв м</button> 
          <button>От 35 до 50 кв м</button>
          <button>До 70 кв м</button>
        </div> */} 
        <div className={styles.popular_cond_list}>

          {popularList.map((item, index) => <CatalogItem cond={item} key={index}/>)}

        </div>
      </div>
      <div className={styles.popular_all_catalog}>
        <button><Link href="/pages/catalog">Смотреть весь каталог</Link></button>
      </div>
    </div>
  ); 
}

export default Popular;
