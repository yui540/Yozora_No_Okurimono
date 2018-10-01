import React from 'react'
import box from '../../images/load-view/box.png'

export default ({ changeChapter }) => (
  <div className="load-view">
    <img src={box} alt="box" className="load-view__box" />
    <div className="load-view__cross" />
    <div className="load-view__frame">
      <div className="line">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="box">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
    <div className="load-view__message load-view__message_type_1">
      <span />
      <span />
      <span />
      <span />
    </div>
    <div className="load-view__message load-view__message_type_2">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
    <div className="load-view__effects">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
    <div className="load-view__end">
      <div />
      <div />
      <div />
      <div
        onAnimationEnd={e => {
          if (e.animationName === 'load-view__end') {
            changeChapter()
          }
        }}
      />
    </div>
  </div>
)
