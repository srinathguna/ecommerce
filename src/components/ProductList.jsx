import React from "react";
import Card from "./Card";

const ProductList = ({ data, status, setStatus, handleAddCart, handleRemoveCart }) => {
  return (
    <div className="container mx-auto flex flex-wrap">
      {data.map((item, index) => {
        return (
          <Card key={item.id} item={item} status={status} setStatus={setStatus} handleAddCart={handleAddCart} handleRemoveCart={handleRemoveCart} 
          />
        );
      })}
    </div>
  );
};

export default ProductList;
