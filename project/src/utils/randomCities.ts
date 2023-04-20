import { CITIES } from '../consts';
export const getRandomCities = () => {
  const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
  return randomCity;
};
