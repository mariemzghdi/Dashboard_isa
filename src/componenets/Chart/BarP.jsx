import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import "./Chart.css";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import axios from "axios";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 25,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function BarP() {
  const [rows, setRows] = useState([]);

  async function getDonnees() {
    const reponse = await axios.get(
      `http://localhost:8080/api/controle_packet/qte`
    );
    return setRows(reponse.data);
  }
  useEffect(() => {
    getDonnees();
  }, []);

  const Qte = rows.map((obj) => {
    return parseFloat(obj.QteT);
  });
  console.log(rows);
  console.log(Qte);

  function numAverage(Qte) {
    var b = Qte.length,
      c = 0,
      i;
    for (i = 0; i < b; i++) {
      c += Number(Qte[i]);
    }
    return c;
  }
  console.log(numAverage(Qte));

  return (
    <div>
      <div className="gaugechart">
        <div className="subnavbar">
          <span className="titlePichart">Qte Produites</span>
          <DataThresholdingIcon className="helpIcon" />

          <hr className="Separtormini" />
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <br />
          <BorderLinearProgress
            variant="determinate"
            value={numAverage(Qte) - 40}
            className="LineProg"
          />
          <span className="Comments">Qte : {numAverage(Qte)} </span>
        </Box>
      </div>
    </div>
  );
}
