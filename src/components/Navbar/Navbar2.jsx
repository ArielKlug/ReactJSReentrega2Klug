import styles from "./Navbar.module.css";

import { Link, NavLink, useNavigate} from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";

const Navbar2 = () => {

  
    const navigate = useNavigate();

    function handleChange(event) {
      navigate(event.target.value);
    }
  
  
  
  return (
    <div className={styles.bgNav}>
       <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
            <Link className={styles.logo} to="/">
                <img src="../../../public/img/Logo-infinity.png" alt="" />
            </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-5">
                <p className="text">Categorías:</p>
            <select  onChange={handleChange} className={styles.pointer}>
          <option value="productos" >Todo</option>
          <option value="electronics" >electronics</option>

          <option value="jewelery"> jewelery</option>

          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </select>
            </ul>
          </div>
          <NavLink to="/">
            <p>HOME</p>
          </NavLink>
          <Link to="/carrito">
            <CartWidget /> 
          </Link>
        </div>
      </nav> 
      
        
       
      
    </div>
  );
};

export default Navbar2;
