import React from 'react'
import st from './Product.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../Redx/user/userLayer';
const Product = (item) => {
  const {title,description,image,price} = item
  const dispatch = useDispatch();
  const addCart = () =>{
    dispatch(addToCart(item))

  }

  return (
    <div className={st.product}>
      <div className={st.title}>{title}</div>
      <img src={image} className={st.img}  />
      <div className={st.price}>{price}$</div>
      <div className={st.btns}>
        <button onClick={addCart} className={st.btn}>Add To Cart</button>
      </div>
      <div className={st.description}>{description}</div>

    </div>
  )
}

export default Product