import React from "react";

const ProductForm = ({ handleProductAdd }) => {
  const [error, setError] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const priceValue = e.target.price.value;
    const quantityValue = e.target.quantity.value;
    if (!name || !priceValue || !quantityValue) {
      setError("All fields are required");
      return;
    } else if (isNaN(priceValue) || isNaN(quantityValue)) {
      setError("Price and Quantity must be valid numbers");
      return;
    } else {
      setError("");
    }

    const newProduct = {
      name,
      price: parseFloat(priceValue),
      quantity: parseInt(quantityValue, 10),
    };
    // console.log(newProduct);
    handleProductAdd(newProduct);
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="text" name="price" placeholder="Price" />
        <br />
        <input type="text" name="quantity" placeholder="quantity" />
        <br />
        <input type="submit" value="Submit" />
        <br />

        <br />
      </form>

      <p>{error}</p>
    </div>
  );
};

export default ProductForm;
