import React from "react";
import "./navBar.css";

export const NavBar = () => {
    return (
        <header className="header">
      <div className="header__content container">
        <h3>
          <a href="#" className="content__title">Dietetica Buena Vibra 🌱</a>
        </h3>
        <nav>
          <ul className="content__navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Carrito</a></li>
          </ul>
        </nav>
      </div>
    </header>
    )
}

export default NavBar;