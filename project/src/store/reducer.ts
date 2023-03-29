import { createReducer } from '@reduxjs/toolkit';
import { changeActiveCity, getOffersFromCity, changeActiveCard } from './action';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offer';

const defaultCity = 'Paris';
const defaultOffers = offers.filter((item) => item.city.name === defaultCity);

type InitialState = {
  currentCity: string;
  currentOffers: Offer[];
  activeCard: Offer | null;
};

const initialState: InitialState = {
  currentCity: defaultCity,
  currentOffers: defaultOffers,
  activeCard: null,
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
});

export { reducer };
