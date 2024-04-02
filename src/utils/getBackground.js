import clear_day from "../assets/Background/clear_day.svg";
import clear_night from "../assets/Background/clear_night.svg";
import fewclouds_day from "../assets/Background/fewclouds_day.svg";
import fewclouds_night from "../assets/Background/fewclouds_night.svg";
import cloudy_day from "../assets/Background/cloudy_day.svg";
import cloudy_night from "../assets/Background/cloudy_night.svg";
import rain_day from "../assets/Background/rain_day.svg";
import rain_night from "../assets/Background/rain_night.svg";
import storm_day from "../assets/Background/storm_day.svg";
import storm_night from "../assets/Background/storm_night.svg";


export const Background=(icon)=>{
    const backgrounds = {
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
    return backgrounds[icon];

}