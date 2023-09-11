import "./Madal.scss";



const Modal = ({ cartItems, closeModal }) => {
  const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

  const removeFromSelectedItems = (index) => {
    const updatedSelectedItems = [...selectedItems];
    updatedSelectedItems.splice(index, 1);
    localStorage.setItem("selectedItems", JSON.stringify(updatedSelectedItems));
  };

  return (
    <div className="modal">
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {selectedItems.map((item, index) => (
          <li key={index} className="modal-item">
            <img
              src={item.img}
              alt={item.title}
              className="modal-item__image"
            />
            <div className="modal-item__details">
              <h3 className="modal-item__title">{item.title}</h3>
              <p className="modal-item__price">{item.price}</p>
              <p className="modal-item__count">Count: {item.count}</p>
              <button onClick={() => removeFromSelectedItems(index)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={closeModal}>Закрыть</button>
    </div>
  );
};

export default Modal;
