import React from "react";
import TextInput from "../toolbox/TextInput";

const ProductDetail = (categories, product, OnSave, onChange) => {
  return (
    <form onSubmit={OnSave}>
      <h2>{product.id ? "update" : "Add"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="error"
      />

      <button type="submit" className="btn btn-success">Save</button>
    </form>
  );
};


export default ProductDetail;