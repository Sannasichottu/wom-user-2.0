// import React from "react";
// import { Box, styled } from "@mui/material";
// import { Breadcrumb, SimpleCard } from "app/components";
// import AsyncAutocomplete from "./AsyncAutocomplete";
// import AutocompleteCombo from "./AutocompleteCombo";
// import BadgeAutocomplete from "./BadgeAutocomplete";

// const Container = styled("div")(({ theme }) => ({
//   margin: "30px",
//   [theme.breakpoints.down("sm")]: { margin: "16px" },
//   "& .breadcrumb": {
//     marginBottom: "30px",
//     [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
//   }
// }));

// const EnquiryForm = () => {
//   return (
//     <Container>
//       <Box className="breadcrumb">
//         <Breadcrumb
//           routeSegments={[{ name: "User", path: "/material" }, { name: "Enquiry Form" }]}
//         />
//       </Box>

//       <SimpleCard title="autocomplete combo">
//         <AutocompleteCombo />
//       </SimpleCard>

//       <Box py="12px" />

//       <SimpleCard title="Asyncronous Autocomplete">
//         <AsyncAutocomplete />
//       </SimpleCard>

//       <Box py="12px" />

//       <SimpleCard title="Asyncronous Autocomplete">
//         <BadgeAutocomplete />
//       </SimpleCard>
//     </Container>
//   );
// };

// export default EnquiryForm;

import React from "react";
import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleForm from "./SimpleForm";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const EnquiryForm = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "User", path: "/material" }, { name: "Enquiry Form" }]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Product Detail's form">
          <SimpleForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default EnquiryForm;
