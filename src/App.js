import React, { useState, useEffect } from "react";
import { Products, Navbar } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});


  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () =>{
      

      setCart(await commerce.cart.retrieve())
  }

  useEffect(() => {
    fetchProducts();
    fetchCart()
  }, []);

  console.log("what products: ",products);
  console.log("whats in the cart: ",cart);

  return (
    <div>
      <Navbar />
      <Products products={products}/>
    </div>
  );
};

export default App;
