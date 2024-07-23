import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [popup, setPopup] = useState(false);
  const [status, setStatus] = useState(true);
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
      .finally(setLoading(false));
  };

  const handlePopup = () => {
    setPopup(!popup);
  };
  const handleAddCart = (item) => {
    setCartList([...cartlist,item])
    setCount(pval => pval + 1)
    setStatus(false)
  };
  
  const handleRemoveCart = (id) => {
    setStatus(true);
    setCount(pval=> pval - 1)
  };

  const removeCart = (id) => {
    const remove = cartlist.filter((item) => item.id !== id)
    setCartList(remove)
    setCount((pval) => pval - 1);
    //console.log(item)
  }


  return (
    <div className="container mx-auto relative">
      <Header cardlist={cartlist} handlePopup={handlePopup} />
      {loading ? (
        <span>Loading</span>
      ) : (
        <ProductList
          data={data}
          count={count}
          setCount={setCount}
          handleAddCart={handleAddCart}
          handleRemoveCart={handleRemoveCart}
          status={status}
          setStatus={setStatus}
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
