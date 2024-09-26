import React from "react";
import Card from "./Card";

const ProductList = ({ data, status, setStatus, handleClick, cartlist }) => {
  return (
    <div className="container mx-auto flex flex-wrap">
      {data.map((item, index) => {
        const isAdded = cartlist ? cartlist.filter((e) => e.id === item.id) : [];
        // console.log(cartlist);
        return (
          <Card
            key={item.id}
            item={item}
            status={isAdded.length > 0}
            setStatus={setStatus}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
