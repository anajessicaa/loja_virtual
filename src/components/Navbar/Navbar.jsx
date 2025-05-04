import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import menu from "../../data/data";
import "./navbar.css";

function CartIcon({ onClick, total }) {
  return (
    <div className="cart-wrapper" onClick={onClick}>
      <FaShoppingCart className="icon cart-icon" />
      {total > 0 && <span className="cart-count">{total}</span>}
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { carrinho } = useContext(CartContext);
  const totalItens = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <nav className="navBar">
      <Link to="/">
        <span className="logo"> eSneakers</span>
      </Link>

      <div className="menu-container">
        <div className="left mobile-only">
          <CartIcon onClick={() => navigate("/carrinho")} total={totalItens} />
          <button onClick={() => setMenuOpen(true)}>
            <IoMdMenu
              className="icon"
              style={{ display: menuOpen ? "none" : "block" }}
            />
          </button>
        </div>

        <ul className="desktop-menu">
          {menu.map((item) => (
            <li key={item.text}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
          <CartIcon onClick={() => navigate("/carrinho")} total={totalItens} />
        </ul>

        {menuOpen && (
          <div className="overlay" onClick={() => setMenuOpen(false)} />
        )}

        <div className={`left_menu ${menuOpen ? "open" : ""}`}>
          <button className="btn-close" onClick={() => setMenuOpen(false)}>
            <IoMdClose className="icon icon_close" />
          </button>
          <ul className="left_menu_items">
            {menu.map((item) => (
              <li key={item.text}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
