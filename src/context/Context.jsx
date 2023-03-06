import { useState, createContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);


  const vaciarCarrito = () => {
    setCarrito([])
    setTotal(0)
    setCount(0)
  }
  const agregarAlCarrito = (item) => {
    setTotal(total + item.price);
    setCount(count + 1)
    const existeProduct = carrito.find((product) => product.id === item.id);
    if (existeProduct) {
      const newCarrito = carrito.map((product) =>
        product.id === item.id
          ? { ...product, amount: product.amount + 1 }
          : product
      );
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, { ...item, amount: 1 }]);
    }
  };
  
  const eliminarCarrito = (item) => {
    const existeProduct = carrito.find((product) => product.id === item.id);
    if (existeProduct) {
      const newCarrito = carrito.map((product) =>
        product.id === item.id
          ? { ...product, amount: product.amount - 1 }
          : product
      );
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, { ...item, amount: 1 }]);
    }
    setTotal(total - item.price);
    setCount(count - 1);
  };
  const eliminarItem = (item) => {
    const resultado = carrito.filter(product => product.id !== item.id)
    setCarrito(resultado)
    setCount(count - item.amount);
    setTotal(total - item.price * item.amount);
  }


  return (
    <Context.Provider
      value={{
        total,
        agregarAlCarrito,
        eliminarCarrito,
        eliminarItem,
        carrito,
        setCarrito,
        count,
        setCount,
        vaciarCarrito,

        setTotal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
