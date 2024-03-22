import { Box, Container } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import React from "react";
import PaginationTable from "./PaginationTable";

const OrderOnline = () => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <Box style={{ marginBottom: "30px" }} className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Order Online", path: "/material" }, { name: "Online Order" }]}
        />
      </Box>

      <SimpleCard title="Product Online">
        <PaginationTable />
      </SimpleCard>
    </Container>
  );
};

export default OrderOnline;
