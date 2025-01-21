"use client";

import ReactECharts from "./reactEChart";
import type { EChartsOption } from "echarts";

// --------------------------------------------------------
export default function DataChart({ x = [], y = [], title = "" }) {
  const options: EChartsOption = {
    title: {
      text: title,
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
      // @ts-ignore
      data: x,
      type: "category",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: y,
        type: "line",
        smooth: true,
      },
    ],
  };

  // ------------------------------------------------------
  return (
    <div className="flex flex-col h-full w-full min-h-96">
      <ReactECharts option={options} />
    </div>
  );
}
