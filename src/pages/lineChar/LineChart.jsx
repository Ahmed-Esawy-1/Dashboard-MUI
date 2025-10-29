import Box from "@mui/material/Box";
import PageTitle from "../../components/PageTitle";
import Line from "./Line";

const LineChart = () => {
  return (
    <Box sx={{ height: "80vh" }}>
      <PageTitle
        title={"Line Chart"}
        body={"Simple pie chart about transportation"}
      />
      <Line />
    </Box>
  );
}

export default LineChart