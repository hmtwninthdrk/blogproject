import React from 'react'

import s from './ShopSideBar.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ShopSideBar = () => {

    const {list} = useSelector(({categories}) => categories)

   

  return (
    
        <div className={s.block}>
        <div className={s.title}>Categories</div>
        <ul className={s.categories}>
           {list.map((item,i)=>(
            
             <li className={s.list }  key={i}>
             <NavLink className={ ({isActive})=>`${s.cats}`}  to = {`/categories/${item}`}>
                {item}
             </NavLink>
            </li>

           ))}
        </ul>
    
    </div>
  )
}

export default ShopSideBar