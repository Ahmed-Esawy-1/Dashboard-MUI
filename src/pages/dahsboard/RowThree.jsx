import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Pie from "../../pages/pieChar/Pie";
import Bar from "../../pages/barChar/Bar";
import Geography from "../../pages/geographyChar/Geograpgy";

const RowThree = () => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
      <Paper sx={{ minWidth: "350px", flexGrow: 1, padding: 2 }}>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            color: theme.palette.secondary.main,
          }}
        >
          Campaign
        </Typography>
        <Box sx={{ minWidth: "350px", minHeight: "40vh" }}>
          <Pie isDashboard={true} />
        </Box>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          $48,352 revenue generated
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          minWidth: "350px",
          flexGrow: 1,
          padding: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            color: theme.palette.secondary.main,
          }}
        >
          Web Developers Saleries
        </Typography>
        <Box sx={{ minWidth: "350px", minHeight: "50vh", maxHeight: "" }}>
          <Bar isDashboard={true} />
        </Box>
      </Paper>
      <Paper sx={{ minWidth: "350px", minHeight: "60vh", flexGrow: 1 }}>
        <Geography isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default RowThree;
