import {useState}  from "react"
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

    const labels= ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Dciembre ', ]

    const data = {
          labels,
          datasets :[
        { 
            label: 'Alumnos',
            backgroundColor : 'rgba(0, 255, 0, 1)',
            borderColor: 'black',   
            boderWidth: 1, 
            hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
            hoverBorderColor: '#FF0000',
            data: [500,750,825,450,387,600,1500,1000,945,203,500,750,],
            
        }
    ]};

    

  const data2 = {
        labels ,
        datasets :[
      { 
          label: 'Alumnos',
          backgroundColor : 'rgba(0, 255, 0, 1)',
          borderColor: 'black',   
          boderWidth: 1, 
          hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
          hoverBorderColor: '#FF0000',
          data: [945,203,650,601,300,120,825,450,387,600,1500,1000],
          
      }
  ]};

  
  const data3 = {
    labels,
    datasets :[
  { 
      label: 'Alumnos',
      backgroundColor : 'rgba(0, 255, 0, 1)',
      borderColor: 'black',   
      boderWidth: 1, 
      hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
      hoverBorderColor: '#FF0000',
      data: [500,750,825,450,757,600,1500,800,945,550,500,750,],
      
  }
]};


const data4 = {
  labels,
  datasets :[
{ 
    label: 'Alumnos',
    backgroundColor : 'rgba(0, 255, 0, 1)',
    borderColor: 'black',   
    boderWidth: 1, 
    hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
    hoverBorderColor: '#FF0000',
    data: [500,750,825,850,387,600,1500,1300,945,903,500,150,],
    
}
]};


const data5 = {
  labels,
  datasets :[
{ 
    label: 'Alumnos',
    backgroundColor : 'rgba(0, 255, 0, 1)',
    borderColor: 'black',   
    boderWidth: 1, 
    hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
    hoverBorderColor: '#FF0000',
    data: [900,250,825,800,387,600,1500,1000,200,283,500,750,],
    
}
]};


    


function YearSemMon(){

  const [ dataChart , setDataChart ] = useState(data) 

   const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      };

      const handlerSeleChange = (e) => {
         if(e.target.value === "data") setDataChart(data);
         else if ( e.target.value === "data2") setDataChart(data2);
         else if ( e.target.value === "data3") setDataChart(data3);
         else if ( e.target.value === "data4") setDataChart(data4);
         else if ( e.target.value === "data5") setDataChart(data5);
      }

    return (
        <div>
         <div>
         <select onChange={handlerSeleChange}>
          <option value="data">2019</option>
          <option value="data2">2020</option>  
          <option value="data3">2021</option>  
          <option value="data4">2022</option>  
          <option value="data5">2023</option>  
         </select>  

      </div> 
 
        <Line options={options} data={dataChart} />
        
        </div>
    )
}

export default YearSemMon