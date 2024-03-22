import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import React from "react";
import DeliveryAddress from "./DeliveryAddress";
import SelectPayment from "./SelectPayment";
import OrderSuccess from "./OrderSuccess";
import EnquiryForm from "../EnquiryForm/EnquiryForm";
import { Link } from "react-router-dom";

function getSteps() {
  return ["Delivery Address", "Payment", "Order Success"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <DeliveryAddress />;

    case 1:
      return <SelectPayment />;

    case 2:
      return <OrderSuccess />;

    default:
      return <EnquiryForm />;
  }
}

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => setActiveStep(0);

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box mt={4}>
        {activeStep === steps.length ? (
          <Box>
            <Typography>All steps completed</Typography>

            <Button sx={{ mt: 2 }} variant="contained" color="secondary" onClick={handleReset}>
              Reset
            </Button>
          </Box>
        ) : (
          <Box>
            <Typography>{getStepContent(activeStep)}</Typography>

            <Box pt={2}>
              <Button
                variant="contained"
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>

              <Button sx={{ ml: 2 }} variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                {/* <Link
                  to="/dashboard/enquiry"
                  style={{ color: "whitesmoke", textDecoration: "none" }}
                >
                  Finish
                </Link> */}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
