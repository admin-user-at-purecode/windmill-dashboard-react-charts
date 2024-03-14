import React from "react";

import ChartCard, { PageTitle } from "../../components/Chart/ChartDetails.js";
import { Line, Bar } from "react-chartjs-2";
import ChartLegend from "../../components/Chart/ChartDetails.js";

import {
  lineOptions,
  barOptions,
  lineLegends,
  barLegends,
} from "../../components/Chart/chartsData.js";

function Charts() {
  return (
    <>
      <PageTitle>Charts</PageTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Lines">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>

        <ChartCard title="Bars">
          <Bar {...barOptions} />
          <ChartLegend legends={barLegends} />
        </ChartCard>
      </div>
    </>
  );
}

export default Charts;
