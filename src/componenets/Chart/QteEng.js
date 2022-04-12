import React, { useState, useEffect } from "react";
import AddchartIcon from "@mui/icons-material/Addchart";
import axios from "axios";
import "./Chart.css";
import QteI from "../images/PngItem_2561393.png";

export default function QteEng() {
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
  const Noms = rows.map((obj) => {
    return obj.Firstname;
  });
  console.log(Rendement);
  console.log(Noms);

  const options = {
    chart: {
      id: "apexchart-example",
    },

    colors: ["#1a90ff"],

    xaxis: {
      categories: Noms,

      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
  };

  const series = [
    {
      name: "Rendement",
      data: Rendement,
    },
  ];

  return (
    <div className="gaugechart">
      <div className="subnavbar">
        <span className="titlePichart">Quantité engagé </span>
        <AddchartIcon className="helpIcon" />

        <hr className="Separtormini" />
      </div>
      <div className="iconP">
        <img src={QteI}  className="iconE" />
        <span className="Comments"> Produite: pieces </span>
      </div>
    </div>
  );
}
