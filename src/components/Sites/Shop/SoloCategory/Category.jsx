import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Products from '../Products/Products';
import { useParams } from 'react-router'
import { useGetOneCategQuery } from '../../../Redx/apiLayer'
import { getCategories } from '../../../Redx/categories/categoriesLayer'
import { getProducts } from '../../../Redx/products/productsLayer'
const Category = () => {
    const {item} = useParams();
    const {data} = useGetOneCategQuery({item})
    console.log(data)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getCategories());
      dispatch(getProducts());
    },[dispatch])
   
   
  return (
    <>
    <Products title = {""} style = {""} products = {data} amount = {3}/>
    </>
  )
}

export default Category