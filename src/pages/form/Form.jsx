import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  IconButton,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import PageTitle from "../../components/PageTitle";

const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regPass = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;

const Form = () => {
  // Start Handle Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Start SnackBar
  const [open, setOpen] = React.useState(false);

  const handleSnackBar = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
  // End SnackBar
  // End Handle Form
  const onSubmit = () => {
    handleSnackBar();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", m: 1 }}
      noValidate
      autoComplete="off"
    >
      <PageTitle title={"Form"} body={"If you want to add new user"} />
      <Stack sx={{ flexDirection: "row", mb: 3 }}>
        <TextField
          sx={{ flex: 1, mr: 2 }}
          label="First Name"
          {...register("firstName", { required: true, minLength: 2 })}
          error={Boolean(errors.firstName)}
        />
        <TextField
          sx={{ flex: 1 }}
          label="Last Name"
          {...register("lastName", { required: true, minLength: 2 })}
          error={Boolean(errors.lastName)}
        />
      </Stack>
      <TextField
        sx={{ mb: 3 }}
        label="Email"
        {...register("email", { required: true, pattern: regEmail })}
        error={Boolean(errors.email)}
        helperText={errors.email ? "Enter Vaild Email" : null}
      />
      <TextField
        sx={{ mb: 3 }}
        {...register("password", { required: true, pattern: regPass })}
        label="Password"
        error={Boolean(errors.password)}
        helperText={
          errors.password
            ? "Pass Should have one digit at least & one letter at least & greater than 8"
            : null
        }
      />
      <TextField
        sx={{ mb: 3 }}
        {...register("Address1", { required: false })}
        label="Address1"
      />
      <TextField
        sx={{ mb: 3 }}
        {...register("Address2", { required: false })}
        label="Address2"
      />
      <Button type="submit" sx={{ width: "fit-content", marginLeft: "auto" }}>
        Create User
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        action={action}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", color: "#fff" }}
        >
          Add User Successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;
