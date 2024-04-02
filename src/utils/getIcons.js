import clear_day from "../assets/Icons/clear_day.svg";
import clear_night from "../assets/Icons/clear_night.svg";
import fewclouds_day from "../assets/Icons/fewclouds_day.svg";
import fewclouds_night from "../assets/Icons/fewclouds_night.svg";
import cloudy_day from "../assets/Icons/cloudy_day.svg";
import cloudy_night from "../assets/Icons/cloudy_night.svg";
import rain_day from "../assets/Icons/rain_day.svg";
import rain_night from "../assets/Icons/rain_night.svg";
import storm_day from "../assets/Icons/storm_day.svg";
import storm_night from "../assets/Icons/storm_night.svg";


export const getIcon=(icon)=>{
    const Icons = {
        //gündüz
        "01d": clear_day,
        "02d": fewclouds_day,
        "03d": cloudy_day,
        "04d": cloudy_day,
        "10d": rain_day,
        "11d": storm_day,
        //gece
        "01n": clear_night,
        "02n": fewclouds_night,
        "03n": cloudy_night,
        "04n": cloudy_night,
        "10n": rain_night,
        "11n": storm_night,
      };
    return Icons[icon];

}