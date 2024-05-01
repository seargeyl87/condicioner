"use client";
import { useState } from "react";

import styles from "../style/CatalogFilter.module.css";

function CatalogFilter({
  changeChooseProducer,
  changeChooseType,
  changeMinPrice,
  changeMaxPrice,
  changeChooseArea,
  changeChooseInvertor
}) {
  const [producerList, setProducerList] = useState([
    { cond: "Gree", name: "gree", id: 0 },
    { cond: "Panasonic", name: "panasonic", id: 1 },
    { cond: "Electrolux", name: "electrolux", id: 2 },
    { cond: "LG", name: "lg", id: 3 },
    { cond: "Energolux", name: "energolux", id: 4 },
  ]);
  const [chooseProducer, setChooseProducer] = useState(-1);
  const [typeList, setTypeList] = useState([
    { type: "Настенный", name: "настенный", id: 0 },
    { type: "Канальный", name: "канальный", id: 1 },
    { type: "Кассетный", name: "кассетный", id: 2 },
  ]);
  const [chooseType, setChooseType] = useState(-1);

  const [areaList, setAreaList] = useState([
    { area: 25, id: 0 },
    { area: 35, id: 1 },
    { area: 45, id: 2 },
    { area: 55, id: 3 },
    { area: 65, id: 4 },
  ]);

  const [chooseArea, setChooseArea] = useState(-1);

  const [invertorFilter, setInvertorFilter] = useState([
    { choose: "да", id: 0 },
    { choose: "нет", id: 1 },
  ]);

  const [chooseInvertor, setChooseInvertor] = useState(-1);

  const handleChangeProducer = (index, name) => {
    setChooseProducer(index);
    changeChooseProducer(name);
  };

  const handleChangeType = (index, name) => {
    setChooseType(index);
    changeChooseType(name);
  };

  const handleChangeArea = (index, name) => {
    setChooseArea(index);
    changeChooseArea(name);
  };

  const handleChangeInvertor = (index, name) => {
    setChooseInvertor(index);
    changeChooseInvertor(name)

    

  }

  return (
    <div className={styles.container_filter}>
      <div className={styles.filter_producer}>
        <div>Производитель</div>
        <div className={styles.filter_checkbox_list}>
          {producerList.map((item) => (
            <div className={styles.filter_checkbox} key={item.id}>
              <input
                type="checkbox"
                checked={chooseProducer === item.id}
                onChange={() =>
                  chooseProducer === item.id
                    ? handleChangeProducer(-1)
                    : handleChangeProducer(item.id, item.name)
                }
                name={item.name}
              />
              <p>{item.cond}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.filter_type}>
        <div>Тип внутреннего блока</div>

        <div className={styles.filter_checkbox_list}>
          {typeList.map((item) => (
            <div className={styles.filter_checkbox} key={item.id}>
              <input
                type="checkbox"
                checked={chooseType === item.id}
                onChange={() => {
                  chooseType === item.id
                    ? handleChangeType(-1)
                    : handleChangeType(item.id, item.name);
                }}
              />

              <p>{item.type}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.filter_price}>
        <div>Цена</div>
        <div className={styles.price_from_to}>
          <input
            placeholder="От"
            onChange={(event) => {
              changeMinPrice(event.target.value);
            }}
          />
          <input
            placeholder="До"
            onChange={(event) => {
              changeMaxPrice(event.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.filter_power_cold}>
        <div>Обслуживаемая площадь</div>
        <div className={styles.filter_checkbox_list}>
          {areaList.map((item) => (
            <div className={styles.filter_checkbox} key={item.id}>
              <input
                type="checkbox"
                checked={chooseArea === item.id}
                onChange={() => {
                  chooseArea === item.id
                    ? handleChangeArea(-1)
                    : handleChangeArea(item.id, item.area);
                }}
                name={item.area}
              />
              <p>до {item.area} кв м</p>
            </div>
          ))}
        </div>
        <div className={styles.filter_invertor}>
          <div>Инверторная технология</div>
          <div className={styles.filter_checkbox_list}>
            {invertorFilter.map((item) => (
              <div className={styles.filter_checkbox}>
                <input type="checkbox" 
                checked={chooseInvertor == item.id}
                onChange={()=> {
                  chooseInvertor == item.id ? handleChangeInvertor(-1) : handleChangeInvertor (item.id, item.choose)
                }}

                 name={item.choose}/>
                <p>{item.choose}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.filter_power_heat}></div>
      <div className={styles.filter_invertor}></div>
    </div>
  );
}

export default CatalogFilter;
