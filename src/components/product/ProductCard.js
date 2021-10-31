import React  from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/action';
import styles from './Product.module.css';
const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
  return (
    <div className={styles}>
      <img src={product.image} height={300} width={220} />
      <h4 className={styles.title}>{product.product}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button className={styles.button} onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;