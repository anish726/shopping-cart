import ProductCard from './ProductCard'
import styles from './Product.module.css';
import data from '../../data.json'
import FilterProduct from '../filterProduct/FilterProduct';
import { useState,useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState(data)
  const [newItems, setNewItems] = useState([]);
  console.log(products,"pros")
  const [eventName, setEventName] = useState("");
  const filterItems = (e) => {
      if(e.target.value==="all"){
        setProducts(data)
      }
      else{
    const updateEle = newItems.filter(item => item.category === e.target.value )
    setProducts(updateEle)
      }
  }

  useEffect(() => {
    setNewItems(data)
  }, [data])
  
 
  const [sort, setSort] = useState("")
  const [sortHigh, setSortHigh] = useState("")
  

   const sortFilter = (e) => {
     console.log(e.target.value)
     if(e.target.value === "lowest")
     {
        const upDateLowPrice = products.sort((a, b) => a.price - b.price)
        setSort(upDateLowPrice) 
     }
       else {
        const upDateHighPrice = products.sort((a, b) => b.price - a.price)
        setSortHigh(upDateHighPrice) 
       }
  }
  return (
    <div className={styles.container}>
      <FilterProduct eventName={eventName}  sort={sort}
      sortFilter={sortFilter} filterItems={filterItems}/>
     
      <h1 className={styles.title}>All Results Items {products.length}</h1>
      <div className={styles.cards}>
        {  products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;