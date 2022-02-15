import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import AddchartIcon from "@mui/icons-material/Addchart";
import axios from "axios";
import "./Chart.css";

export default function Colone_Chart() {
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
        <span className="titlePichart">Chart</span>
        <AddchartIcon className="helpIcon" />

        <hr className="Separtormini" />
      </div>
      <Chart
        options={options}
        series={series}
        type="bar"
        width={650}
        height={350}
      />
    </div>
  );
}
