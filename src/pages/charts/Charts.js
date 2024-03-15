import React from "react";
import { Card, CardBody } from "@windmill/react-ui";
import ChartCard, { PageTitle } from "../../components/Chart/ChartDetails.js";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import ChartLegend from "../../components/Chart/ChartDetails.js";

import {
  doughnutOptions,
  lineOptions,
  barOptions,
  doughnutLegends,
  lineLegends,
  barLegends,
} from "../../components/Chart/chartsData.js";

function Charts() {
  return (
    <>
      <PageTitle>Charts</PageTitle>

      <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Big section cards
      </h2>

      <div className="fullWidthCard">
        <Card className="mb-8 shadow-md">
          <CardBody>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Large, full width sections goes here
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Doughnut">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

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
