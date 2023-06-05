import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



function DepartStudent(){

    
const labels = [ 'Palencia','Villa Nueva','Jalapa','Chimaltenango','San Marcos','Mixco','Mita','Zacapa','Quiche','Xela',]

const data = {
      labels,
      datasets :[
    { 
        label: 'Departamento',
      
       
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 2, 25, 0.5)',
          'rgba(255, 151, 415, 0.2)',
          'rgba(255, 1, 50, 0.6)',
          'rgba(255, 14, 500, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          '(rgba(255,2, 25, 0.5)',
          'rgba(255, 151, 415, 0.2)',
          'rgba(255, 1, 50, 0.6)',
          'rgba(255, 14, 500, 0.2)'
        ],
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0, 255, 01, 0, 2)',
        hoverBorderColor: '#FF0000',
        data: [500,750,825,450,845,600,1500,1000,945,240 ],
        
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
   <div className="mt-5">
    
    <div></div>
    <div className="div2">
    
  <Pie  
  options={options}
  data={data}/>

 

    </div>

</div>
)
    
}

export default DepartStudent