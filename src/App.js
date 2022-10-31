import { appBarClasses } from "@mui/material";
import React from "react";
import { useState } from "react";
import { ReactDOM } from "react-dom";
function App(){
    var date = new Date().toLocaleTimeString()
    const [clock ,setClock]=useState(date)
    const[colorChanger,setColorChanger]=useState({background :'black',color :'white'})
  const updater =()=>{
    new Date().toLocaleTimeString()
    setClock(date)
    }
    setInterval(updater,1000)

    if(date<=12 ){
        setColorChanger({background:'white',color:'white'})
    }else{

       setColorChanger({background :'black',color :'white'})

    }


    return(<>
    <div style={colorChanger}>

    <h1>{clock}</h1>
    <h1>hii thi is my clock </h1>
    <button >click here</button>
</div>    </>)
}

export default App;