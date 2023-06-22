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

  /* 
      Este componente es para crear graficas de tipo lineal 
      params:
      title: Es el titulo del encabezado  de la grafica "Alumnos inscritos por año"
      labels: 
           [ '2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022',]
      Data: 
  */

function LineCustom ({data, options}){  

    return (
       
      
        <>   
        
        <div style={{width:"3000px", height:"500px"}} className="mt-5">
           <Line    options={options} data={data}/>
        </div>

        

        </>
    
    )
}

export default LineCustom