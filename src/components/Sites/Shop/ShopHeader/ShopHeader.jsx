import React, { useEffect, useState } from 'react'
import st from '../ShopHeader/ShopHeader.module.css'
import { Link } from 'react-router-dom'
import shoplogo from "../../../../img/logo.svg"
import shopcart from "../../../../img/shopcart.png"
import { useGetProductsQuery } from '../../../Redx/apiLayer'
import { useDispatch, useSelector } from 'react-redux'

const ShopHeader = () => {

  const [value, setValue] = useState("");
 
  const {currentUser,cart} = useSelector(({user})=>user)

 

  return (
    <div className={st.header}>
        <div>
          <Link  to = {`/mainshop`}><img className={st.logo} src={shoplogo} alt="logo" /></Link>
        </div>


        <div className={st.nav}>
            <Link to = {`/cart`}><img className={st.icons} src={shopcart} alt="" /></Link>
            <Link className={st.return} to = {`/`}>Return to Blog</Link>
            <div className={st.sh_cart}>{cart.length}</div>
        </div>

    </div>
  )
}

export default ShopHeader