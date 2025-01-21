"use client";

import { useState, useEffect } from "react";
import DataSelector from "./components/dataSelector";
import DataChart from "./components/dataChart";

// --------------------------------------------------------
async function apiGET() {
  const response = await fetch("/api", { method: "GET" });

  if (response.ok) {
    return response.json().catch((_) => ({}));
  }
}

// --------------------------------------------------------
export default function Home() {
  const [data, setData] = useState({});
  const [selectedKey, setSelectedKey] = useState("");

  // ------------------------------------------------------
  function updateData(newData = {}) {
    setData(newData);

    if (!selectedKey && Object.keys(newData)) {
      const keys = Object.keys(newData).filter((item) => item !== "timestamp");
      keys.sort();

      setSelectedKey(keys?.at(0) ?? "");
    }
  }

  useEffect(() => {
    apiGET().then((value) => updateData(value));

    const interval = setInterval(() => {
      apiGET().then((value) => updateData(value));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // ------------------------------------------------------
  return (
    <div className="flex flex-col h-full w-full space-y-3">
      <DataSelector data={data} setSelectedKey={setSelectedKey} />
      <DataChart
        // @ts-ignore
        x={data?.["timestamp"] ?? []}
        // @ts-ignore
        y={data?.[selectedKey] ?? []}
        title={`Histórico de Temperatura - ${selectedKey}`}
      />
    </div>
  );
}
