"use client";

import { useMemo } from "react";

// --------------------------------------------------------
function getSensorsKeys(data = {}) {
  const keys = Object.keys(data).filter((item) => item !== "timestamp");
  keys.sort();

  return keys;
}

// --------------------------------------------------------
export default function DataSelector({ data = {}, setSelectedKey = (_item) => {} }) {
  const sensorsKeys = useMemo(() => getSensorsKeys(data), [data]);

  // ------------------------------------------------------
  return (
    <div className="flex flex-col space-y-5 overflow-y-auto">
      {sensorsKeys.map((item, key) => (
        <div
          key={key}
          onClick={() => setSelectedKey(item)}
          className="flex flex-col bg-gray-800 hover:bg-gray-700"
        >
          <div className="text-gray-400 self-end text-xs mx-2">°C</div>
          <div className="flex flex-col items-center mx-5">
            <div className="text-xl">{data[item].slice(-1)}</div>
            <div className="text-gray-400">{item}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
