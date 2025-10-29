import Box from "@mui/material/Box";
import PageTitle from "../../components/PageTitle";
import Pie from "./Pie";

const PieChart = () => {
  return (
    <Box sx={{ height: "80vh" }}>
      <PageTitle title={"Pie Chart"} body={"Simple pie chart about techinces that build the dashboard"} />
      <Pie />
    </Box>
  );
};

export default PieChart;
