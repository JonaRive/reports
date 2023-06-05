import React from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

 import { Line } from 'react-chartjs-2'
   
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  

  

function ReportPerYear(){

  const labels = [ '2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022',]

  const data = {
        labels,
        datasets :[
      { 
          label: 'Alumnos',
          backgroundColor : 'rgba(0, 0, 255)',
          borderColor: 'black',   
          boderWidth: 1, 
          hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
          hoverBorderColor: '#FF0000',
          data: [500,750,825,450,387,600,1500,1000,945,203,500,750,825,450,387,600,1500,1000,945,203,650,601,300,120],
          
      }
  ]}; 

   
  const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          
        },
      };
    
  

    return (
       <div >
      
  
        <div className="div2">
        
      <Line   
      options={options}
      data={data}/>

     

        </div>
    
    </div>
    )
}

export default ReportPerYear