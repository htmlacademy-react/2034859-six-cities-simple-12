import { createReducer } from '@reduxjs/toolkit';
import { changeActiveCity, getOffersFromCity, changeActiveCard, changeTypeOfSorting, sortOffers, loadOffers } from './action';
import { Offer } from '../types/offer';
import { sortFunction } from '../utils/sortFunction';
import { SortData } from '../types/sortData';
import { SortInfo } from '../consts';

const defaultCity = 'Paris';
const defaultSearch = 'Popular';
const defaultTypeOfSorting = SortInfo[0];

type InitialState = {
  isDataLoading: boolean;
  currentCity: string;
  currentOffers: Offer[];
  defaultSortOffers: Offer[];
  activeCard: Offer | null;
  typeOfSorting: SortData;
  allOffers: Offer[];
};

const initialState: InitialState = {
  isDataLoading: false,
  currentCity: defaultCity,
  currentOffers: [],
  defaultSortOffers: [],
  activeCard: null,
  typeOfSorting: defaultTypeOfSorting,
  allOffers: [],
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
      state.isDataLoading = true;
    });
});

export { reducer };
