import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../consts';
import { Offer } from '../types/offer';
import { SortData } from '../types/sortData';
import { UserData } from '../types/userData';


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

export const loadOffers = createAction<Offer[]>('api/loadOffer');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserData = createAction('user/setUserData', (type: UserData) => ({
  payload: type,
}));

export const redirectToRoute = createAction('data/redirectToRoute', (redirect: AppRoute) => ({
  payload: redirect,
}));
