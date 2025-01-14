"use client";

import { useState, useEffect } from "react";
import DataSelector from "./components/dataSelector";
import DataChart from "./components/dataChart";

// --------------------------------------------------------
async function apiGET() {
  const response = await fetch("/api", { method: "GET" });

  if (response.ok) {
    return response.json();
  }
}

// --------------------------------------------------------
export default function Home() {
  const [data, setData] = useState({});
  const [selectedKey, setSelectedKey] = useState("");

  // ------------------------------------------------------
  useEffect(() => {
    apiGET().then((value) => setData(value));

    const interval = setInterval(() => {
      apiGET().then((value) => setData(value));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // ------------------------------------------------------
  return (
    <div className="flex flex-grow p-5 space-x-5">
      <DataSelector data={data} setSelectedKey={setSelectedKey} />
      <DataChart data={data} selectedKey={selectedKey} />
    </div>
  );
}
