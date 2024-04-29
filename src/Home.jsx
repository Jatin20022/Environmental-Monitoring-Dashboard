import React from 'react'

 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import GaugeChart from 'react-gauge-chart'
 import { CircularProgressbar } from 'react-circular-progressbar';
 import 'react-circular-progressbar/dist/styles.css';
 

function Home() {
  const today = new Date();
  let currdate=today.getDate();
  let currmonth=today.toLocaleString('default', { month: 'short' });
    const data = [
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

  return (
    
    <main className='main-container'>
        <div className='charts'>
            <div className='tm'>
            <BarChart
            width={500}
            height={300}
            data={data}
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
                width={500}
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
                width={500}
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
  )
}

export default Home