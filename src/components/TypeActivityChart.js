import React from "react";
import FormatDataChart from "../services/FormatDataChart";

import {
  RadarChart,
  ResponsiveContainer,
  PolarAngleAxis,
  Radar,
  PolarGrid,
} from "recharts";

export default function TypeActivityChart(props) {
  const { data } = props;
  const formatterData = new FormatDataChart();
  const formattedData = formatterData.formatActivityType(data);
  console.log(formattedData);
  return (
    <div
      className="type-activity-chart"
      style={{
        borderRadius: "5px",
        backgroundColor: "#282D30",
        width: "100%",
        height: "100%",
      }}
    >
      <ResponsiveContainer>
        <RadarChart data={formattedData}>
          <PolarGrid />
          <PolarAngleAxis
            tick={{
              fill: "white",
              fontFamily: "Roboto",
              fontSize: "12px",
            }}
            dataKey="activityType"
          ></PolarAngleAxis>
          <Radar dataKey="activityValue" fill="#FF0101B2"></Radar>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
