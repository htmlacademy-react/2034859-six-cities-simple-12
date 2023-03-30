import { SortData } from './types/sortData';

export enum AppRoute {
  Main = '/',
  Room = 'offer/:id',
  Login = '/login',
}

export const SortInfo : SortData[] = [
  { name: 'Popular', sortingValue: 'rating', lowToHight: true },
  { name: 'Price: low to hight', sortingValue: 'price', lowToHight: true},
  { name: 'Price: high to low', sortingValue: 'price', lowToHight: false },
  { name: 'Top rated first', sortingValue: 'rating', lowToHight: true },
];

export enum StylesOfPage {
  Default = 'page',
  Main = 'page page--gray page--main',
  Login = 'page page--gray page--login',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];
