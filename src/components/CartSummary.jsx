import React from 'react';

const CartSummary = ({ total, cardlist,removeCart }) => {
  return (
    <div className="cartsum absolute top-10 right-0 shadow-md p-4 bg-white border-2">
      <h2 className="text-md font-bold mb-2">Cart Summary ({cardlist.length})</h2>
      {
        cardlist.map((item, index) => {
          return (
            <div key={index} className="flex border-t-2 py-2">
              <div className="flex">
                <img
                  className="h-10 w-12 object-contain"
                  src={item.image}
                  alt={item}
                />
                <h1 className="ml-2 w-80" key={index}>
                  {item.title}
                </h1>
              </div>
              <div className="w-full flex justify-end">
                <span className="font-bold">{item.price}</span>
                <i className="ml-4" onClick={() => removeCart(item.id)}>
                  X
                </i>
              </div>
            </div>
          );
        })
      }
      <h3 className='font-bold'>Total: {total}</h3>
    </div>
  );
};

export default CartSummary;