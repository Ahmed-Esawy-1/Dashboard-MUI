import Stack from '@mui/material/Stack'
import MailIcon from "@mui/icons-material/Mail";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import {DashboardCard} from "../../components/DashboardCard";
import {data1, data2, data3, data4} from "./data"
export const RowOne = () => {
  return (
    <Stack

    direction={"row"}
    flexWrap={"wrap"}
    gap={2}
    >
      <DashboardCard
        number={"12,361"}
        title={"Emails Sent"}
        icon={MailIcon}
        pie={{ scheme: "category10", data: data1 }}
        percentage={"+14%"}
      />
      <DashboardCard
        number={"431,225"}
        title={"Sales Obtained"}
        icon={PointOfSaleIcon}
        pie={{ scheme: "paired", data: data2 }}
        percentage={"+21%"}
      />
      <DashboardCard
        number={"32,441"}
        title={"New Clients"}
        icon={PersonAddIcon}
        pie={{ scheme: "accent", data: data3 }}
        percentage={"+5%"}
      />
      <DashboardCard
        number={"1,325,134"}
        title={"Traffic Received"}
        icon={TrafficIcon}
        pie={{ scheme: "set1", data: data4 }}
        percentage={"+43%"}
      />
    </Stack>
  );
}
export default RowOne;