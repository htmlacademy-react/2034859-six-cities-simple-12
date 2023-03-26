import { User } from './user';
import { City } from './city';
import { Location } from './location';

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: User;
  id: number;
  images: string[];
  isPremium: boolean;
  maxAdults: number;
  previewImage: string;
  location: Location;
  price: number;
  rating: number;
  title: string;
  type: string;
};
