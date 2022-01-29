import React from 'react'
import TimerMessageBox from '../component/TimerMessageBox'
import { useState,useLayoutEffect } from 'react'
const Line = () => {
  const [FmessageBoxItemDetails, setFmessageBoxItemDetails] = useState([]);
  const [loading, setloading] = useState(false);
  const [messageBoxItemDetails, setmessageBoxItemDetails] = useState([
    
    {
      id: 0, message_Position: '30px',
      timerMessageBox: '4:44 PM',
      message_Title: `Initial event`,
      message_Decription: `Some new development is taking place.`, cssPosition: 'messageBoxLeft'
    } ,{
      id: 1, message_Position: '30px',
      timerMessageBox: '4:44 PM',
      message_Title: `Most immediate`,
      message_Decription: `Description About what just happen`, cssPosition: 'messageBoxRight'
    }
    , {
      id: 2, message_Position: '30px',
      timerMessageBox: '4:44 PM',
      message_Title: `Yet Another`,
      message_Decription: `Chornologically the third in the timeline`, cssPosition: 'messageBoxLeft'
    }
   , {
      id: 3, message_Position: '30px',
      timerMessageBox: '4:44 PM',
      message_Title: `Second event`,
      message_Decription: `Some More stuff is going on.`, cssPosition: 'messageBoxRight'
    }
]);

  const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  let intervalID;
  useLayoutEffect(() => {
    const intervalID=   setInterval(() => {
         setFmessageBoxItemDetails(prev => {
          let item = messageBoxItemDetails[prev.length];
         if(!item){
           const a=prev.pop();
           prev.unshift(a);

         }
         else{
         item.timerMessageBox = formatAMPM(new Date());
         if (item.id === 0 || item.id === 2 || item.id === 4) {
          item.cssPosition = 'messageBoxRight';
        }
        else {
          item.cssPosition = 'messageBoxLeft';
           }
         }
         
          return item?[...prev, item]:[...prev];
          
        })
       }, 2000)
       return () => { // clear up
        clearInterval(intervalID)
       }
  }, [])
  return (<><div className='line_center'>
    {FmessageBoxItemDetails?.map((user,index) => (
      <div key={"disc"+ user.id} ><div id={'disc' + user.id}>
      </div>
        <TimerMessageBox id={user.id} message_Position={user.message_Position} positionClass={user.cssPosition}
          timerMessageBox={user.timerMessageBox} message_Title={user.message_Title}
          message_Decription={user.message_Decription}></TimerMessageBox>
          </div>
    ))}
  </div>
  </>)
}

export default Line;
