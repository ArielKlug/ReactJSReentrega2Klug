import { useContext } from "react";

import Context from "../../context/Context";
import styles from "./Carrito.module.css";
import { MdDeleteSweep } from "react-icons/md";
import CarritoListContainer from "./CarritoListContainer";


const Carrito = () => {
  const {  vaciarCarrito } = useContext(Context);
  
  return (
    <div>
      <h2>Carrito de compras</h2>

      <div className={styles.container}>
        <button className="btn-danger" onClick={vaciarCarrito}>
          <MdDeleteSweep /> <p>Vaciar carrito</p>
        </button>
      </div>

      <CarritoListContainer />
      
    </div>
  );
};

export default Carrito;
