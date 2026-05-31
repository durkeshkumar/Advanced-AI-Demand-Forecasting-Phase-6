import React, { memo } from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";


function RevenueChart({ data }) {

  return (

    <div className="
      w-full
      h-[250px]
    ">

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <AreaChart
          data={data}
        >

          <XAxis
            dataKey="month"
          />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="sales"
            stroke="#9333ea"
            fill="#e9d5ff"
            strokeWidth={4}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>

  );

}

export default memo(
  RevenueChart
);