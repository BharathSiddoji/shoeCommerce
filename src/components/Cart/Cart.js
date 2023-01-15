import React from "react";
import "./cart.css";
import { useContext } from "react";
import { dataContext } from "../../App";
const Cart = () => {
  const { cart, setCart } = useContext(dataContext);
  let total = 0;

  let deleteItem = (itemId) => {
    let filteredCart = cart.filter((each) => each.id !== itemId);
    setCart(filteredCart);
  };
  return (
    <div className="cart_page">
      {cart.length === 0 ? (
        <h1>Your cart is Empty</h1>
      ) : (
        cart.map((each) => {
          total = total + each.price;

          return (
            <div className="cart_card" key={each.id}>
              <div className="image_placeHolder">
                <img
                  src={each.image}
                  alt="logo"
                  className="image_placeHolder"
                />
              </div>
              <div className="item_details">
                <p className="item_title">{each.title}</p>
                <p className="item_discription">{each.discription}</p>
              </div>
              <h1 className="item_price">${each.price}</h1>
              <button
                className="delete"
                onClick={() => {
                  deleteItem(each.id);
                }}
              >
                X
              </button>
            </div>
          );
        })
      )}
      <hr className="divider" />
      <h1>Your total Cart Value : ${total}</h1>
    </div>
  );
};

export default Cart;
