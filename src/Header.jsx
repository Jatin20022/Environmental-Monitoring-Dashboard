import React, { useState,useEffect } from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { FaTemperatureHigh } from "react-icons/fa6";
 import { WiHumidity } from "react-icons/wi";
 import { FiWind } from "react-icons/fi";
 import { FaLocationDot } from "react-icons/fa6";

 
function Header({OpenSidebar}) {
  const[input,updatedinp]=useState("");
  const[val,newval]=useState("Chandigarh");
  const[inithum,currhum]=useState("21");
  const[inittemp,currtemp]=useState("31");
  const[initwind,currwind]=useState("2");
  const apiKey="0fb2b2196f87ce7319b36d0dd1501ac9";
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
  const [data, setData]=useState([]);
  
  const getData= async (city)=>{
    try{
      const res= await fetch(apiUrl+city+`&appid=${apiKey}`)
      const actualData= await res.json();
      console.log(actualData);
      setData(actualData);
      currhum(actualData.main.humidity);
      currtemp(actualData.main.temp);
      currwind(actualData.wind.speed);
    }
    catch(err){
      console.log(err);
      }
      
  }
  useEffect(()=>{
    getData("Chandigarh");
  },[]);
  
  

  const inputevent=(event)=>{
    
   updatedinp(event.target.value);
  }
 
  
  const submit=()=>{
    if(input==""){
    alert("Enter your city name");
    }
    else{
    newval(input);
    getData(input);
    currhum(data.main.humidity);
    currtemp(data.main.temp);
    currwind(data.wind.speed);
    }
  }

  return (
    <header className='header'>
        <div className='hd'>
        <div className='menu-icon'>
           <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <input type='text' placeholder='Enter your city name' className='inp' onChange={inputevent} ></input>
            <BsSearch  className='icon' onClick={submit} style={{cursor:'pointer'}}/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
        </div>
        <main className='main-container'>
        <div className='main-title'>
            <h3>ENVIRONMENTAL MONITORING DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TEMPERATURE</h3>
                    <FaTemperatureHigh className='card_icon'/>
                </div>
                <h1>{inittemp}°C</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>HUMIDITY</h3>
                    <WiHumidity className='card_icon'/>
                </div>
                <h1>{inithum+"%"}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>WIND SPEED</h3>
                    <FiWind className='card_icon'/>
                </div>
                <h1>{initwind}km/h</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CITY</h3>
                    <FaLocationDot className='card_icon'/>
                </div>
                <h1>{val}</h1>
            </div>
        </div>
        </main>
        </header>
  )
}

export default Header;