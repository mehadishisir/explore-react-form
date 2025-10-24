import React from "react";

const ProductForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const newProduct = {
      name,
      price,
      quantity,
    };
    console.log(newProduct);
  };
  return (
    <div>
      <h1>This is your Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="name" name="name" placeholder="name" />
        <br />
        <input type="number" name="price" placeholder="name" />
        <br />
        <input type="number" name="quantity" placeholder="name" />
        <br />
        <input type="submit" placeholder="submit" />
        <br />
      </form>
    </div>
  );
};

export default ProductForm;
