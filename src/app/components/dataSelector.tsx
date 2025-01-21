"use client";

import { useMemo } from "react";

// --------------------------------------------------------
function getSensorsKeys(data = {}) {
  const keys = Object.keys(data).filter((item) => item !== "timestamp");
  keys.sort();

  return keys;
}

// --------------------------------------------------------
export default function DataSelector({ data = {}, setSelectedKey = (_: string) => {} }) {
  const sensorsKeys = useMemo(() => getSensorsKeys(data), [data]);

  // ------------------------------------------------------
  return (
    <div className="flex min-h-fit w-full justify-evenly space-x-3 overflow-x-auto">
      {sensorsKeys.map((item, key) => (
        <div
          key={key}
          onClick={() => setSelectedKey(item)}
          className="flex flex-col bg-main1 hover:bg-gray-700 border-b-1 border-gray-500"
        >
          <div className="text-gray-300 self-end text-xs mx-2">°C</div>
          <div className="flex flex-col items-center mx-5">
            <div className="text-xl">
              {
                // @ts-ignore
                data[item]?.at(-1) ? data[item]?.at(-1) : "-"
              }
            </div>
            <div className="text-gray-300">{item}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
