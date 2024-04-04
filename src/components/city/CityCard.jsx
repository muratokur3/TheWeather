import { styled } from "@mui/material/styles";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import { Avatar, Typography as StyleTypography } from "@mui/material";
import PropTypes from "prop-types";
import { setActiveCity } from "../../redux/slices/CitySlice";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { removeCity } from "../../redux/slices/CitySlice";
import { Background } from "../../utils/getBackground";
import { getIcon } from "../../utils/getIcons";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CityCard = ({ city, onClose }) => {
  const dispatch = useDispatch();

  const Typography = styled(StyleTypography)({
    color: "#FAFAFA",
  });

  const handleClickCity = (name) => {
    dispatch(setActiveCity(name));
    onClose();
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        borderRadius: "1rem",
        backgroundSize: "cover",
        border: "none",
        backgroundImage: `url(${Background(city?.weather[0].icon)})`,
      }}
      onClick={() => handleClickCity(city.name)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Box>
          <Typography fontSize={20}>{city?.name}</Typography>
          <Typography fontSize={12}>
            {new Date(city.dt * 1000).toLocaleTimeString("tr-TR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Box>
        <Typography>Hava {city?.weather[0].description}</Typography>
      </Box>

      <Avatar src={getIcon(city.weather[0].icon)} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Typography fontSize={30}>
          {Math.floor(Number(city?.main.temp))}°C
        </Typography>
        <RemoveIcon
          color="primary"
          fontSize="large"
          cursor="pointer"
          onClick={() => dispatch(removeCity(city?.name))}
        />
      </Box>
    </Box>
  );
};

export default CityCard;
CityCard.propTypes = {
  city: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};
