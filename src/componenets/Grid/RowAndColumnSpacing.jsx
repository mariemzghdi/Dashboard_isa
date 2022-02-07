import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import GougeCharts from '../Chart/GougeCharts';
import BarP from '../Chart/BarP';
import './Grid.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return <Box sx={{ width: 1 }}>
  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={10} >

    <Box gridColumn="span 3" className='Box' >
    
      <GougeCharts/>
    </Box>
    
    <Box gridColumn="span 3" className='Box'>
      <BarP />
    </Box>
    <Box gridColumn="span 3" className='Box'>
      <Item>xs=4</Item>
    </Box>
    <Box gridColumn="span 3" className='Box'>
      <Item>xs=4</Item>
    </Box>
 
  </Box>
</Box>;
}

