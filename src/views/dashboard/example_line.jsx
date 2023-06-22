import React from "react";
import LineCustom from "../../components/charts/LineCustom"

const  Exemple_Line = () => {

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
        <LineCustom  data={data} options={options}/>

        </>
    )
}

export default Exemple_Line