import React from "react";
import { useState } from "react";
import BarCustom from "../../components/charts/BarCustom";



  //Data Años y meses 

  const data2021 = {
    labels: [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dicimbte'],
    datasets :[
  { 
      label: 'Alumnos',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      data: [250,450,300,500,800,1000,50,450,300,500,800,1000],
      
  }
  
  ]}; 
  
  
  const data2022 = {
    labels: [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dicimbte'],
    datasets :[
  { 
      label: 'Alumnos',
      backgroundColor : 'rgba(255, 99, 132, 0.5)',
      data: [700,500,100,250,450,300,700,500,100,250,450,300],
      
  }
  
  ]}; 
  
  const data2023 = {
    labels: [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dicimbte'],
    datasets :[
  { 
      label: 'Alumnos',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      data: [250,450,300,500,800,1000,50,450,300,500,800,1000],
      
  }
  
  ]}; 

const Exemple_Bar  = () => {

  

  const [ dataChart , setDataChart] = useState (data2021);

  const handlerSeleChange = (e) => {
    if(e.target.value === "data2021") setDataChart(data2021); 
    else if(e.target.value === "data2022") setDataChart(data2022);
    else if(e.target.value === "data2023") setDataChart(data2023)
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
          <div>
            <select  onChange={handlerSeleChange}>
              <option value="data2021">2021</option>
              <option value="data2022">2022</option>
              <option value="data2023">2023</option>
            </select>
          </div>
          <BarCustom data={dataChart} options={options} />
          </div>

            
        </>
    )
}

export default Exemple_Bar