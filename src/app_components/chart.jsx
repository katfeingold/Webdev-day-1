import Plotly from "plotly.js-dist-min";
import { useEffect, useRef } from "react";

function Chart({ data, title }) {
  const chartEl = useRef();

  const layout = {
    annotations: [
      {
        xref: "paper",
        yref: "paper",
        x: 0.2,
        y: 1.05,
        xanchor: "left",
        yanchor: "bottom",
        text: title,
        font: {
          family: "Arial",
          size: 30,
          color: "rgb(37,37,37)",
        },
        showarrow: false,
      },
    ],
  };

  useEffect(() => {
    if (chartEl.current) {
      Plotly.newPlot(chartEl.current, data, layout);
    }
  }, [chartEl.current, data]);

  return <div ref={chartEl}></div>;
}

export default Chart;
