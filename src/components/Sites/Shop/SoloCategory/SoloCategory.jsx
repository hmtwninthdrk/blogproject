import React, { useEffect } from 'react'
import ShopHeader from '../ShopHeader/ShopHeader'
import ShopFooter from '../ShopFooter/ShopFooter'
import ShopSideBar from '../ShopSideBar/ShopSideBar'
import s from './SoloCategory.module.css'

import Category from './Category'
const SoloCategory = () => {
  
  return (
    <div className={s.container}>
    <ShopHeader/>
    <div className={s.center}>
        <ShopSideBar />
        <Category />
        </div>
    
    <ShopFooter/>
    
    </div>
  )
}

export default SoloCategory