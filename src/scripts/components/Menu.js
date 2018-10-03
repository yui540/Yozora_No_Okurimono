import React from 'react'
import { Link } from 'react-router-dom'
import title from '../../images/menu/title.svg'
import rain from '../../images/menu/rain.svg'
import text1 from '../../images/menu/text/1.svg'
import text2 from '../../images/menu/text/2.svg'
import text3 from '../../images/menu/text/3.svg'
import text4 from '../../images/menu/text/4.svg'

export default ({ menu, closeMenu }) => (
  <nav className="menu" data-state={menu}>
    <header className="menu__header">
      <div className="inner">
        <img className="title" src={title} alt="講座一覧" />
        <button type="button" onClick={closeMenu} className="close-btn"></button>
      </div>
    </header>
    <article className="menu__body">
      <div className="menu__rains">
        <img src={rain} alt="雨" />
        <img src={rain} alt="雨" />
        <img src={rain} alt="雨" />
        <img src={rain} alt="雨" />
        <img src={rain} alt="雨" />
        <img src={rain} alt="雨" />
      </div>
      <div className="menu__list">
        <Link to="/chapter/1">
          <img src={text1} alt="CSSアニメーションの基本" />
        </Link>
        <Link to="/chapter/2">
          <img src={text2} alt="基本的なアニメーションを作ろう" />
        </Link>
        <Link to="/chapter/3">
          <img src={text3} alt="画面遷移のアニメーションを作ろう" />
        </Link>
        <Link to="/chapter/4">
          <img src={text4} alt="文字を使った表現に挑戦しよう" />
        </Link>
      </div>
    </article>
  </nav>
)
