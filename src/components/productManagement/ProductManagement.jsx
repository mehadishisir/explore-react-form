import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const handleProductAdd = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  return (
    <div>
      <ProductForm handleProductAdd={handleProductAdd}></ProductForm>

      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;
