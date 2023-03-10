import React from "react";
import Layout from "./Layout";
import Heading from "./Heading";

const CheckoutForm = () => {
  return (
    <>
      <form>
        <Heading title="Enter your credentials to checkout" size="text-2xl" />
        <label>
          First Name
          <input type="text" />
        </label>
        <label>
          Last Name
          <input type="text" />
        </label>
        <label>
          Address
          <input type="text" />
        </label>
        <label>
          Zip Code
          <input type="number" />
        </label>
        <label>
          Phone Number
          <input type="number" />
        </label>

        <Heading title="Payment information" size="text-xl" />
      </form>
    </>
  );
};

export default CheckoutForm;
