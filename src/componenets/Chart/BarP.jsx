import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import './Chart.css';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 25,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 10,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

export default function BarP() {
  return <div> 
        <div className="gaugechart">
        <div className =" subnavbar">
          <span className="titlePichart">Qte Produites</span>
          <DataThresholdingIcon className="helpIcon" />
         
           <hr className="Separtormini" /> 
        </div>
     
  <Box sx={{ flexGrow: 1 }}>
  <br />
  <BorderLinearProgress variant="determinate" value={60}  className='LineProg'/>
  </Box>
  </div>
        
      </div>


;
}
