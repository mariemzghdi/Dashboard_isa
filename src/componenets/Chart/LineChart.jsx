import React,{useEffect,useState} from 'react';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import './Chart.css';


export default function LineChart() {
  const [rows,setRows]= useState([]);
  


  
  async function getDonnees() {
    const reponse = await axios.get(`http://localhost:8080/api/tutorials/published`)
    return(setRows(reponse.data) )
  
    
    
}
useEffect(()=>{
  getDonnees();
},[])

  const Rendement = rows.map(obj =>{
  return parseFloat(obj.Rend); 
}) 
const Noms = rows.map(obj =>{
  return (obj.Firstname); 
})
  const  series=  [{
    name: "Rendement",
    data: Rendement
}];
 const options=  {
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  colors: ["#1a90ff", 'transparent'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Rendement ',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: Noms,
  }
}
  return <div>
    <div className="gaugechart">
          <div className="subnavbar">
            <span className="titlePichart">Chart</span>
            <ShowChartIcon className="helpIcon" />
           
            <hr className="Separtormini" />
          </div>
          <div id="chart">
  <ReactApexChart options={options} series={series} type="line" height={350} />
</div>
    
        </div>
  </div>;
}
