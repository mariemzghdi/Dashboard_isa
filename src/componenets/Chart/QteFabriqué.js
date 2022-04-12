import React, { useState, useEffect } from "react";
import "./Chart.css";
import axios from "axios";
import QtPI from "../images/QtP.jpg";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";

export default function QteFabriqué() {
  const [rows, setRows] = useState([]);

  async function getDonnees() {
    const reponse = await axios.get(
      `http://localhost:8080/api/pack_operation/Rend`
    );
    return setRows(reponse.data);
  }
  useEffect(() => {
    getDonnees();
  }, []);

  const Rendement = rows.map((obj) => {
    return parseFloat(obj.Rend);
  });
  /*  console.log(Rendement)

console.log(rows)
console.log(typeof(Rendement[0])) */
  function numAverage(Rendement) {
    var b = Rendement.length,
      c = 0,
      i;
    for (i = 0; i < b; i++) {
      c += Number(Rendement[i]);
    }
    return c / b;
  }

  return (
    <div>
      <div className="gaugechart">
        <div className="subnavbar">
          <span className="titlePichart">Quantité fabriqué </span>
          <DataThresholdingIcon className="helpIcon" />

          <hr className="Separtormini" />
        </div>
        <div className="iconP">
          <img src={QtPI} className="iconIm" />
          <span className="Comments"> Produite: pieces </span>
        </div>
      </div>
    </div>
  );
}
