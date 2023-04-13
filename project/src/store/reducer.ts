import { createReducer } from '@reduxjs/toolkit';
import { changeActiveCity, getOffersFromCity, changeActiveCard, changeTypeOfSorting, sortOffers, loadOffers, requireAuthorization, setUserData, loadOffer, clearOffer, setTrueLoadOfferStatus, loadNearByOffer } from './action';
import { Offer } from '../types/offer';
import { sortFunction } from '../utils/sortFunction';
import { SortData } from '../types/sortData';
import { AuthorizationStatus, SortInfo } from '../consts';
import { UserData } from '../types/userData';

const defaultCity = 'Paris';
const defaultSearch = 'Popular';
const defaultTypeOfSorting = SortInfo[0];

type InitialState = {
  isOffersLoad: boolean;
  isOfferLoad: boolean;
  currentCity: string;
  currentOffers: Offer[];
  defaultSortOffers: Offer[];
  activeCard: Offer | null;
  typeOfSorting: SortData;
  allOffers: Offer[];
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  activeOffer: Offer | null;
  nearByOffer: Offer[];
};

const initialState: InitialState = {
  isOffersLoad: false,
  isOfferLoad: false,
  currentCity: defaultCity,
  currentOffers: [],
  defaultSortOffers: [],
  activeCard: null,
  typeOfSorting: defaultTypeOfSorting,
  allOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  activeOffer: null,
  nearByOffer:  [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeActiveCity, (state, action) => {
    state.currentCity = action.payload;
  })
    .addCase(getOffersFromCity, (state) => {
      const offersFromCity = state.allOffers.filter((item) => item.city.name === state.currentCity);
      state.currentOffers = offersFromCity;
      state.defaultSortOffers = offersFromCity;
    })
    .addCase(changeActiveCard, (state, action) => {
      state.activeCard = action.payload;
    })
    .addCase(changeTypeOfSorting, (state, action) => {
      state.typeOfSorting = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      const sortData = action.payload;
      if (sortData.name === defaultSearch) {
        state.currentOffers = state.defaultSortOffers;
      } else {
        state.currentOffers = sortFunction(state.currentOffers, sortData.sortingValue, sortData.lowToHight);
      }
    })
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
      const initialOffers = state.allOffers.filter((item) => item.city.name === state.currentCity);
      state.defaultSortOffers = initialOffers;
      state.currentOffers = initialOffers;
      state.isOffersLoad = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.activeOffer = action.payload;
      state.isOfferLoad = true;
    })
    .addCase(setTrueLoadOfferStatus, (state) => {
      state.isOfferLoad = true;
    })
    .addCase(loadNearByOffer, (state, action) => {
      state.nearByOffer = action.payload;
    })
    .addCase(clearOffer, (state) => {
      state.activeOffer = null;
      state.isOfferLoad = false;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export { reducer };
