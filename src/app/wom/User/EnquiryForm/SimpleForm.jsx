import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Icon,
  InputLabel,
  NativeSelect,
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

const SimpleForm = () => {
  const [state, setState] = useState({ date: new Date() });
  const [model, setModel] = useState("");

  const handleChange1 = (event) => {
    setModel(event.target.value);
  };

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

  const {
    productname,
    firstName,
    creditCard,
    mobile,
    password,
    confirmPassword,
    gender,
    date,
    email
  } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="productname"
              id="standard-basic"
              value={productname || ""}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="Product Name "
              validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
            />
            <br />
            <FormControl fullWidth>
              <InputLabel variant="standard" For="uncontrolled-native">
                Model
              </InputLabel>
              <NativeSelect
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={model}
                onChange={handleChange1}
              >
                <option value={0}></option>
                <option value={10}>#122</option>
                <option value={20}>#624</option>
                <option value={30}>#145</option>
                <option value={30}>vbe3456</option>
                <option value={30}>agb56</option>
                <option value={30}>tyy677</option>
              </NativeSelect>
            </FormControl>{" "}
            <br />
            <br />
            <FormControl fullWidth>
              <InputLabel variant="standard" For="uncontrolled-native">
                Engine Code
              </InputLabel>
              <NativeSelect
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={model}
                onChange={handleChange1}
              >
                <option value={0}></option>
                <option value={10}>2TR-FE</option>
                <option value={20}>2TR-FE</option>
                <option value={20}>2TR-FE</option>
                <option value={20}>2TR-FE</option>
                <option value={30}>2TR-FE</option>
              </NativeSelect>
            </FormControl>{" "}
            <br />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <InputLabel variant="standard" For="uncontrolled-native">
              Vehicle Type
            </InputLabel>
            <RadioGroup
              row
              name="gender"
              sx={{ mb: 2 }}
              value={gender || ""}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Petrol"
                label="Petrol"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Diesel"
                label="Diesel"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
            </RadioGroup>{" "}
            <br />
            <InputLabel variant="standard" For="uncontrolled-native">
              Text Area
            </InputLabel>
            <textarea
              type="text"
              name="mobile"
              rows="8"
              cols="60"
              value={mobile || ""}
              label="Mobile Nubmer"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </Grid>
        </Grid>
        <br />
        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default SimpleForm;
