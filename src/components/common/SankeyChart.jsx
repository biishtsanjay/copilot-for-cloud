import { SankeyData } from "@/app/constants/text";
import React from "react";
import { Chart } from "react-google-charts";

const SankeyChart = () => {
  const options = {};
  return (
    <Chart
      chartType="Sankey"
      width="100%"
      height="300px"
      data={SankeyData}
      options={options}
    />
  );
};

export default SankeyChart;
