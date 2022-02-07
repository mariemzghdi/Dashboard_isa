import React,{useState,useEffect} from 'react';
import './Chart.css';
import axios from 'axios';

import GaugeChart from "react-gauge-chart";
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';



export default function GougeCharts() {
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
 console.log(Rendement)

console.log(rows)
console.log(typeof(Rendement[0]))
function numAverage(Rendement) {
  var b = Rendement.length,
      c = 0, i;
  for (i = 0; i < b; i++){
    c += Number(Rendement[i]);
  }
  return c/b;
}



  return <div>
    <div className="gaugechart">
        <div className="subnavbar">
          <span className="titlePichart">Rendement Global</span>
          <DataThresholdingIcon className="helpIcon" />
         
          <hr className="Separtormini" />
        </div>
        <GaugeChart
          id="gauge-chart"
          textColor="#000"
          cornerRadius={3}
          marginInPercent={0.015}
          arcWidth={0.3}
          arcPadding={0.01}
          percent={ numAverage(Rendement)/100}
          nrOfLevels={6}
          
          
          colors={["#cce6ff", "#cce6ff", "#99ceff", "#99ceff", "#1a90ff", "#1a90ff"]}
        />
      </div>
    
  </div>;
}



