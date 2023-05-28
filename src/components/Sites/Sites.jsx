import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import s from '../Sites/Sites.module.css'
import { Link } from 'react-router-dom'

import shop from "../../img/shop.jpg"
import movie from "../../img/movie.jpg"
import todo from "../../img/todo.jpg"

const Sites = () => {
  return (
    <div >
        <Header/>
        
       <div className={s.sites}>
       <div className={s.name}>Web Sites</div>

<div className={s.main}>
  <div className={s.items}>
    <div className={s.item}>
      <Link  to = {`/mainshop`}>
      
      <div className={s.title}>Shop</div>
      <img className={s.img} src={shop} alt="" />
      <div className={s.btn}>OPEN PROJECT</div>
      
      </Link>
    </div>
    <div className={s.item}>
    <Link to = {`/mainfilm`}>
      
      <div className={s.title}>Movies</div>
      <img className={s.img} src={movie} alt="" />
      <div className={s.btn}>OPEN PROJECT</div>
      
      </Link>
    </div>
    <div className={s.item}>
    <Link to = {`/maintodo`} >
      
      <div className={s.title}>TodoList</div>
      <img className={s.img} src={todo} alt="" />
      <div className={s.btn}>OPEN PROJECT</div>
      
      </Link>
    </div>
   
  </div>
</div>
       </div>

        <Footer/>
    </div>
  )
}

export default Sites