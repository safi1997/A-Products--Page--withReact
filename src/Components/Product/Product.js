import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket content", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product card">
      <img src={image} alt="" />
      <div className="product__info card-body">
        <p className="card-title">{title}</p>
        <p className="product__price">
          <small className="card-text">$</small>
          <strong className="card-text">{price}</strong>{" "}
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p className="card-text">*</p>
            ))}
        </div>
      </div>

      <button onClick={addToBasket}>
        Add to Basket <ShoppingBasketIcon />
      </button>
    </div>
  );
}

export default Product;
