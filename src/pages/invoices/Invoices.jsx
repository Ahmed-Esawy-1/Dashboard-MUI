import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import PageTitle from "../../components/PageTitle";
import { columns, rows } from "./data";

const Invoices = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 100px)",
        width: "98%",
        marginX: "auto",
      }}
    >
      <PageTitle
        title={"Invoics Balances"}
        body={"welcome in invoics balances page"}
      />
      <DataGrid
        showToolbar
        rows={rows}
        // @ts-ignore
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Invoices;
