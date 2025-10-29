import  Box from "@mui/material/Box";
import PageTitle from "../../components/PageTitle";
import Geography from "./Geograpgy";

const GeographyChart = () => {


  return (
    <Box sx={{ height: "80vh", minWidth: "800px" }}>
      <PageTitle
        title={"Geography Chart"}
        body={"Simple pie chart countries polution"}
      />
      <Geography />
    </Box>
  );
};

export default GeographyChart;
