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

    

    const data = {
          labels : ['Villa Nueva','Mixco','Palencia','Chinautla','Zona1'],
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
        labels:['El Palmar','Cabrican','Coatepeque'] ,
        datasets :[
      { 
          label: 'Alumnos',
          backgroundColor : 'rgba(0, 255, 0, 1)',
          borderColor: 'black',   
          boderWidth: 1, 
          hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
          hoverBorderColor: '#FF0000',
          data: [600,1500,1000],
          
      }
  ]};

  
  
  const data3 = {
    labels: ['San pedro','Santiago','San Juan','San Raymundo','Antigua'],
    datasets :[
  { 
      label: 'Alumnos',
      backgroundColor : 'rgba(0, 255, 0, 1)',
      borderColor: 'black',   
      boderWidth: 1, 
      hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
      hoverBorderColor: '#FF0000',
      data: [500,750,825,450,757],
      
  }
]};

function StudentCenter(){

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
       
     }

 
    return (
        <>

         <div>
         <div>
         <select onChange={handlerSeleChange}>
          <option value="data">Guatemala</option>
          <option value="data2">Quetzaltenango    </option>  
          <option value="data3">Sacatepequez</option>  
      
         </select>  

      </div> 
 
        <Line options={options} data={dataChart} />
        
        </div>
        
        </>
    )
}

export default StudentCenter