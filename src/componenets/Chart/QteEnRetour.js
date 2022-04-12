import React, { useEffect, useState } from "react";
import RetouI from "../images/PngItem_117355.png";
import "./Chart.css";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import axios from "axios";

export default function QteEnRetour() {
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
          <span className="titlePichart"> Quantité en Retour </span>
          <DataThresholdingIcon className="helpIcon" />
          <hr className="Separtormini" />
        </div>
          <div className="iconP">
            <img src={RetouI} className="iconIm" />
            <span className="Comments"> Retour: {numAverage(Qte)} pieces </span>
          </div>
          <br />
      </div>
    </div>
  );
}
