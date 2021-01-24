import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const onToken = (token) => {
  console.log(token);
  alert("Payment successful");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IBuI9E6Npn68biPLyqDumF5pVhpNHytext5sOWndfpvi8p0WrjW66xxe0ysPGBGcC3YyiaaWXcveNAYBHQdjlYE00HOPSf5YQ";

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Chlothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      //publishableKey={publishableKey}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
