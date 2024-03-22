import { Box, styled } from "@mui/material";
import PaginationTable from "./PaginationTable";
import { Breadcrumb, SimpleCard } from "app/components";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function OrderHistory() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Order History", path: "/material" }, { name: "History" }]}
        />
      </Box>

      <SimpleCard title="Order History">
        <PaginationTable />
      </SimpleCard>
    </Container>
  );
}
