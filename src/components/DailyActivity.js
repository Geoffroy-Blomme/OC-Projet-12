import React from "react";
import FormatDataChart from "../services/FormatDataChart";
import CustomTooltip from "./CustomToolTipDailyActivity";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function DailyActivity(props) {
  const { data } = props;

  const chartDataFormatter = new FormatDataChart();
  const formattedData = chartDataFormatter.formatDataBarChart(data);

  return (
    <div
      style={{
        backgroundColor: "#FBFBFB",
        borderRadius: "5px",
        width: "100%",
      }}
    >
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          barGap={8}
          data={formattedData}
          margin={{ top: 24, right: 29, left: 32, bottom: 23 }}
        >
          <text
            x={100}
            y={37}
            fill="black"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="15" fontFamily="Roboto">
              Activité Quotidienne
            </tspan>
          </text>

          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            iconSize={8}
            height={75}
          />
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis axisLine={false} tickLine={false} dataKey="name"></XAxis>
          <YAxis
            dataKey="calories"
            yAxisId="left"
            orientation="left"
            hide="true"
          />
          <Tooltip
            offset={60}
            wrapperStyle={{ outline: "none" }}
            content={<CustomTooltip />}
          ></Tooltip>
          <YAxis
            className="activityYAxis"
            dataKey="kilogram"
            yAxisId="right"
            orientation="right"
            type="number"
            domain={["dataMin -1", "dataMax +1"]}
            tickCount="4"
            tickSize="0"
            axisLine={false}
            tickMargin="30"
            width={45}
            stroke="#9B9EAC"
          />
          <Bar
            name="Poids (kg)"
            barSize={7}
            radius={[3, 3, 0, 0]}
            dataKey="calories"
            yAxisId="left"
            fill="#282D30"
          />
          <Bar
            name="Calories Brulées (kCal)"
            barSize={7}
            radius={[3, 3, 0, 0]}
            dataKey="kilogram"
            yAxisId="right"
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
