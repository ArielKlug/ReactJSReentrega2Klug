import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../../../context/Context";

import styles from "./ItemDetail.module.css";

const ItemDetail = ({ products }) => {
  
  const { category, id } = useParams();

  const item = products.find(
    (item) => item.id === id && item.category === category
    
  );
  
  const { agregarAlCarrito } = useContext(Context);
  
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.productImg}>
          <img src={item.img} alt={item.title} height="420" width="327" />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productText}>
            <h2>{item.title}</h2>
            <h3>
              <p>{item.description}</p>
            </h3>
            <div className={styles.productPriceBtn}>
              <p>
                <span>${item.price}</span>
              </p>

              <button onClick={() => agregarAlCarrito(item)}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
