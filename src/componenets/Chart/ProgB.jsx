import React from 'react';
import './Chart.css';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import ProgressBar from "@ramonak/react-progress-bar";



export default function ProgB() {
  return (
       <div>
          
         <div className="gaugechart">
        <div className="subnavbar">
          <span className="titlePichart">Qte Produites</span>
          <DataThresholdingIcon className="helpIcon" />
         
           <hr className="Separtormini" /> 
        </div>
        <div className='progBar' >
        <ProgressBar  bgColor='#2a3f54'
         height={35}
         width={300}
         margin={60}
         padding={5}
         
        
        completed={60} />
        </div>
        
      </div>
         
      </div>
      
  );
}
