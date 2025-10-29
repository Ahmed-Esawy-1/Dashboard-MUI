import Box from "@mui/material/Box";
import PageTitle from "../../components/PageTitle";
import Bar from "./Bar";
const BarChart = () => {
  return (
    <Box sx={{ height: "75vh", minWidth: "550px" }}>
      <PageTitle title={"BarChar"} body={"Simple barchar to web developer saleries"} />
      <Bar isDashboard={false} />
    </Box>
  );
};

export default BarChart;
