import { Offer } from './types/offer';


export const sortFunction = (offers: Offer[], sortingValue: keyof Offer, lowToHight: boolean) => {
  if (lowToHight) {
    return offers.sort((a, b) => {
      if (a[sortingValue] > b[sortingValue]) {
        return 1;
      }
      if (a[sortingValue] < b[sortingValue]) {
        return -1;
      }
      return 0;
    });
  }
  else {
    return offers.sort((a, b) => {
      if (a[sortingValue] < b[sortingValue]) {
        return 1;
      }
      if (a[sortingValue] > b[sortingValue]) {
        return -1;
      }
      return 0;
    });
  }
};
