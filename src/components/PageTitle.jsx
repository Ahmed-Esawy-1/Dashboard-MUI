import { Box, Typography, useTheme } from "@mui/material";

const PageTitle = ({ title, body }) => {
  const theme = useTheme();
  return (
    <Box mb={3}>
      <Typography
        sx={{
          color: theme.palette.primary.main,
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Typography fontSize={"14px"}>{body}</Typography>
    </Box>
  );
};

export default PageTitle;
