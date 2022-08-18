import { useState } from "react";
import Chart, { Props } from "react-apexcharts";

export const ChartArea = () => {
  const func = (event: any, chartContext: any, config: any) => {
    const selectedIndex = config.dataPointIndex;
    const { series } = config.config;
    console.log(
      series.map(({ data }: { data: number[] }) => data[selectedIndex])
    );
  };

  const [chartProps] = useState<Props>({
    type: "area",
    options: {
      chart: {
        id: "basic-chart",
        events: {
          click: func,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ["Jan", "Fev", "Mar", "Abr", "Mai"],
      },
      fill: {
        type: "solid",
        opacity: 1,
        colors: ["#457d63", "#589f7e"],
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        colors: "red",
      },
      stroke: {
        show: false,
      },
    },
    series: [
      {
        name: "Série um",
        type: "area",
        data: [20, 22, 20, 32, 26],
      },
      {
        name: "Série dois",
        type: "area",
        data: [24, 18, 23, 21, 10],
      },
    ],
  });

  return <Chart {...chartProps} width={500} height={500} />;
};
