import React from 'react'
import s from './Products.module.css'
import { Link } from 'react-router-dom';
const Products = ({title, style = {}, products = [], amount}) => {
    const list = products.filter((_, i)=>i < amount);
    console.log("list", list)
  return (
    <div className={s.main}>
        {title && <h1 className={s.title}>{title}</h1>}

        <div className={s.list}>
          <div className={s.item}>
          {list.map(({id,category,title,image,price})=>(
            <Link to={`/products/${id}`} key={id} className={s.products}>
            
            <img className={s.img} src={image} alt="" />
            
            <div className={s.info}>
                <div className={s.item_title}>{title}</div>
                <div className={s.price}>{price}$</div>
                <div className={s.category}>Category: {category}</div>
                

            </div>
            
            
            </Link>
           ))}
          </div>
        </div>
    </div>
  )
}

export default Products