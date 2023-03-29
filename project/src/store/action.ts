import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';


export const changeActiveCity = createAction('city/changeActiveCity', (currentCity: string) => ({
  payload: currentCity,
}));

export const getOffersFromCity = createAction('city/getOffersFromCity');


export const changeActiveCard = createAction('card/changeActiveCard', (activeCard: Offer | null) => ({
  payload: activeCard,
}));
