import LayoutProducts from "../Layout/LayoutProducts";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ products }) => {
  return (
    <div className={styles.container}>
      <LayoutProducts products={products} />
    </div>
  );
};

export default ItemListContainer;
