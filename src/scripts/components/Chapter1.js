import React, { Component } from 'react'
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlightjs'
import { Link } from 'react-router-dom'
import chapter from '../../images/opening/chapter.svg'
import title from '../../images/chapter/title/1.svg'
import virtualNeet from '../../images/chapter/virtual-neet.svg'
import next from '../../images/chapter/next.svg'

marked.setOptions({
  highlight: (code, lang) => {
    return hljs.highlightAuto(code, [lang]).value
  }
})

export default class chapter1 extends Component {
  constructor() {
    super()
    this.state = { text: '' }
  }

  componentWillMount() {
    const { changeChapter, closeMenu } = this.props
    changeChapter()
    closeMenu()

    axios.get('/1.md')
      .then(res => {
        this.setState({ text: marked(res.data) })
      })
  }

  render() {
    const { text } = this.state

    return (
      <div className="chapter chapter-1">
        <div className="opening">
          <div className="kouza"></div>
          <div className="sitename">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>
          <div className="panel">
            <img src={chapter} alt="label" />
            <div className="number">
              <div className="num"></div>
              <div className="num"></div>
              <div className="num">
                <div className="inner">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chapter__bg">
          <div className="wall">
            <span></span><span></span><span></span><span></span>
          </div>
          <div className="line">
            <span></span><span></span><span></span><span></span>
          </div>
          <div className="deco">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="menu__page">
          <Link to="/"><img className="title" src={title} alt="chapter-1" /></Link>
          <div className="content">
            <nav className="nav">
              <div className="label"></div>
              <Link className="current" to="/chapter/1"><span>▶︎</span>CSSアニメーションの基本</Link>
              <Link to="/chapter/2"><span>▶︎</span>基本的なアニメーションを作ろう</Link>
              <Link to="/chapter/3"><span>▶︎</span>画面遷移のアニメーションを作ろう</Link>
              <Link to="/chapter/4"><span>▶︎</span>文字を使った表現に挑戦しよう</Link>
            </nav>
            <article className="body">
              <div className="label label-1"></div>
              <div className="inner" dangerouslySetInnerHTML={{ __html: text }}></div>
              <div className="label label-2"></div>
            </article>
          </div>
          <div className="paging">
            <Link to="/chapter/2">
              <img src={next} alt="次" />
            </Link>
          </div>
          <footer className="footer">
            <a href="https://virtual-neet.magical-girl.site" rel="noopener noreferrer" target="_blank">
              <img src={virtualNeet} alt="バーチャルニート" />
            </a>
            <p>&copy; Copyright2018 Cowardly Witch Project. All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    )
  }
}
