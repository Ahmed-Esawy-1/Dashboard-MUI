import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import PageTitle from "../../components/PageTitle";
import rows from "./data";

const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      headerAlign: "center",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "100px",
              m: "10px auto 0",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              color: "#fff",
              backgroundColor:
                access === "Manager"
                  ? theme.palette.secondary.dark
                  : access === "Admin"
                  ? theme.palette.primary.dark
                  : "#3da58a",
            }}
          >
            {access === "Manager" ? (
              <SecurityOutlined fontSize="small" />
            ) : access === "Admin" ? (
              <AdminPanelSettingsOutlined fontSize="small" />
            ) : (
              <LockOpenOutlined fontSize="small" />
            )}
            <Typography sx={{ fontSize: "13px" }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  // @ts-ignore
  const numberofRows = Number.parseInt(window.innerHeight / 52) - 4;

  return (
    <Box
      sx={{
        height: "calc(100vh - 100px)",
        minWidth: "700px",
        marginX: "auto",
      }}
    >
      <PageTitle title={"Team Members"} body={"welcome in Team Page"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: numberofRows,
            },
          },
        }}
        pageSizeOptions={[numberofRows]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Team;
