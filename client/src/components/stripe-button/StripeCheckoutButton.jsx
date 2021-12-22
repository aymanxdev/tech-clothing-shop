import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableApiKey =
    "pk_test_51ISp76GSiXLf8ZJ0VTz3LM9T3Oo4SEDb3u8X5gqVrEgpw4FZFBW5SarvvyHKk6HwuQw2UF5CTE4GsJoO5BJ7cS8y00DUfJV9Vl";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("Payment successful");

        console.log(response);
      })
      .catch((error) => {
        console.log("Payment error " + error);
        alert("There was an issue with the payment ");
      });
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
