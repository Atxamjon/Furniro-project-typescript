import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.scss";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [visibleCards, setVisibleCards] = useState(8);
  const [showMore, setShowMore] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/card");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  const handleShowLess = () => {
    setVisibleCards(8);
  };

  const handleCardHover = (productId) => {
    setHoveredCard(productId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  useEffect(() => {
    setShowMore(visibleCards < products.length);
  }, [visibleCards, products.length]);

  return (
    <>
      <h2 className="title-products">Our Products</h2>
      <div className="product-list">
        {products.slice(0, visibleCards).map((product) => (
          <div
            key={product.id}
            className={`card ${hoveredCard === product.id ? "hovered" : ""}`}
            onMouseEnter={() => handleCardHover(product.id)}
            onMouseLeave={handleCardLeave}
          >
            <img
              width={285}
              height={301}
              src={product.img}
              alt={product.title}
            />
            <h3 className="card-title">{product.title}</h3>
            <p className="card-description">{product.description}</p>
            <div className="prices">
              <h3 className="card-price">{product.price}</h3>
              <p className="card-new-price">{product.newPrice}</p>
            </div>
            {hoveredCard === product.id && (
              <Link to="/shop">
                <button className="add-card-button">Add to cart</button>
                <div className="share">
                  <h4>Share</h4>
                  <h4>Compare</h4>
                  <h4>Like</h4>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
      {showMore ? (
        <button className="show-more-button" onClick={handleShowMore}>
          Show More
        </button>
      ) : (
        <button className="show-more-button" onClick={handleShowLess}>
          Show Less
        </button>
      )}
    </>
  );
};

export default ProductList;
