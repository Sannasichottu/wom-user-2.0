import { Box, Container } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import React from "react";
import PaginationTable from "./PaginationTable";

const AgainstInvoice = () => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <Box style={{ marginBottom: "30px" }} className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Against Invoice", path: "/material" },
            { name: "Invoice Order" }
          ]}
        />
      </Box>

      <SimpleCard title="Product Invoice">
        <PaginationTable />
      </SimpleCard>
    </Container>
  );
};

export default AgainstInvoice;
