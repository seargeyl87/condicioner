"use client";

import { useState } from "react";
import styles from "../../style/Catalog.module.css";
import CatalogItem from "../../components/CatalogItem";
import CatalogFilter from "../../components/CatalogFilter";

function Catalog() {
  
  const [catalogList, setCatalogList] = useState([
    {
      name: "Сплит-система gree",
      price: 2000,
      src: "/_next/static/media/condicioner3.ac75354b.jpeg",
      area: 25,
      powerCold: 2.5,
      powerHeat: 2.5,
      manufacturer: "gree",
      type: "кассетный",
      invertor: "да",
    },
    {
      name: "Сплит-система LG",
      price: 2300,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 47,
      powerCold: 2.5,
      powerHeat: 2.8,
      manufacturer: "lg",
      type: "канальный",
      invertor: "нет",
    },
    {
      name: "Сплит-система gree BSAGI-12HN8 серия iGreen Pro DC inverter",
      price: 3000,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 30,
      powerCold: 2.5,
      powerHeat: 2.5,
      manufacturer: "gree",
      type: "настенный",
      invertor: "да",
    },
    {
      name: "Сплит-система gree",
      price: 1200,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 55,
      powerCold: 2.5,
      powerHeat: 2.5,
      manufacturer: "gree",
      type: "кассетный",
      invertor: "да",
    },
    {
      name: "Сплит-система Energolux",
      price: 1200,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 50,
      powerCold: 2.5,
      powerHeat: 2.5,
      manufacturer: "energolux",
      type: "настенный",
      invertor: "да",
    },

    {
      name: "Сплит-система Ballu",
      price: 3000,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 40,
      powerCold: 2.5,
      powerHeat: 2.5,
      manufacturer: "ballu",
      type: "канальный",
      invertor: "да",
    },
    {
      name: "Сплит-система Panasonic",
      price: 1200,
      src: "/_next/static/media/energolux.4173834b.jpeg",
      area: 23,
      powerCold: 2.5,
      powerHeat: 2.3,
      manufacturer: "panasonic",
      type: "кассетный",
      invertor: "да",
    },
  ]);
  
  const [filterName, setFilterName] = useState("");
  const [filterType, setFilterType] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [chooseArea, setChooseArea] = useState(0);
  const [chooseInvertor, setChooseInvertor] = useState();

  const changeChooseProducer = (producer) => {
    setFilterName(producer);
  };

  const changeChooseType = (type) => {
    setFilterType(type);
  };

  const changeMinPrice = (min) => {
    setMinPrice(min);
  };

  const changeMaxPrice = (max) => {
    setMaxPrice(max);
  };

  const changeChooseArea = (area) => {
    setChooseArea(area);
  };

  const changeChooseInvertor = (invertor) => {
    setChooseInvertor(invertor);
  };

  return (
    <div className={styles.catalog}>
      <h1>Каталог кондиционеров</h1>
      <div className={styles.container}>
        <CatalogFilter
          changeChooseProducer={changeChooseProducer}
          changeChooseType={changeChooseType}
          changeMinPrice={changeMinPrice}
          changeMaxPrice={changeMaxPrice} 
          changeChooseArea={changeChooseArea}
          changeChooseInvertor={changeChooseInvertor}
        />
        <div className={styles.container_cond_list}>
          {catalogList
            .filter(
              (item) =>
                (filterName ? item.manufacturer === filterName : true) &&
                (filterType ? item.type === filterType : true) &&
                (chooseArea ? item.area <= chooseArea : true) &&
                (minPrice ? minPrice <= item.price : true) &&
                (maxPrice ? item.price <= maxPrice : true) &&
                (chooseInvertor ? item.invertor === chooseInvertor : true)
            )
            .map((item, index) => (
              <CatalogItem cond={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
