import React, { useState, useEffect } from "react";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import axios from "axios";
import "./Chart.css";
import EncI from "../images/QtE.jpg"

export default function Encours() {
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

 

  return (
    <div className="gaugechart">
      <div className=" subnavbar">
        <span className="titlePichart"> Quantité en cours </span>
        <DataThresholdingIcon className="helpIcon" />

        <hr className="Separtormini" />
 
      </div>
      <div className="iconP">
          <img src={EncI} className="iconC" />
          <span className="Comments"> En Cours: pieces </span>
        </div>
 
    
    </div>
  );
}
