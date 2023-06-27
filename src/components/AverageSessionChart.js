import React, { useState, useEffect } from "react";
import FormatDataChart from "../services/FormatDataChart";
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CustomTooltipAverageSession from "./CustomTooltipAverageSession";
import {getAverageSessions} from "../services/ApiCalls";
export default function AverageSessionChart(props) {
  const { id } = props;
  const [data, setData] = useState([]);
  const formatterData = new FormatDataChart();
    const getData = async () => {
      const request = await getAverageSessions(id);
      setData(request);
    }
    useEffect(()=> {
      getData();
    },[])
    if(data.length === 0){
      return <></>;
    }
  const formattedData = formatterData.formatDataAverageSessions(data.sessions);
  
  return (
    <div
      className="average-session-chart"
      style={{
        borderRadius: "5px",
        backgroundColor: "#FF0000",
        width: "100%",
        height: "100%",
      }}
    >
      <ResponsiveContainer>
        <LineChart
          data={formattedData}
          margin={{ top: 24, right: 29, left: 32, bottom: 23 }}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="white"  ></XAxis>
          <YAxis dataKey="sessionLength" hide={true} padding={{bottom:50}} ></YAxis>
          <defs>
            <linearGradient id="line-gradient">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.3}></stop>
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity={1}></stop>
            </linearGradient>
          </defs>
          <Line
            type="natural"
            dot={false}
            dataKey="sessionLength"
            stroke="url(#line-gradient)"
          ></Line>
          <Tooltip content={<CustomTooltipAverageSession />}></Tooltip>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
