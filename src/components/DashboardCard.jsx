import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ResponsivePie } from "@nivo/pie";

export const DashboardCard = ({
  number,
  title,
  icon: Icon,
  pie,
  percentage,
}) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        minWidth: "250px",
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 15px",
      }}
    >
      <Box>
        {Icon && (
          <Icon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />
        )}
        <Typography sx={{ my: "10px" }}>{number}</Typography>
        <Typography>{title}</Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Box height={"70px"} width={"70px"} mb={2}>
          <ResponsivePie 
            data={pie.data}
            innerRadius={0.5}
            padAngle={0.6}
            cornerRadius={2}
            activeOuterRadiusOffset={1}
            colors={{ scheme: pie.scheme }}
            enableArcLinkLabels={false}
            enableArcLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={theme.palette.text.secondary}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
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
        </Box>
        <Typography>{percentage}</Typography>
      </Box>
    </Paper>
  );
};
