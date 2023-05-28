import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router'
import Sites from './Sites/Sites'
import MainShop from './Sites/Shop/MainShop'
import SoloProduct from './Sites/Shop/Products/SoloProduct'
import SoloCategory from './Sites/Shop/SoloCategory/SoloCategory'
import Cart from './Sites/Shop/Cart/Cart'
import HomeMovie from './Sites/Movies/routes/HomeMovie'
import Films from './Sites/Movies/routes/Films'
import MainTodo from './Sites/TodoList/MainTodo'



const App = () => {
  return (
    
    <Routes>
        <Route index element = {<Home/>}/>
        <Route path="sites" element={<Sites />}/>
        <Route path="mainshop" element={<MainShop/>}/>
        <Route path="products/:id" element={<SoloProduct/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="categories/:item" element={<SoloCategory/>}/>
        <Route path="mainfilm" element={<HomeMovie/>}/>
        <Route path="films" element={<Films/>}/>
        <Route path="maintodo" element={<MainTodo/>}/>

    </Routes>
  )
}

export default App