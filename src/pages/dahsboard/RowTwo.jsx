import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import Line from "../../pages/lineChar/Line";
import { transactions } from "./data";


const RowTwo = () => {
  const theme = useTheme();

  return (
    <Stack flexDirection={"row"} flexWrap={"wrap"} gap={2}>
      <Paper
        sx={{ minWidth: "400px", minHeight: "50vh", flexGrow: 3, padding: 2 }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                color: theme.palette.secondary.main,
              }}
            >
              Revenue Generated
            </Typography>
            <Typography
              sx={{
                marginBottom: 1.5,
              }}
            >
              $59,342,32
            </Typography>
          </Box>
          <IconButton>
            <DownloadOutlined />
          </IconButton>
        </Stack>
        <Box sx={{ minHeight: "50vh" }}>
          <Line isDashboard={true} />
        </Box>
      </Paper>
      <Paper sx={{ minWidth: "400px", flexGrow: 1, padding: 2 }}>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            color: theme.palette.secondary.main,
            marginBottom: 2,
          }}
        >
          Recent Transactions
        </Typography>
        <Stack gap={2} sx={{ maxHeight: "50vh", overflow: "auto" }}>
          {transactions.map((item) => (
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              key={item.txId}
            >
              <Box>
                <Typography>{item.txId}</Typography>
                <Typography>{item.user}</Typography>
              </Box>
              <Typography>{item.date}</Typography>
              <Typography
                sx={{
                  backgroundColor: theme.palette.warning.main,
                  padding: "3px 7px",
                  borderRadius: "7px",
                }}
              >
                $ {item.cost}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default RowTwo;
