// == Imports
import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiDayShowers,
  WiDayRain,
  WiDayThunderstorm,
  WiSnow,
  WiFog,
  WiNightClear,
  WiNightCloudy,
  WiNightShowers,
  WiNightRain,
  WiNightThunderstorm
} from "react-icons/wi";

/**
 * TOGGLE SEARCH
 * change the state of the search window
 * @param {boolean} init 
 * @param {boolean} clicked 
 * @param {function} handleSearchInit 
 * @param {function} handleSearchToggle 
 */
export const toggleSearch = (init, clicked, handleSearchInit, handleSearchToggle) => {
  if (init === false) {
    handleSearchInit();
  } else if (!!clicked || !clicked) {
    handleSearchToggle();
  }
};

/**
 * BUILD LOCATION URL
 * create a slugifyed URL from a location name
 * @param {String} location 
 */
export const buildLocationURL = (location) => `/weather/${location.replace(/ /g, '+').replace(/,/g, '')}`

/**
 * ICON PARSER
 * use custom icons for weather instead of those from the weather API
 * @param {String} ref - icon ref in OpenWeather API 
 * @returns icon component
 */
export const iconPaser = (ref) => {
  if (ref === '01d') {
    return <WiDaySunny />
  } else if (ref === '02d') {
    return <WiDayCloudy />
  } else if (ref === '03d' || ref === '03n') {
    return <WiCloud />
  } else if (ref === '04d' || ref === '04n') {
    return <WiCloudy />
  } else if (ref === '09d') {
    return <WiDayShowers />
  } else if (ref === '10d') {
    return <WiDayRain />
  } else if (ref === '11d') {
    return <WiDayThunderstorm />
  } else if (ref === '13d' || ref === '13n') {
    return <WiSnow />
  } else if (ref === '50d' || ref === '50n') {
    return <WiFog />
  } else if (ref === '01n') {
    return <WiNightClear />
  } else if (ref === '02n') {
    return <WiNightCloudy />
  } else if (ref === '09n') {
    return <WiNightShowers />
  } else if (ref === '10n') {
    return <WiNightRain />
  } else if (ref === '11n') {
    return <WiNightThunderstorm />
  }
};

/**
 * DATE CALCULATOR
 * @param {integer} index 
 * @returns a date
 */
export const dateCalculator = (index) => {
  const startDate = Date.now();
  const currentDate = new Date(startDate);
  currentDate.setDate(currentDate.getDate() + index);

  return currentDate;
};