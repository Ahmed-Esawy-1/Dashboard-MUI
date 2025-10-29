import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material/styles";
import { data } from "./data";

const Bar = ({ isDashboard }) => {
  const theme = useTheme();
  return (
    <ResponsiveBar
      data={data}
      keys={["frontend", "backend", "full-stack"]}
      indexBy="country"
      labelSkipWidth={12}
      labelSkipHeight={12}
      colors={{ scheme: "set1" }}
      legends={
        isDashboard
          ? []
          : [
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                translateX: 120,
                itemsSpacing: 3,
                itemWidth: 100,
                itemHeight: 16,
              },
            ]
      }
      axisBottom={
        isDashboard ? undefined : { legend: "country", legendOffset: 40 }
      }
      axisLeft={
        isDashboard ? undefined : { legend: "salary/month", legendOffset: -55 }
      }
      margin={
        isDashboard
          ? { top: 25, right: 0, bottom: 25, left: 50 }
          : { top: 25, right: 130, bottom: 50, left: 60 }
      }
      theme={{
        axis: {
          ticks: {
            text: {
              fill: theme.palette.text.primary, // axis tick labels
            },
          },
          legend: {
            text: {
              fill: theme.palette.text.primary, // axis legends
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.text.primary, // legend labels
          },
        },
        labels: {
          text: {
            fill: theme.palette.text.primary, // bar labels
          },
        },
        tooltip: {
          container: {
            color: "#fff", // tooltip text
            background: "#454545ff",
          },
        },
      }}
    />
  );
};

export default Bar;
