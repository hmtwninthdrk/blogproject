import {useParams } from 'react-router'
import { useGetProductQuery } from '../../../Redx/apiLayer';
import ShopHeader from '../ShopHeader/ShopHeader';
import Product from './Product';
import React, { useEffect } from 'react'
import ShopFooter from '../ShopFooter/ShopFooter';
import s from './SoloProduct.module.css'
import ShopSideBar from '../ShopSideBar/ShopSideBar';
import { useDispatch } from 'react-redux'
import { getCategories } from '../../../Redx/categories/categoriesLayer';
import { getProducts } from '../../../Redx/products/productsLayer';


const SoloProduct = () => {
  const {id} = useParams();
  const {data} = useGetProductQuery({id})
  console.log(data)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategories());
    dispatch(getProducts());
  },[dispatch])
  return (
    <div className={s.container}>
    <ShopHeader/>
    <div className={s.center}>
        <ShopSideBar />
        <Product {...data} />
        </div>
    
    <ShopFooter/>
    
    </div>
  )
}

export default SoloProduct