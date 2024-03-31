import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import CityWeatherDetails from "./WeatherDetails/CityWeatherDetails";
import { useSelector } from "react-redux";

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const citys = useSelector((state) => state.citys);
  const maxSteps = citys?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 700, flexGrow: 1 }}>
      <MobileStepper
        sx={{
          height: "3rem",
          background: "#3333",
          borderRadius: "1rem",
          padding: "0 1rem",
          "& .MuiMobileStepper-dot": {
            backgroundColor: "gray",
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "white",
          },
        }}
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} sx={{ color: "white" }}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button sx={{ color: "white" }} size="small" onClick={handleBack}>
            Back
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {/* {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))} */}

        {citys.map((city, index) => (
          <CityWeatherDetails city={city} key={index} />
        ))}
      </SwipeableViews>
    </Box>
  );
}

export default Slider;
