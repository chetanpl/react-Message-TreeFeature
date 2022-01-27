import React from 'react'
import TimerMessageBox from '../component/TimerMessageBox'
import { useState, useEffect,useLayoutEffect } from 'react'
const Line1 = () => {
  const [FmessageBoxItemDetails, setFmessageBoxItemDetails] = useState([]);
  const [loading, setloading] = useState(false);
  const [loadingcheck, setloadingcheck] = useState(0);

  const [messageBoxItemDetails, setmessageBoxItemDetails] = useState([{
    id: 0, message_Position: 320,
    timerMessageBox: '4:44 PM',
    message_Title: `Initial event`,
    message_Decription: `Some new development is taking place.`, cssPosition: 'messageBoxLeft'
  }, 
  {
    id: 1, message_Position: 240,
    timerMessageBox: '4:44 PM',
    message_Title: `Most immediate`,
    message_Decription: `Description About what just happen`, cssPosition: 'messageBoxRight'
  }, {
    id: 2, message_Position: 160,
    timerMessageBox: '4:44 PM',
    message_Title: `Yet Another`,
    message_Decription: `Chornologically the third in the timeline`, cssPosition: 'messageBoxLeft'
  }, {
    id: 4, message_Position: 0,
    timerMessageBox: '4:44 PM',
    message_Title: `This is the Last event immediate`,
    message_Decription: `Thanks for sharing with US.`, cssPosition: 'messageBoxLeft'
  }]);

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
         // if(prev && prev.length <4 && loading!==true){
          let item = messageBoxItemDetails[prev.length];
         if(!item){
          //  const a=prev.pop();
          //  prev.unshift(a);
        //  clearInterval(intervalID);
         }
         else{
         item.timerMessageBox = formatAMPM(new Date());
         }
          return item?[...prev, item]:[...prev];
          
        })
       }, 3000)
       return () => { // clear up
        clearInterval(intervalID)
       }
  }, [loading])
  return (<><div className='line_center'>
    {FmessageBoxItemDetails?.map((user,index) => (
      <div key={"disc"+ user.id} ><div id={'disc' + user.id}></div>
        <TimerMessageBox id={user.id} message_Position={user.message_Position} positionClass={user.cssPosition}
          timerMessageBox={user.timerMessageBox} message_Title={user.message_Title}
          message_Decription={user.message_Decription}></TimerMessageBox>
      </div>
    ))}
  </div>
  </>)
}

