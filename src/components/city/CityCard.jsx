
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

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

  
  return (
    <Card sx={{ width: "100%", backgroundColor: "rgba(27, 29, 42, 0.669)" }}>
      <CardHeader
        action={
            <Typography fontSize={30}>{Math.floor(Number(city?.main.temp))}°</Typography>
        }
        title={city?.name}
      />

      <CardActions disableSpacing>
        <Typography fontSize={20}>{city?.weather[0].description}</Typography>

        <ExpandMore
        >
          <Typography>

          min:{Math.floor(Number(city?.main.temp_min))} max:{ Math.floor(Number(city?.main.temp_max))}
          </Typography>
        </ExpandMore>
      </CardActions>
    </Card>
  );
};

export default CityCard;
CityCard.propTypes = {
  city: PropTypes.object.isRequired,
};
