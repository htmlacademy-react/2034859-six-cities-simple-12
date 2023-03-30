import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { SortData } from '../types/sortData';


export const changeActiveCity = createAction('city/changeActiveCity', (currentCity: string) => ({
  payload: currentCity,
}));

export const getOffersFromCity = createAction('city/getOffersFromCity');


export const changeActiveCard = createAction('card/changeActiveCard', (activeCard: Offer | null) => ({
  payload: activeCard,
}));


export const changeTypeOfSorting = createAction('sort/changeTypeOfSorting', (type: SortData) => ({
  payload: type,
}));


export const sortOffers = createAction('sort/sortOffers', (sortData: SortData) => ({
  payload: sortData,
}));

