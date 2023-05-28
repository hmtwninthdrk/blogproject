import React from 'react'
import s from '../Footer/Footer.module.css'
const Footer = () => {
  return (
    <div className={s.f}>
    <div className={s.footer_box}></div>
    <div className={s.footer}>
      <div className={s.footer_title}>
      Blog
      </div>
      <div className={s.footer_copyright}>
      © All rights reserved
      </div>
      <div className={s.footer_text}>Developed by Tony</div>
    </div>
    <div className={s.footer_box}></div>
    </div>

  )
}

export default Footer