import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { setActiveCity } from "../../redux/slices/CitySlice";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { removeCity } from "../../redux/slices/CitySlice";
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

const CityCard = ({ city }) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: " rgba(80, 81, 84, 0.669)",
        borderRadius: "1rem",
      }}
      onClick={() => dispatch(setActiveCity(city?.name))}
    >
      <CardHeader
        action={
          <Typography fontSize={30}>
            {Math.floor(Number(city?.main.temp))}°
          </Typography>
        }
        title={
          <Box>
            <Typography fontSize={25}>{city?.name}</Typography>
            <Typography fontSize={15}>
              min:{Math.floor(Number(city?.main.temp_min))} max:
              {Math.floor(Number(city?.main.temp_max))}
            </Typography>
          </Box>
        }
      />

      <CardActions disableSpacing>
        <Typography>
          {city?.weather[0].description}
        </Typography>
        <ExpandMore>
          <Button onClick={() => dispatch(removeCity(city?.name))}>
            <DeleteForeverIcon sx={{ color: "orange" }} />
          </Button>
        </ExpandMore>
      </CardActions>
    </Card>
  );
};

export default CityCard;
CityCard.propTypes = {
  city: PropTypes.object.isRequired,
};
