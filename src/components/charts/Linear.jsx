import React, { useState } from "react"
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

  // Data Alumnos por año 

  const data = {
    labels: [ '2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022',],
    datasets :[
  { 
      label: 'Alumnos',
      backgroundColor : 'rgba(0, 0, 255)',
      borderColor: 'black',   
      boderWidth: 1, 
      hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
      hoverBorderColor: '#FF0000',
      data: [500,400,1500,1200,750,500,40,1500,1200,750,505,400,1500,100,750,500,400,150,1200,750,],
      
  }

]}; 

//Data Años y meses 

 const data2021 = {
  labels: [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dicimbte'],
  datasets :[
{ 
    label: 'Alumnos',
    backgroundColor : 'rgba(0, 0, 255)',
    borderColor: 'black',   
    boderWidth: 1, 
    hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
    hoverBorderColor: '#FF0000',
    data: [250,450,300,500,800,1000,50,450,300,500,800,1000],
    
}

]}; 


const data2022 = {
  labels: [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dicimbte'],
  datasets :[
{ 
    label: 'Alumnos',
    backgroundColor : 'rgba(0, 0, 255)',
    borderColor: 'black',   
    boderWidth: 1, 
    hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
    hoverBorderColor: '#FF0000',
    data: [700,500,100,250,450,300,700,500,100,250,450,300],
    
}

]}; 

const data2023 = {
  labels: [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dicimbte'],
  datasets :[
{ 
    label: 'Alumnos',
    backgroundColor : 'rgba(0, 0, 255)',
    borderColor: 'black',   
    boderWidth: 1, 
    hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
    hoverBorderColor: '#FF0000',
    data: [250,450,300,500,800,1000,50,450,300,500,800,1000],
    
}

]}; 

//data centros de ayuda

const dataGuate = {
  labels : ['Villa Nueva','Mixco','Palencia','Chinautla','Zona1'],
  datasets :[
{ 
    label: 'Alumnos',
    backgroundColor : 'rgba(0, 255, 0, 1)',
    borderColor: 'black',   
    boderWidth: 1, 
    hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
    hoverBorderColor: '#FF0000',
    data: [ 500,400,1500,260,800,400 ],
    
}
]};



const dataXela = {
  labels: ['San pedro','Santiago','San Juan','San Raymundo','Antigua'],
  datasets :[
{ 
    label: 'Alumnos',
    backgroundColor : 'rgba(0, 255, 0, 1)',
    borderColor: 'black',   
    boderWidth: 1, 
    hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
    hoverBorderColor: '#FF0000',
    data: [150,600,790,900,100,],
    
}
]};

const dataSac = {
  labels:['El Palmar','Cabrican','Coatepeque'] ,
  datasets :[
{ 
    label: 'Alumnos',
    backgroundColor : 'rgba(0, 255, 0, 1)',
    borderColor: 'black',   
    boderWidth: 1, 
    hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
    hoverBorderColor: '#FF0000',
    data: [1250,800,400],
    
}
]};


  

function Linear (){

  const [ dataChart1 , setDataChart1] = useState (data2021);
  const [ dataChart2 , setDataChart2] = useState (dataGuate)

  const handlerSeleChange1 = (e) => {
    if(e.target.value === "data2021") setDataChart1(data2021); 
    else if(e.target.value === "data2022") setDataChart1(data2022);
    else if(e.target.value === "data2023") setDataChart1(data2023)
  }

  const handlerSeleChange2 = (e) => {
    if(e.target.value === "dataGt") setDataChart2(dataGuate); 
    else if(e.target.value === "dataXela") setDataChart2(dataXela);
    else if(e.target.value === "dataAv") setDataChart2(dataSac)
  }

      
   
  const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          
        },
      };
    
  

    return (
       
      
        <>   
        
        <div style={{width:"3000px", height:"500px"}} className="mt-5">
        <Line    options={options} data={data}/>
        </div>

        <div style={{width:"3000px", height:"500px"}} className="mt-5">
          <div>
            <select  onChange={handlerSeleChange1}>
              <option value="data2021">2021</option>
              <option value="data2022">2022</option>
              <option value="data2023">2023</option>
            </select>
          </div>
          <Line options={options} data={dataChart1} />
        </div>

        <div style={{width:"3000px", height:"500px"}} className="mt-5">
          <div>
            <select  onChange={handlerSeleChange2}>
              <option value="dataGt">Guatemala</option>
              <option value="dataXela">Quetzaltenango</option>
              <option value="dataSac">Sacatepequez</option>
            </select>
          </div>
          <Line options={options} data={dataChart2} />
        </div>

        </>
    
    )
}

export default Linear