import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShopProductList.scss";

const ShopProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/singleCard");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedCard(null);
  };

  const handleAddToCart = (card) => {
    setSelectedCard(card);

    const selectedItems =
      JSON.parse(localStorage.getItem("selectedItems")) || [];
    selectedItems.push({
      img: card.img,
      title: card.title,
      price: card.price,
    });
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  };

  const renderPagination = () => {
    const pageNumbers = Math.ceil(products.length / productsPerPage);

    return (
      <ul className="pagination">
        {Array.from({ length: pageNumbers }, (_, index) => index + 1).map(
          (pageNumber) => (
            <li
              key={pageNumber}
              className={
                selectedCard
                  ? "disabled"
                  : currentPage === pageNumber
                  ? "active"
                  : ""
              }
              onClick={() => handlePaginationClick(pageNumber)}
            >
              {pageNumber}
            </li>
          )
        )}
      </ul>
    );
  };

  return (
    <div className="ShopProductList">
      <div className="product-list">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className={`card ${selectedCard === product ? "selected" : ""}`}
            onMouseEnter={() => setSelectedCard(product)}
            onMouseLeave={() => setSelectedCard(null)}
          >
            <img src={product.img} alt={product.title} />
            <h3 className="card-title">{product.title}</h3>
            <p className="card-description">{product.description}</p>
            <div className="prices">
              <h3 className="card-price">{product.price}</h3>
              <p className="card-new-price">{product.newPrice}</p>
            </div>
            <button
              className="add-card-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {renderPagination()}
    </div>
  );
};

export default ShopProductList;
