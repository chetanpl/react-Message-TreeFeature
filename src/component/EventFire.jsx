import React from 'react'
import '../component/event.css'
import Line from '../component/line'
class EventFire extends React.Component{
    // constructor(props){
    //     super(props)
    //     // this.state={
    //     //     TimerMessageBox:'Most immediate',Message_Time:this.formatAMPM(new Date()),Message_Decription:'Description About what just happen'
    //     // }
    // }
  
    render()    {
        return(<div className='Container'>
            {/* <div className='line_center'>
                <div id='disc1'></div>
                <div id='disc2'></div>
                <div id='disc3'></div>
                <div id='disc4'></div>
                <div id='disc5'></div>
            </div> */}
            <Line/>
            {/* <TimerMessageBox message_Position={5} TimerMessageBox={this.state.TimerMessageBox} message_Title={this.state.Message_Time} Message_Decription={this.state.Message_Decription}></TimerMessageBox> */}
            {/* <div className='messageBox'>
          <div className='wrap'> <div className='Messsage_Title'>Most immediate </div><div className='Message_Time'>17:37</div></div> 
            <div className='Messsage_Title'>Description About what just happen</div>
            </div> */}
            </div>)
    }
}
export default EventFire