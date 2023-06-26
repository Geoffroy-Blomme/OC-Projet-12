import React, { useEffect } from "react";
import FormatDataChart from "../services/FormatDataChart";
import "./ScoreChart.css";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { getTodayScore } from "../services/ApiCalls";
export default function ScoreChart(props) {
  const { id } = props;
  const [data, setData] = useState([]);
  const formatterData = new FormatDataChart();
  const getData = async () => {
    const request = await getTodayScore(id);
    setData(request.data);
  }
  useEffect(()=> {
    getData();
  },[])
  if(data.length === 0){
    return <></>;
  }
  const formattedData = formatterData.formatTodayScore(data.todayScore);
  let percentageValue = formattedData[0].value;
  const startAngleDegrees = 90;
  return (
    <div
      className="score-chart"
      style={{
        backgroundColor: "#FBFBFB",
        borderRadius: "5px",
        width: "100%",
        height: "100%",
        aspectRatio: "1/1",
      }}
    >
      <ResponsiveContainer>
        <RadialBarChart
          data={formattedData}
          cx="50%"
          cy="50%"
          innerRadius="90%"
          startAngle={startAngleDegrees}
          endAngle={startAngleDegrees + (percentageValue * 360) / 100}
        >
          <RadialBar
            name="score"
            dataKey="value"
            fill="red"
            stroke-linejoin="round"
            cornerRadius={100}
          ></RadialBar>
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="score-title">Score</div>
      <div className="score-text">
        {formattedData[0].value}% de votre objectif
      </div>
    </div>
  );
}
