import { useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { data } from "./data";

const Pie = ({ isDashboard = false }) => {
  const theme = useTheme();

  return (
    <ResponsivePie
      data={data}
      margin={
        isDashboard
          ? { top: 0, right: 15, bottom: 20, left: 15 }
          : { top: 20, right: 80, bottom: 80, left: 80 }
      }
      innerRadius={isDashboard ? 0.6 : 0.4}
      padAngle={0.6}
      cornerRadius={2}
      enableArcLinkLabels={isDashboard ? false : true}
      activeOuterRadiusOffset={8}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.text.secondary}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      legends={
        isDashboard
          ? []
          : [
              {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: "circle",
                itemTextColor: theme.palette.text.primary,
              },
            ]
      }
      theme={{
        tooltip: {
          container: {
            color: "#333333",
            background: "#fff",
            fontWeight: "bold",
          },
        },
      }}
    />
  );
};

export default Pie;
