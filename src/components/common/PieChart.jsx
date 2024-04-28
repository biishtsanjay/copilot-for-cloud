import React from "react";
import { DonutData } from "@/app/constants/text";
import { PieChart, Pie, Cell } from "recharts";

const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function PieC() {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 2.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontSize: "10px" }}
      >
        {`${name} - ${(percent * 100).toFixed(0)}% ($${100000 * percent})`}
      </text>
    );
  };

  return (
    <PieChart width={700} height={390} style={{ margin: "-3rem auto" }}>
      <Pie
        data={DonutData}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        label={renderCustomizedLabel}
        className="ml-[6rem]"
      >
        {DonutData?.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            name={entry.name}
          />
        ))}
      </Pie>
    </PieChart>
  );
}
export default PieC;
