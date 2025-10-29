import { Box, Stack, Button, useTheme } from "@mui/material";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import TitlePage from "../../components/PageTitle";
import RowOne from "./RowOne";
import RowTwo from "./RowTwo";
import RowThree from "./RowThree";

const Dashboard = () => {
  const title = "Dashboard";
  const body = "Welcome to your dashboard";
  const theme = useTheme();

  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <TitlePage title={title} body={body} />
        <Button
          sx={{ backgroundColor: theme.palette.primary.main }}
          variant="contained"
          color="primary"
        >
          <DownloadOutlined sx={{ mr: 1 }} />
          Download Reports
        </Button>
      </Stack>
      <Stack direction={"column"} gap={3.5}>
        <RowOne />
        <RowTwo />
        <RowThree />
      </Stack>
    </Box>
  );
};

export default Dashboard;
