import { useState } from "react";
import Chart, { Props } from "react-apexcharts";

export const ChartPizza = () => {
  const [chartProps] = useState<Props>({
    type: "radialBar",
    series: [80],
    options: {
      colors: ["#20E647"],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#293450",
          },
          track: {
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.15,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              color: "#fff",
              fontSize: "300%",
              show: true,
              offsetY: -10,
            },
          },
        },
      },
    },
  });

  return <Chart {...chartProps} />;
};
