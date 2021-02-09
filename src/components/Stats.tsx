import React from "react";
import {
  BarChart,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  //More Test Data
  {
    date: "Week 1",
    people_added: 3,
    devices_added: 2,
    amt: 4,
  },
];

export default function Stats() {
  return (
    <div className="m-12">
      <h1 className="text-red-500 font-sans pb-2 text-xl">Stats</h1>
      <div className="w-full bg-white shadow-md pt-2 pb-2 pl-4 pr-4 rounded-md">
        <div className="flex flex-wrap justify-center items-center overflow-hidden">
          <BarChart
            width={800}
            height={400}
            data={data}
            margin={{ top: 15, right: 30, left: 20, bottom: 15 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="devices_added" fill="#3B84F7">
              <LabelList dataKey="devices_added" position="top" />
            </Bar>
            <Bar dataKey="people_added" fill="#F03A17">
              <LabelList dataKey="people_added" position="top" />
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
}
