import React from "react";
import "./Checkout.css";
import Subtotal from "../subtotal/Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="Checkout__left">
        <img
          className="checkout__ad"
          src="https://images-fe.ssl-images-amazon.com/images/G/09/2021/x-site/Shinseikatsu_2021/Traffic/ilm_mb_stripe_640x90_4._CB660363256_.jpg"
        />

        <div>
          <h2 className="checout__title">Your shopping Basket </h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
