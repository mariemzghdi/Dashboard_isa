import React from "react";
import Box from "@mui/material/Box";
import "./Grid.css";
import "../Chart/Encours";

import QteEnRetour from "../Chart/QteEnRetour";
import QteFabriqué from "../Chart/QteFabriqué";

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={10}>
        <Box gridColumn="span 4" height={300} width={400} className="Box">
          <QteFabriqué />
        </Box>

        <Box gridColumn="span 4" height={300} width={400} className="Box">
          <QteEnRetour />
        </Box>
        <Box gridColumn="span 4" className="Box"></Box>
      </Box>
    </Box>
  );
}
