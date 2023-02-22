import React from "react";

import { useStateValue } from "../../StateProvider";
import Subtotal from "../../Subtotal";
import ProductCart from "../ProductCard/ProductCart";
function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout  card-body">
      <div className="checkout_left">
        {basket.length === 0 ? (
          <div>
            <h2 className="mx-5">Your shopping basket is empty.</h2>
            <p className="mx-5">You have no items in your basket. Buy one.</p>
          </div>
        ) : (
          <div class="card text-center">
            <h2 className="mx-5">Items in the Shopping Basket</h2>
            {basket.length > 0 && (
              <div className="checkout__right">
                <Subtotal />
              </div>
            )}
            {basket.map((item) => (
              <ProductCart
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
