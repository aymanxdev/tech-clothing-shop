import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableApiKey = "from Stripe website";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Tech Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/6427176c8c"
      description={`Your Total is £${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableApiKey}
    />
  );
};

export default StripeCheckoutButton;
