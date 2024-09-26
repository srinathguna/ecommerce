import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";
import { TbLoader3 } from "react-icons/tb";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [popup, setPopup] = useState(false);
  // const [status, setStatus] = useState(true);
  const [cartlist, setCartList] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
      if (setData) {
        setLoading(false)
      }
  };

  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleClick = (item, id) => {
    // const x = cartlist ? cartlist.filter((e)=>e.id === item.id) : ""
    const x = cartlist.filter(e => e.id === item.id)
    if (x.length === 0) {
      setCartList([...cartlist, item]);
      const total = cartlist.reduce((acc, cval) => acc + cval.price, item.price);
      setTotal(total.toFixed(2));
    } 
  };

  const removeCart = (id) => {
    const remove = cartlist.filter((item) => item.id !== id)
    setCartList(remove)
    // setCount((pval) => pval - 1);
    //console.log(item) 
  }

// console.log(cartlist)
  return (
    <div className="container mx-auto relative">
      <Header cardlist={cartlist} handlePopup={handlePopup} />
      {loading ? (
      <TbLoader3 className="rotate-45 inline-flex h-32 w-32 mx-auto rounded-full bg-sky-400 opacity-75" />
        // <span class=""></span>
      ) : (
        <ProductList
          data={data}
          count={count}
          setCount={setCount}
          handleClick={handleClick}
          // status={status}
          // setStatus={setStatus} 
          cartlist={cartlist}
        />
      )}
      {popup ? (
        <CartSummary
          count={count}
          handlePopup={handlePopup}
          cardlist={cartlist}
          removeCart={removeCart}
          total={total}
        />
      ) : null}
    </div>
  );
}

export default App;
