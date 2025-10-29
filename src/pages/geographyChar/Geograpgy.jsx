import { ResponsiveChoropleth } from "@nivo/geo";
import { useTheme } from "@mui/material/styles";

import { data } from "./data";
import { countries } from "./world_countries";

const Geograpgy = ({ isDashboard = false}) => {
  const theme = useTheme();

  return (
    <ResponsiveChoropleth 
      data={data}
      features={countries.features}
      margin={{ top: 0, right: 20, bottom: 0, left: 20 }}
      colors="OrRd"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      enableGraticule={false}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={isDashboard ? [] : [
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: theme.palette.text.primary,
          itemOpacity: 0.85,
          symbolSize: 18,
        },
      ]}
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

export default Geograpgy;
