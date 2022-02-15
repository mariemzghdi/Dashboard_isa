import React,{useState,useEffect} from 'react';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import axios from 'axios';
import MoodIcon from '@mui/icons-material/Mood';
import './Chart.css';
import BiHappy from "react-icons/bs";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
export default function SmileC() {

    const [rows,setRows]= useState([]);
  


  
    async function getDonnees() {
      const reponse = await axios.get(`http://localhost:8080/api/controle_packet/qte`)
      return(setRows(reponse.data) )
    
      
      
  }
  useEffect(()=>{
    getDonnees();
  },[])
  
    const Qte = rows.map(obj =>{
    return parseFloat(obj.QteT); 
  }) 
 
  
  
  function numAverage(Qte) {
    var b = Qte.length,
        c = 0, i;
    for (i = 0; i < b; i++){
      c += Number(Qte[i]);
    }
    return c;
  
  }
  console.log(numAverage(Qte));

function happy (){
    return (
        < MoodIcon size={70}  />
  
      );
}
function Sad (){
    return (
        < SentimentVeryDissatisfiedIcon size={70} />
  
      );
}
let icon ;
if(numAverage(Qte)> 50){
    icon=happy();

}else{
    icon=Sad();
}

  return (
    
        <div className="gaugechart">
        <div className =" subnavbar">
          <span className="titlePichart">Etat </span>
          <DataThresholdingIcon className="helpIcon" />
         
           <hr className="Separtormini" /> 
           
        </div>
        <div className='icon'>{icon}</div>
        
 
     
  
  </div>
    
  )
}
