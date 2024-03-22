import React from "react";
import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px"
}));

const DeliveryAddress = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const { username, doorno, street, landmark, city, pincode } = state;
  return (
    <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
      <Grid container spacing={6}>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
          <TextField
            type="text"
            name="username"
            id="standard-basic"
            value={username || ""}
            onChange={handleChange}
            errorMessages={["this field is required"]}
            label="Username "
            validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
          />

          <TextField
            type="text"
            name="doorno"
            label="Door No"
            onChange={handleChange}
            value={doorno || ""}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />

          <TextField
            type="text"
            name="street"
            label="Street"
            value={street || ""}
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
          <TextField
            sx={{ mb: 4 }}
            type="text"
            name="landmark"
            label="Landmark"
            onChange={handleChange}
            value={landmark || ""}
          />
          <TextField
            type="text"
            name="city"
            value={city || ""}
            label="City"
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <TextField
            name="pincode"
            type="number"
            label="Pincode"
            value={pincode || ""}
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
        </Grid>
      </Grid>
    </ValidatorForm>
  );
};

export default DeliveryAddress;
