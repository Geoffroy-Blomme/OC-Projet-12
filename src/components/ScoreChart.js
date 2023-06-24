import React from "react";
import FormatDataChart from "../services/FormatDataChart";
import "./ScoreChart.css";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

export default function ScoreChart(props) {
  const { data } = props;
  const formatterData = new FormatDataChart();
  const formattedData = formatterData.formatTodayScore(data);
  const percentageValue = data * 100;
  const startAngleDegrees = 90;
  console.log(formattedData);
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
