import React from "react";
import Box from "@mui/material/Box";
import "./Grid.css";
import QteEng from "../Chart/QteEng";
import Encours from "../Chart/Encours";

export default function RowAndColumbSpa2() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={10}>
        <Box gridColumn="span 6" marginTop={10} height={300} width={650}  className="Box">
          <QteEng/>
        </Box>
        <Box gridColumn="span 6" marginTop={10}  height={300} width={650} className="Box">
        <Encours />
        </Box>
      </Box>
    </Box>
  );
}
