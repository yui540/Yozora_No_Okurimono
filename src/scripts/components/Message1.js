import React from 'react'
import message from '../../images/top/message/1.svg'

export default ({ num, effect, changeMessage }) => (
  <div className="message-1" data-num={num} data-state={effect}>
    <div className="inner">
      <img src={message} alt="初めまして、私は臆病な魔女。" />
      <div
        className="eye"
        onAnimationEnd={e => {
          if (e.animationName === 'message-1__end') {
            changeMessage()
          }
        }}
      />
    </div>
  </div>
)
