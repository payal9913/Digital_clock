import React, { useState } from 'react';
import './style.css'
const App=()=> {
  let time=new Date().toLocaleTimeString()

  const [ctime,settime]=useState(time);

  const update=()=>{
    time=new Date().toLocaleTimeString()
    settime(time);
  }
  setInterval(update,1000);
  return (
    <div className='main'>
      <div className="square"></div>
      <div className="container">
        <h1>{ctime}</h1>
      </div>
      <div className="circle">
      </div>
    </div>
  );
}

export default App;
