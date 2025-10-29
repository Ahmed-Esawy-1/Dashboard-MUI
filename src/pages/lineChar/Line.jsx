import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { data } from "./data";

const Line = ({ isDashboard = false }) => {
  const theme = useTheme();

  return (
    <ResponsiveLine
      data={data}
      margin={
        isDashboard
          ? { top: 15, right: 100, bottom: 35, left: 60 }
          : { top: 15, right: 110, bottom: 50, left: 60 }
      }
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      curve="natural"
      axisBottom={
        isDashboard ? undefined : { legend: "Transportation", legendOffset: 40 }
      }
      axisLeft={
        isDashboard ? undefined : { legend: "Price", legendOffset: -45 }
      }
      pointSize={10}
      pointColor="#fff"
      pointBorderWidth={2}
      pointBorderColor={{ from: "seriesColor" }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 22,
          symbolShape: "circle",
          itemTextColor: theme.palette.text.primary,
        },
      ]}
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
        tooltip: {
          container: {
            color: "#454545ff", // tooltip text
            background: "#fff",
          },
        },
      }}
    />
  );
};
export default Line;
