import { Offer } from '../types/offer';

export const sort = (
  offers: Offer[],
  sortingValue: keyof Offer,
  lowToHight: boolean
) => {
  const newOffers = offers.slice(0);
  if (lowToHight) {
    return newOffers.sort((a, b) => {
      if (a[sortingValue] > b[sortingValue]) {
        return 1;
      }
      if (a[sortingValue] < b[sortingValue]) {
        return -1;
      }
      return 0;
    });
  } else {
    return newOffers.sort((a, b) => {
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
