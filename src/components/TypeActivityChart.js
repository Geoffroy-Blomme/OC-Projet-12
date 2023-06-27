import React from "react";
import FormatDataChart from "../services/FormatDataChart";
import { useState,useEffect } from "react";
import { getPerformance } from "../services/ApiCalls";
import {
  RadarChart,
  ResponsiveContainer,
  PolarAngleAxis,
  Radar,
  PolarGrid,
} from "recharts";

export default function TypeActivityChart(props) {
  const { id } = props;
  const [data, setData] = useState([]);
  const formatterData = new FormatDataChart();
  const getData = async () => {
    const request = await getPerformance(id);
    setData(request);
  }
  useEffect(()=> {
    getData();
  },[])
  if(data.length === 0){
    return <></>;
  }
  const formattedData = formatterData.formatActivityType(data);
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
        <RadarChart data={formattedData} margin={{top:10,right:30,left:30,bottom:10}} >
          <PolarGrid  />
          <PolarAngleAxis
            tick={{
              fill: "white",
              fontFamily: "Roboto",
              fontSize: "12px",
            }}
            dataKey="activityType"
          ></PolarAngleAxis>
          <Radar dataKey="activityValue" fill="#FF0101B2" ></Radar>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
