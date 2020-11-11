import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HmMZuGwTMcNs5MHd02Q955TUObNDFq24kK7QuQZ3pEExYU6cjMlmeFbcCZHngkNU2c6JPRMiiZHJjHxfNwyb6BN00RkXKMPj3";

  return (
    <StripeCheckout
      label="Pay Now"
      name="KNGS Clothing"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
