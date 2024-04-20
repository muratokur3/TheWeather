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
import { useMediaQuery } from "@mui/material";
import CitysListModal from "../modals/CitysListModal";
import { updateCityData } from "../redux/actions/Cities";
import { useDispatch } from "react-redux";

function Slider() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const cities = useSelector((state) => state.weatherData.cities);

  const maxSteps = cities?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    dispatch(updateCityData(cities[activeStep+1].name, cities[activeStep+1].dt));
  };
  
  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
    dispatch(updateCityData(cities[activeStep-1].name, cities[activeStep-1].dt));
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const isPhone = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1234px)");

  const activeCity = useSelector((state) => state.weatherData.activeCity);
  const activeStepIndex = cities.findIndex((city) => city.name === activeCity);

  React.useEffect(() => {
    // Eğer aktif şehir değişirse, aktif adımı güncelleyin
    setActiveStep(activeStepIndex >= 0 ? activeStepIndex : 0);
  }, [activeCity, activeStepIndex]);

  // React.useEffect(() => {
  //   dispatch(updateCityData(cities[activeStep].name))
  // }, [activeStep]);


//   React.useEffect(() => {
//   // const twoHoursInSeconds = 3 * 60;
//   // const nowInSeconds = Math.floor(Date.now() / 1000); // milisaniyeyi saniyeye çevir
//   // && nowInSeconds - cities[activeStep].dt > twoHoursInSeconds
//   if (activeCity !== cities[activeStep].name){
//     dispatch(updateCityData(cities[activeStep].name));
//   }
// }, [activeStep]);

  return (
    <Box sx={{ width: "100%", maxWidth: 700, flexGrow: 1 }}>
      <MobileStepper
        sx={{
          height: "3rem",
          background:  "#13131A",
          position: isPhone || isTablet ? "fixed" : "static",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 1,
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
          isPhone || isTablet ? (
            <CitysListModal />
          ) : (
            <Button size="small" onClick={handleNext} sx={{ color: "white" }}>
              
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          )
        }
        backButton={ isPhone || isTablet ?".":
        (  <Button sx={{ color: "white" }} size="small" onClick={handleBack}>
            
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>)
        }
      />
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {cities.map((city, index) => (
          <CityWeatherDetails city={city} key={index} />
        ))}
      </SwipeableViews>
    </Box>
  );
}

export default Slider;
