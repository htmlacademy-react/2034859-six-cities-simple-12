import { User } from './user';

type City = {
  location: Location;
  name: string;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

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
  price: number;
  rating: number;
  title: string;
  type: string;
};
