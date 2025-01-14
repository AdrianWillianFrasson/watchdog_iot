import React, { useRef, useEffect } from "react";
import { init, getInstanceByDom } from "echarts";
import type { EChartsOption, ECharts, SetOptionOpts } from "echarts";

export interface ReactEChartsProps {
  option: EChartsOption;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme?: "light" | "dark";
}

export default function ReactECharts({
  option,
  settings,
  loading,
  theme,
}: ReactEChartsProps): React.JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme);
    }

    function resizeChart() {
      chart?.resize();
    }

    window.addEventListener("resize", resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (chart) {
        chart.setOption(option, settings);
      }
    }
  }, [option, settings, theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (chart) {
        loading === true ? chart.showLoading() : chart.hideLoading();
      }
    }
  }, [loading, theme]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
}
