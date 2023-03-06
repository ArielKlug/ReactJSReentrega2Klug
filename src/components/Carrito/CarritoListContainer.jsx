import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Swal from 'sweetalert2'
import { MdDeleteForever } from "react-icons/md";
import styles from "./CarritoContainer.module.css";
import { useContext } from "react";

import CartCounter from "../CartWidget/CartCount";
import Context from "../../context/Context";
import { Link, Navigate } from "react-router-dom";

const CarritoListContainer = () => {
  const { carrito, setCarrito, setTotal, setCount, eliminarCarrito, agregarAlCarrito, total, eliminarItem } =
    useContext(Context);



    const compraste = () => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Compra realizada con éxito',
        showConfirmButton: false,
        timer: 1500
      })
setCarrito([])
setCount(0)
setTotal(0)
      
    }

  return (
    <Flex flex="1" justifyContent="center" flexDirection="column" mb="2">
      {carrito.map((item) => {
        
        return (
          
          <div>
            <div className={styles.flexStart} style={{ marginTop: "20px" }}>
              <Image boxSize="80px" me="3" src={item.img} alt={item.title} />
              <h2 className={styles.title}>{item.title}</h2>
              <Text>{item.description}</Text>
            </div>
            <div>
              <div className={styles.flexEnd}>
                <div className={styles.count}>
                  <p onClick={() => eliminarCarrito(item)}>-</p>
                  <CartCounter
                    title={item.title}
                    category={item.category}
                    amount={item.amount}
                  />
                  <p onClick={() => agregarAlCarrito(item)}>+</p>
                </div>

                <p className={styles.precio}>
                  $ {(item.price * item.amount).toLocaleString()}
                </p>

                <button
                  style={{ padding: "5px" }}
                  onClick={() => eliminarItem(item)}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <Text className={styles.precio} style={{ width: "100%" }}>
        Total: $ {total.toLocaleString()}
      </Text>
       <Link to="/"><Button
              mt="2"
              variant="solid"
              colorScheme="blue"
              type="submit"
              onClick={compraste}
            >
            
              Comprar
            </Button> </Link>
    </Flex>
  );
};

export default CarritoListContainer;
