import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { grey } from "@mui/material/colors";

import { Avatar, Typography, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
// Icons
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  Home,
  People,
  Contacts,
  Receipt,
  Person,
  CalendarToday,
  Help,
  BarChart,
  PieChartOutline,
  Timeline,
  Map,
} from "@mui/icons-material";


const drawerWidth = 240;

const List1 = [
  { title: "dashboard", icon: <Home />, path: "/" },
  { title: "Mange Team", icon: <People />, path: "/team" },
  { title: "Contact", icon: <Contacts />, path: "/contact" },
  { title: "invoices Balances", icon: <Receipt />, path: "/invoices" },
];
const List2 = [
  { title: "Form", icon: <Person />, path: "/form" },
  { title: "Calender", icon: <CalendarToday />, path: "/calender" },
  { title: "FAQ Page", icon: <Help />, path: "/faq" },
];
const List3 = [
  { title: "Bar Chart", icon: <BarChart />, path: "/bar" },
  { title: "Pie Chart", icon: <PieChartOutline />, path: "/pie" },
  { title: "Line Chart", icon: <Timeline />, path: "/line" },
  { title: "Geography Chart", icon: <Map />, path: "/geography" },
];

// eslint-disable-next-line no-unused-vars
const SideBar = ({ open, handleDrawerClose, DrawerHeader }) => {
  let navigate = useNavigate();
  let location = useLocation();
  const theme = useTheme();


  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      // @ts-ignore
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Avatar
        sx={{
          mx: "auto",
          my: 1,
          width: 60,
          height: 60,
          border: "2px solid grey",
        }}
        alt="Travis Howard"
        src="/images/profile.webp"
      />
      <Typography align="center" sx={{ fontSize: 17, mb: 1 }}>
        Ahmed Esawy
      </Typography>
      <Typography
        align="center"
        sx={{ fontSize: 14, mb: 2, color: theme.palette.info.main }}
      >
        Admin
      </Typography>

      <Divider />

      <List>
        {List1.map((li, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              backgroundColor:
                location.pathname === li.path
                  ? theme.palette.mode === "dark"
                    ? grey[800]
                    : grey[300]
                  : null,
            }}
          >
            <ListItemButton onClick={() => navigate(li.path)}>
              <ListItemIcon>{li.icon}</ListItemIcon>
              <ListItemText primary={li.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {List2.map((li, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(li.path)}>
              <ListItemIcon>{li.icon}</ListItemIcon>
              <ListItemText primary={li.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {List3.map((li, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(li.path)}>
              <ListItemIcon>{li.icon}</ListItemIcon>
              <ListItemText primary={li.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
