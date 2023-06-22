import React from "react";
import { useState } from "react";
import { AreacCustom } from "../../components/charts/AreaCustom";


//data centros de ayuda

const dataGuate = {
    labels : ['Villa Nueva','Mixco','Palencia','Chinautla','Zona1'],
    datasets :[
  { 
      label: 'Alumnos',
      backgroundColor : 'rgba(0, 255, 0, 1)',
      data: [ 500,400,1500,260,800,400 ],
      
  }
  ]};
  
  
  
  const dataXela = {
    labels: ['San pedro','Santiago','San Juan','San Raymundo','Antigua'],
    datasets :[
  { 
      label: 'Alumnos',
      backgroundColor : 'rgba(0, 255, 0, 1)',
      data: [150,600,790,900,100,],
      
  }
  ]};
  
  const dataSac = {
    labels:['El Palmar','Cabrican','Coatepeque'] ,
    datasets :[
  { 
      label: 'Alumnos',
      backgroundColor : 'rgba(0, 255, 0, 1)',
      data: [1250,800,400],
      
  }
  ]};

  const Exemple_Area = () => {

    const [ dataChart , setDataChart] = useState (dataGuate)

  

    const handlerSeleChange2 = (e) => {
      if(e.target.value === "dataGt") setDataChart(dataGuate); 
      else if(e.target.value === "dataXela") setDataChart(dataXela);
      else if(e.target.value === "dataAv") setDataChart(dataSac)
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
        <div>

        <div style={{width:"1000px", height:"500px"}} className="mt-5">
          <div>
            <select  onChange={handlerSeleChange2}>
              <option value="dataGt">Guatemala</option>
              <option value="dataXela">Quetzaltenango</option>
              <option value="dataSac">Sacatepequez</option>
            </select>
          </div>
          <AreacCustom options={options} data={dataChart} />
        </div>

        </div>
    )
  }

  export default Exemple_Area