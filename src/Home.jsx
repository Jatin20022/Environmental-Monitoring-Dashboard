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
  const[initpressure,currpressure]=useState("1002");

  const[temp01,temp1]=useState(" ");
  const[temp02,temp2]=useState(" ");
  const[temp03,temp3]=useState(" ");
  const[temp04,temp4]=useState(" ");
  const[humid01,humid1]=useState(" ");
  const[humid02,humid2]=useState(" ");
  const[humid03,humid3]=useState(" ");
  const[humid04,humid4]=useState(" ");
  const[wind01,wind1]=useState(" ");
  const[wind02,wind2]=useState(" ");
  const[wind03,wind3]=useState(" ");
  const[wind04,wind4]=useState(" ");
  


  const apiKey="0fb2b2196f87ce7319b36d0dd1501ac9";
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const apiUrl2="https://api.openweathermap.org/data/2.5/forecast/?q=";
  const add="&units=metric&cnt=50";
 
  const today = new Date();
  let currhour=today.getDate();
  let currmonth=today.toLocaleString('default', { month: 'short' });;
  let currtime=currhour+""+currmonth;
  const [data6, setData2]=useState([]);
  

  const getData2= async (city)=>{
    try{
      const res= await fetch(apiUrl2+city+add+`&appid=${apiKey}`)
      const actualData2= await res.json();
      setData2(actualData2);
      temp1(actualData2.list[0].main.temp);
      temp2(actualData2.list[8].main.temp);
      temp3(actualData2.list[16].main.temp);
      temp4(actualData2.list[32].main.temp);
      humid1(actualData2.list[0].main.humidity);
      humid2(actualData2.list[8].main.humidity);
      humid3(actualData2.list[16].main.humidity);
      humid4(actualData2.list[32].main.humidity);
      wind1(actualData2.list[0].wind.speed);
      wind2(actualData2.list[8].wind.speed);
      wind3(actualData2.list[16].wind.speed);
      wind4(actualData2.list[32].wind.speed);
      
    }
    catch(err){
      console.log(err);
      }
      
  }
  useEffect(()=>{
    getData2("Chandigarh");
  },[]);
  
 

    const data1 = [
        {
          name: currtime,
          ["Temperature(in C°)"]: inittemp
        },
        {
          name: currhour+1+""+currmonth,
          ["Temperature(in C°)"]: temp01
        },
        {
          name: currhour+2+""+currmonth,
          ["Temperature(in C°)"]: temp02
        },
        {
          name: currhour+3+""+currmonth, 
          ["Temperature(in C°)"]: temp03
        },
        {
          name: currhour+4+""+currmonth ,
          ["Temperature(in C°)"]: temp04
        },
      ];
     
     const data2 = [
        {
          name: currtime,
          Humidity: inithum
        },
        {
          name: currhour+1+""+currmonth,
          Humidity: humid01
        },
        {
          name: currhour+2+""+currmonth,
          Humidity: humid02
        },
        {
          name: currhour+3+""+currmonth,
          Humidity: humid03
        },
        {
          name: currhour+4+""+currmonth,
          Humidity: humid04
        }
      ];
     const data3 = [
        {
          name: currtime,
          ["Wind-Speed"]: initwind
         
        },
        {
          name: currhour+1+""+currmonth,
          ["Wind-Speed"]: wind01
          
        },
        {
          name: currhour+2+""+currmonth,
          ["Wind-Speed"]: wind02
          
        },
        {
          name: currhour+3+""+currmonth,
          ["Wind-Speed"]: wind03
          
        },
        {
          name: currhour+4+""+currmonth,
          ["Wind-Speed"]: wind04
         
        }
        
      ];

      
  
  const [data, setData]=useState([]);
 
  
  const getData= async (city)=>{
    try{
      const res= await fetch(apiUrl+city+`&appid=${apiKey}`)
      const actualData= await res.json();
      setData(actualData);
      currhum(actualData.main.humidity);
      currtemp(actualData.main.temp);
      currwind(actualData.wind.speed);
      currpressure(actualData.main.pressure);
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
    getData2(input);
    currhum(data.main.humidity);
    currtemp(data.main.temp);
    currwind(data.wind.speed);
    
    }
  }

  
  return (
    <div className='header'>
        <div className='hd'>
        <div className='menu-icon'>
           <BsJustify className='icona' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <input type='text' placeholder='Enter your city name' className='inp' onChange={inputevent} ></input>
            <BsSearch  className='icona' onClick={submit} style={{cursor:'pointer'}}/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icona'/>
            <BsFillEnvelopeFill className='icona'/>
            <BsPersonCircle className='icona'/>
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
            <BarChart className='br'
            width={400}
            height={300}
            data={data1}
            margin={{
                top: 30,
                right: 40,
                left: 0,
                bottom: 10,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend className='ld'/>
                <Bar dataKey="Temperature(in C°)" fill="#2962ff"/>
                              
                </BarChart>
                <h3>TEMPERATURE</h3>
                </div>
            
              <div className='hm'>
                <LineChart
                width={390}
                height={300}
                data={data2}
                margin={{
                    top: 30,
                    right: 30,
                    left: 0,
                    bottom: 10,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Humidity" stroke="#ff6d00" activeDot={{ r: 8 }} />
                
                </LineChart>
                <h3>HUMIDITY</h3>
                </div>
            
            <div className='aq'>
            <LineChart className='Air-quality'
                width={390}
                height={300}
                data={data3}
                margin={{
                    top: 30,
                    right: 30,
                    left: 0,
                    bottom: 10,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Wind-Speed" stroke="#2e7d32" activeDot={{ r: 8 }} />
                
                </LineChart>
                <h3>WIND-SPEED</h3>
                </div>

               
<div className='pm'>
     

<CircularProgressbar className="cp" value={initpressure} text={`${initpressure}hPa`} />
<h3>PRESSURE</h3>
</div>
 

        </div>
        </main>
        </div>
  )
}

export default Home;