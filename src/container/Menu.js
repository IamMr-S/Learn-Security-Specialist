import React from 'react'
import { Link as Scroll } from 'react-scroll'

const Menu = () => {

  const onClickMenuIcon = () => {
    document.querySelectorAll('.menuIconLineStyle')
    .forEach((line) => line.classList.toggle('active'));
    document.querySelectorAll('.menuStyle')
    .forEach((img) => img.classList.toggle('active'));
  }

  return (
    <>
      <button className='menuIconStyle' onClick={onClickMenuIcon}>
        <span className='menuIconLineStyle' />
        <span className='menuIconLineStyle' />
        <span className='menuIconLineStyle' />
      </button>
      <div className='menuStyle'>
        {/* ホーム */}
        <Scroll className='menuIconImg' to='introduction'></Scroll>
        {/* ニュース */}
        <Scroll className='menuIconImg' to='news'></Scroll>
        {/* 目次 */}
        <Scroll className='menuIconImg' to='contents'></Scroll>
        {/* 設定 */}
        <Scroll className='menuIconImg' to='#'></Scroll>
        {/* コンタクト */}
        <Scroll className='menuIconImg' to='#'></Scroll>
      </div>
    </>
  )
}

export default Menu