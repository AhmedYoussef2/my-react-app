import React, { useContext } from 'react';
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
const Home = () => {

  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    return (
      (item.category === "electronics" || item.category === "women's clothing"  ||  item.category === "jewelery" )&& item.id!==20
    );
  });
  return (<div>
    <section className='py-16 mx-6' >
      <div className='container '>
        <div className='mx-10 grid grid-cols-1 md:grid-cols-2
    lg:grid-cols-4 xl:grid-cols-5  max-w-sm 
    mx-auto md:max-w-none md:mx-0'>
          {filteredProducts.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;
