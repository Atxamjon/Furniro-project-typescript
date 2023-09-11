import React, { useState } from "react";
import "./Header.scss";
import FurniroIcon from "../../assets/Furniro.svg";
import { Link } from "react-router-dom";
import ProfileIcons from "../../assets/profile.png";
import SearchIcons from "../../assets/search.png";
import LikedIcons from "../../assets/liked.png";
import ShopIcon from "../../assets/shop.png";
import Modal from "../Modal/Madal.tsx";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const handelLikeButtonClick = () => {
    navigateLike("./like");
  }
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsCartOpen(true);
  };

  const closeModal = () => {
    setIsCartOpen(false);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="Header">
      <div className="Header__block">
        <div className="header__left">
          <a href="#">
            <img src={FurniroIcon} alt="furniro icon svg" />
          </a>
        </div>
        <div className="header__center">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <ul>
            <li>
              <img src={ProfileIcons} alt="profile icons" />
            </li>
            <li>
              <img
                src={SearchIcons}
                alt="Search Icons"
                onClick={toggleSearch}
              />
            </li>
            <li>
              <img src={LikedIcons} alt="liked icons" onClick={handelLikeButtonClick}/>
            </li>
            <li>
              <img src={ShopIcon} alt="ShopIcons" onClick={toggleCart} />
              {isCartOpen && (
                <Modal
                  cartItems={cartItems}
                  closeModal={closeModal}
                  removeFromCart={removeFromCart}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
      {isSearchOpen && (
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      )}
    </div>
  );
};

export default Header;
