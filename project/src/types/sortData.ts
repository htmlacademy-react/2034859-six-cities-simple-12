import { Offer } from './offer';

export type SortData = {
  name: string;
  sortingValue: keyof Offer;
  lowToHight: boolean;
};
