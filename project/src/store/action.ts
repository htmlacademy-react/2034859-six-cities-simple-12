import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../consts';
import { Offer } from '../types/offer';
import { SortData } from '../types/sort-data';
import { UserData } from '../types/user-data';
import { Comment } from '../types/comment';
import { PartialFormData } from '../types/form-data';

export const changeActiveCity = createAction(
  'city/changeActiveCity',
  (currentCity: string) => ({
    payload: currentCity,
  })
);

export const getOffersFromCity = createAction('city/getOffersFromCity');

export const changeActiveCard = createAction(
  'card/changeActiveCard',
  (activeCard: Offer | null) => ({
    payload: activeCard,
  })
);

export const changeTypeOfSorting = createAction(
  'sort/changeTypeOfSorting',
  (sortData: SortData) => ({
    payload: sortData,
  })
);

export const sortOffers = createAction(
  'sort/sortOffers',
  (sortData: SortData) => ({
    payload: sortData,
  })
);

export const loadOffers = createAction<Offer[]>('api/loadOffers');

export const loadOffer = createAction<Offer>('api/loadOffer');

export const clearOffer = createAction('api/clearOffer');

export const setTrueLoadOfferStatus = createAction(
  'api/setTrueLoadOfferStatus'
);


export const changeFormData = createAction(
  'form/changeFormData',
  (formData: PartialFormData) => ({
    payload: formData,
  })
);

export const loadNearByOffer = createAction<Offer[]>('api/loadNearByOffer');

export const loadComments = createAction<Comment[]>('api/loadComments');

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const setUserData = createAction(
  'user/setUserData',
  (user: UserData) => ({
    payload: user,
  })
);

export const redirectToRoute = createAction(
  'data/redirectToRoute',
  (redirect: AppRoute) => ({
    payload: redirect,
  })
);

export const setServerError = createAction('api/setServerError',
  (isError: boolean) => ({
    payload: isError,
  }));
