"use client";

import { useMemo } from "react";
import ReactECharts from "./reactEChart";
import type { EChartsOption } from "echarts";

// --------------------------------------------------------
function getSensorsData(data = {}, selectedKey = "") {
  return data[selectedKey];
}

// --------------------------------------------------------
export default function DataChart({ data = {}, selectedKey = "" }) {
  const sensorsData = useMemo(() => getSensorsData(data, selectedKey), [data, selectedKey]);

  const options: EChartsOption = {
    title: {
      text: `Histórico de Temperatura - ${selectedKey}`,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 100,
      },
      {
        start: 0,
        end: 100,
      },
    ],
    xAxis: {
      data: data["timestamp"],
      type: "category",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: sensorsData,
        type: "line",
        smooth: true,
      },
    ],
  };

  // ------------------------------------------------------
  return (
    <div className="flex flex-grow">
      <div className="flex flex-grow">
        <ReactECharts option={options} />
      </div>
    </div>
  );
}
