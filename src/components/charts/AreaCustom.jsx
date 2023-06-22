import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


/* 
    Este componente es para crear graficas de Area
    params: 
    title: Es el titulo del encabezado de la grafica "Alumnos por centro de ayuda de cada departamento"
    Labels:  Quetzaltenango 
             ['San pedro','Santiago','San Juan','San Raymundo','Antigua'] 
             Guatemala
             ['Villa Nueva','Mixco','Palencia','Chinautla','Zona1']
    Data:          
*/



export function AreacCustom({ data, options }) {

  return ( 
  <div>  
  <Line options={options} data={data} />
  </div>
  ) 
}

