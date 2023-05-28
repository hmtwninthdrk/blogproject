import React from 'react'

import s from '../Header/Header.module.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
        <div className={s.header}>

            <div className={s.logo}>
                TonyBlog
            </div>

            <div className={s.cat}>
                <ul className={s.cat_list}>
                    <li><NavLink to = {`/`} className={s.links}>Blog</NavLink></li>
                    <li><NavLink to = {`/sites`} className={s.links}>All Sites</NavLink></li>
                </ul>
            </div>
        </div>
  )
}

export default Header