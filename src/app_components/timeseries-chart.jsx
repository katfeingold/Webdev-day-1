import useAPISeries from "../app_hooks/useAPI-series";
import Chart from "./chart";
import Loader from "./loader";

function parseValues(values = [], formatters) {
  const out = [];
  values.forEach((step) => {
    step.forEach((m, i) => {
      if (!out[i]) out[i] = [];
      if (formatters[i]) {
        out[i].push(formatters[i](m));
      } else {
        out[i].push(m);
      }
    });
  });
  return out;
}

function TimeseriesChart({ tsNames, office, start, end }) {
  if (!tsNames.length) return <p>Please select a timeseries...</p>;

  const measurements = useAPISeries(office, tsNames, start, end);

  if (!measurements.length) return <Loader />;

  const data = [];
  measurements.forEach((series) => {
    const [x, y] = parseValues(series.values, [
      (m) => {
        return new Date(m);
      },
    ]);

    const trace = {
      name: series.name,
      x: x,
      y: y,
      type: "lines+markers",
    };

    data.push(trace);
  });

  return <Chart data={data} title={"title here"} />;
}

export default TimeseriesChart;
