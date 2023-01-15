import "./products.css";
import { useContext, useState } from "react";
import { dataContext } from "../../App";
import ItemAdded from "../items/itemsAdded";

const Product = () => {
  const { cart, data, setCart } = useContext(dataContext);
  const [item, setItem] = useState(false);
  const handler = (itemId) => {
    const result = data.filter((eac) => eac.id === itemId);
    setItem(true);
    setTimeout(() => {
      setItem(false);
    }, 2000);
    setCart([...cart, result[0]]);
  };
  let data_1 = data.map((each) => (
    <li key={each.id}>
      <div className="card_container">
        <div className="image_holder">
          <img
            src={each.image}
            alt="image_product"
            className="product__image"
          />
        </div>
        <p className="title info">
          {each.title}
          <span className="price info">${each.price}</span>
        </p>
        <p className="discription info">{each.discription}</p>
        <button
          className="add info"
          title="add to cart"
          onClick={() => handler(each.id)}
        >
          +
        </button>
      </div>
    </li>
  ));
  return (
    <div className="product_page">
      {item ? <ItemAdded /> : null}
      <h1 className="title_1">Collection</h1>
      <ul className="products">{data_1}</ul>
    </div>
  );
};

export default Product;
