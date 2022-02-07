import React from 'react';

import Box from '@mui/material/Box';

import Colone_Chart from '../Chart/Colone_Chart';
import LineChart from '../Chart/LineChart';
import './Grid.css';




export default function RowAndColumbSpa2() {
  return <Box sx={{ width: 1 }}>
  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={10}>
    <Box gridColumn="span 6" marginTop={10} className='Box' >
     
    
     <Colone_Chart/>
    </Box>
    <Box gridColumn="span 6" marginTop={10} className='Box'>
    <LineChart />
    </Box>
   
  </Box>
</Box>;
}
