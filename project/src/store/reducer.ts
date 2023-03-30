import { createReducer } from '@reduxjs/toolkit';
import { changeActiveCity, getOffersFromCity, changeActiveCard, changeTypeOfSorting, sortOffers } from './action';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offer';
import { sortFunction } from '../utils';
import { SortData } from '../types/sortData';
import { SortInfo } from '../consts';

const defaultCity = 'Paris';
const defaultTypeOfSorting = SortInfo[0];
const defaultOffers = offers.filter((item) => item.city.name === defaultCity);

type InitialState = {
  currentCity: string;
  currentOffers: Offer[];
  activeCard: Offer | null;
  typeOfSorting: SortData;
};

const initialState: InitialState = {
  currentCity: defaultCity,
  currentOffers: defaultOffers,
  activeCard: null,
  typeOfSorting: defaultTypeOfSorting,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeActiveCity, (state, action) => {
    state.currentCity = action.payload;
  });
  builder.addCase(getOffersFromCity, (state) => {
    state.currentOffers = offers.filter((item) => item.city.name === state.currentCity);
  });
  builder.addCase(changeActiveCard, (state, action) => {
    state.activeCard = action.payload;
  });
  builder.addCase(changeTypeOfSorting, (state, action) => {
    state.typeOfSorting = action.payload;
  });
  builder.addCase(sortOffers, (state, action) => {
    const sortData = action.payload;
    state.currentOffers = sortFunction(state.currentOffers, sortData.sortingValue, sortData.lowToHight);
  });
});

export { reducer };
