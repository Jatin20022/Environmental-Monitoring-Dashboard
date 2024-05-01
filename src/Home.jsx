import React, { useState,useEffect } from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { FaTemperatureHigh } from "react-icons/fa6";
 import { WiHumidity } from "react-icons/wi";
 import { FiWind } from "react-icons/fi";
 import { FaLocationDot } from "react-icons/fa6";
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import GaugeChart from 'react-gauge-chart'
 import { CircularProgressbar } from 'react-circular-progressbar';
 import 'react-circular-progressbar/dist/styles.css';
 
function Home({OpenSidebar}) {
  const[input,updatedinp]=useState("");
  const[val,newval]=useState("Chandigarh");
  const[inithum,currhum]=useState("21");
  const[inittemp,currtemp]=useState("31");
  const[initwind,currwind]=useState("2");
  const apiKey="0fb2b2196f87ce7319b36d0dd1501ac9";
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const today = new Date();
  let currdate=today.getDate();
  let currmonth=today.toLocaleString('default', { month: 'short' });
    const data1 = [
        {
          name: currdate-7 +''+currmonth,
          ["Min-temperature(in C°)"]: 25,
          ["Max-temperature(in C°)"]: 30,
          amt: 2400,
        },
        {
          name: currdate-6 +''+currmonth,
          ["Min-temperature(in C°)"]: 14,
          ["Max-temperature(in C°)"]: 30,
          amt: 2210,
        },
        {
          name: currdate-5 +''+currmonth,
          ["Min-temperature(in C°)"]: 20,
          ["Max-temperature(in C°)"]: 25,
          amt: 2290,
        },
        {
          name: currdate-4 +''+currmonth,
          ["Min-temperature(in C°)"]: 25,
          ["Max-temperature(in C°)"]: 30,
          amt: 2000,
        },
        {
          name: currdate-3 +''+currmonth,
          ["Min-temperature(in C°)"]: 23,
          ["Max-temperature(in C°)"]: 33,
          amt: 2181,
        },
        {
          name: currdate-2 +''+currmonth,
          ["Min-temperature(in C°)"]: 24,
          ["Max-temperature(in C°)"]: 30,
          amt: 2500,
        },
        {
          name: currdate-1+''+currmonth,
          ["Min-temperature(in C°)"]: 27,
          ["Max-temperature(in C°)"]: 31,
          amt: 2100,
        },
      ];
     
     const data2 = [
        {
          name: currdate-7+''+currmonth,
          Humidity: 19,
          amt: 2400,
        },
        {
          name: currdate-6+''+currmonth,
          Humidity: 18,
          amt: 2210,
        },
        {
          name: currdate-5+''+currmonth,
          Humidity: 20,
          amt: 2290,
        },
        {
          name: currdate-4+''+currmonth,
          Humidity: 22,
          amt: 2000,
        },
        {
          name: currdate-3+''+currmonth,
          Humidity: 25,
          amt: 2181,
        },
        {
          name: currdate-2+''+currmonth,
          Humidity: 26,
          amt: 2500,
        },
        {
          name: currdate-1+''+currmonth,
          Humidity: 21,
          amt: 2100,
        },
      ];
     const data3 = [
        {
          name: currdate-7+''+currmonth,
          ["Air-Quality"]: 140,
          amt: 2400,
        },
        {
          name: currdate-6+''+currmonth,
          ["Air-Quality"]: 60,
          amt: 2210,
        },
        {
          name: currdate-5+''+currmonth,
          ["Air-Quality"]: 83,
          amt: 2290,
        },
        {
          name: currdate-4+''+currmonth,
          ["Air-Quality"]: 123,
          amt: 2000,
        },
        {
          name: currdate-3+''+currmonth,
          ["Air-Quality"]: 230,
          amt: 2181,
        },
        {
          name: currdate-2+''+currmonth,
          ["Air-Quality"]: 100,
          amt: 2500,
        },
        {
          name: currdate-1+''+currmonth,
          ["Air-Quality"]: 63,
          amt: 2100,
        },
      ];

      const percentage = 40;
  
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
    <div className='header'>
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
        <div className='charts'>
            <div className='tm'>
            <BarChart
            width={480}
            height={300}
            data={data1}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Min-temperature(in C°)" fill="green"/>
                <Bar dataKey="Max-temperature(in C°)" fill="red"/>               
                </BarChart>
                <h3>TEMPERATURE</h3>
                </div>
            
              <div className='hm'>
                <LineChart
                width={480}
                height={300}
                data={data2}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Humidity" stroke="green" activeDot={{ r: 8 }} />
                
                </LineChart>
                <h3>HUMIDITY</h3>
                </div>
            
            <div className='aq'>
            <LineChart className='Air-quality'
                width={480}
                height={300}
                data={data3}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Air-Quality" stroke="orange" activeDot={{ r: 8 }} />
                
                </LineChart>
                <h3>AIR-QUALITY</h3>
                </div>

              <div className='co'>
              <GaugeChart id="gauge-chart3" 
              nrOfLevels={10} 
              width={500}
              height={300}
              colors={["green","yellow","red"]} 
              arcWidth={0.2} 
              percent={0.37} 
/>
<h3>CO LEVEL</h3>
</div> 
<div className='pm'>
     

<CircularProgressbar className="cp" value={percentage} text={`${percentage}%`} />
<h3>CO2 LEVEL</h3>
</div>

        </div>
        </main>
        </div>
  )
}

export default Home;