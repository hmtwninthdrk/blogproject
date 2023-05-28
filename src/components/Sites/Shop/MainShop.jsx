import React, { useEffect } from 'react'
import ShopHeader from './ShopHeader/ShopHeader'
import ShopFooter from './ShopFooter/ShopFooter'
import stl from './MainShop.module.css'
import ShopSideBar from './ShopSideBar/ShopSideBar'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../Redx/categories/categoriesLayer'
import Banner from './Banner/Banner'
import { getProducts } from '../../Redx/products/productsLayer'
import Products from './Products/Products'

const MainShop = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategories());
    dispatch(getProducts());
  },[dispatch])

  const {list} = useSelector(({products}) => products)
  return (
    <div className={stl.shop_m}>
<div className={stl.shop_container}>
        <ShopHeader/>

        <div className={stl.center}>
        <ShopSideBar/>
        <Banner/>
        </div>
        <Products products={list} amount={9} title={"New Arrival"} />

        <ShopFooter/>

    </div>
    </div>
  )
}

export default MainShop