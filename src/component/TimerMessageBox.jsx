import React from 'react'

const TimerMessageBox = ({ id, positionClass, message_Position, timerMessageBox, message_Title, message_Decription }) => {
  return (<div className={positionClass} 
    style={{
    top: message_Position
  }}>
    <div className='wrap'> <div className='Messsage_Title'>{message_Title} </div><div  className='Message_Time'>{timerMessageBox}</div></div>
    <div  className='Messsage_Title'>{message_Decription}</div>
  </div>)
}

export default TimerMessageBox;
