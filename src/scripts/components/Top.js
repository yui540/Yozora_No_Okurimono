import React from 'react'
import logo from '../../images/top/logo.svg'
import virtualNeet from '../../images/top/virtual-neet.svg'
import Message1 from '../containers/Message1'
import Message2 from '../containers/Message2'
import Message3 from '../containers/Message3'
import Menu from '../containers/Menu'

export default ({ openMenu, effect }) => (
  <article className="top">
    <div className="top__message" />
    <div className="top__blocks">
      <span />
      <span />
      <span />
      <span />
    </div>
    <div className="top__logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="top__balls">
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
    </div>
    <div className="top__rects" data-state={effect}>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
      <div>
        <span />
      </div>
    </div>
    <div className="top__eyes" />
    <Message1 />
    <Message2 />
    <Message3 />
    <div className="top__virtual-neet">
      <a href="https://virtual-neet.magical-girl.site" rel="noopener noreferrer" target="_blank">
        <img src={virtualNeet} alt="バーチャルニート" />
      </a>
    </div>
    <div className="top__sns">
      <div className="inner">
        <a href="https://twitter.com/yui540" rel="noopener noreferrer" target="_blank">
          <span>
            <i className="fab fa-twitter" />
          </span>
        </a>
        <a href="https://github.com/yui540" rel="noopener noreferrer" target="_blank">
          <span>
            <i className="fab fa-github" />
          </span>
        </a>
        <a href="https://yui540.graphics" rel="noopener noreferrer" target="_blank">
          <span>
            <i className="fas fa-globe" />
          </span>
        </a>
      </div>
    </div>
    <a className="share" href="http://twitter.com/intent/tweet?url=https://yozora.magical-girl.site&text=『ようこそ----臆病な魔女教団へ。』 / @yui540" rel="noopener noreferrer" target="_blank">
      <img src="./images/share.png" alt="Twitterでシェアする" />
    </a>
    <div className="top__menu">
      <div className="inner">
        <button type="button" onClick={openMenu}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
    <Menu />
  </article>
)
