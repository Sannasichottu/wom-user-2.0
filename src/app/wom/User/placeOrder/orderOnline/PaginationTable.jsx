import { useState } from "react";
import {
  Box,
  Table,
  styled,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";

// STYLED COMPONENT
const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } }
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } }
  }
}));

const subscribarList = [
  {
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    Image: "",
    date: "18 january, 2019",
    type: "Petrol",
    code: "2TR-FE",
    company: "ABC Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual",
    date: "10 january, 2019",
    type: "Diesel",
    code: "2GD-FTV",
    company: "My Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic",
    date: "10 january, 2019",
    type: "Diesel",
    code: "1GD-FTV",
    company: "My Fintech LTD."
  },
  {
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    date: "8 january, 2019",
    type: "Petrol",
    code: "2TR-FE",
    company: "Collboy Tech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual",
    date: "1 january, 2019",
    type: "Petrol",
    code: "	2GD-FTV",
    company: "ABC Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual",
    date: "1 january, 2019",
    type: "Diesel",
    code: "	2GD-FTV",
    company: "ABC Fintech LTD."
  },
  {
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    date: "1 january, 2019",
    type: "Petrol",
    code: "	2TR-FE",
    company: "ABC Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic",
    date: "1 january, 2019",
    type: "Petrol",
    code: "1GD-FTV",
    company: "ABC Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual",
    date: "1 january, 2019",
    type: "Petrol",
    code: "	2GD-FTV",
    company: "ABC Fintech LTD."
  }
];

export default function PaginationTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="center">Product Image</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="center">Start Date</TableCell>
            <TableCell align="center">Engine Code</TableCell>
            <TableCell align="center">Engine Type</TableCell>
            <TableCell align="center">Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">{subscriber.Image}</TableCell>
                <TableCell align="left">{subscriber.company}</TableCell>
                <TableCell align="center">{subscriber.name}</TableCell>
                <TableCell align="right">{subscriber.date}</TableCell>
                <TableCell align="center">{subscriber.code}</TableCell>
                <TableCell align="center">{subscriber.type}</TableCell>
                <TableCell align="center">
                  <Button>
                    <Link to="/dashboard/order/payment" style={{ textDecoration: "none" }}>
                      {" "}
                      Pay{" "}
                    </Link>{" "}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={subscribarList.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
}
