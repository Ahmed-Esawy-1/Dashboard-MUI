import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import PageTitle from "../../components/PageTitle";
import { columns, rows } from "./data";

const Contact = () => {

  return (
    <Box
      sx={{
        height: "calc(100vh - 100px)",
        width: "98%",
        marginX: "auto",
      }}
    >
      <PageTitle title={"Contact"} body={"Data of your Contact"} />
      <DataGrid
        showToolbar
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Contact;
