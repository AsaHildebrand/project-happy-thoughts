import React from 'react';
import moment from 'moment';

const MessageElement = ({ message, onHeartLikes}) => {
  return (
    <div
      className='chat-section'
      key={message._id}
      >
      <h4  tabindex="0">{message.message}</h4>
      <div className='likes-section'>
        <div className='likes'>
        <button className={message.hearts === 0 ? 'button-grey' : 'button-pink'}
          onClick={() => onHeartLikes(message._id)}>
          <span className='heart' role="img" aria-label="heart-icon">❤️</span>
        </button>
        </div>
        <p className='counter'  tabindex="0">
          x {message.hearts}
        </p>
        <p className='time'  tabindex="0">{moment(message.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}

export default MessageElement;
