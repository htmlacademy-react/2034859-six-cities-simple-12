import { Offer } from '../types/offer';

const AVATAR_URL = 'https://i.pravatar.cc/128';
const IMAGES_URL = 'https://12.react.pages.academy/static/hotel/';

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.373057,
        longitude: 4.892557,
        zoom: 12,
      },
      name: 'Amsterdam',
    },
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Coffee machine', 'Kitchen'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: [
      `${IMAGES_URL}1`,
      `${IMAGES_URL}2`,
      `${IMAGES_URL}3`,
    ],
    location: {
      latitude: 52.3909553943548,
      longitude: 4.85309666406158,
      zoom: 10,
    },
    isPremium: false,
    maxAdults: 4,
    previewImage: 'img/apartment-small-04.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.373057,
        longitude: 4.892557,
        zoom: 12,
      },
      name: 'Amsterdam',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    goods: ['Heating', 'Hair dryer', 'Coffee machine', 'Kitchen'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: [
      `${IMAGES_URL}4`,
      `${IMAGES_URL}5`,
      `${IMAGES_URL}6`,
    ],
    location: {
      latitude: 52.57438359,
      longitude: 4.8530458457,
      zoom: 10,
    },
    isPremium: true,
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 40,
    rating: 2.7,
    title: 'River Hotel',
    type: 'hotel',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.373057,
        longitude: 4.892557,
        zoom: 12,
      },
      name: 'Amsterdam',
    },
    description:
      'ADuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    goods: ['Cooker', 'Hair dryer', 'Fireplace', 'Cabel TV'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Max',
    },
    id: 3,
    images: [
      `${IMAGES_URL}7`,
      `${IMAGES_URL}8`,
      `${IMAGES_URL}9`,
    ],
    location: {
      latitude: 52.39095548568,
      longitude: 4.929309634648,
      zoom: 10,
    },
    isPremium: false,
    maxAdults: 1,
    previewImage: 'img/apartment-small-03.jpg',
    price: 70,
    rating: 3.9,
    title: 'Forever Alone',
    type: 'apartment',
  },
  {
    bedrooms: 6,
    city: {
      location: {
        latitude: 52.373057,
        longitude: 4.892557,
        zoom: 12,
      },
      name: 'Amsterdam',
    },
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis',
    goods: ['Towels', 'Napkins', 'Lights', 'Coffee machine', 'Kitchen'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: 'Maria',
    },
    id: 4,
    images: [
      `${IMAGES_URL}10`,
      `${IMAGES_URL}11`,
      `${IMAGES_URL}12`,
    ],
    location: {
      latitude: 52.3574574378,
      longitude: 4.9293547457,
      zoom: 10,
    },
    isPremium: true,
    maxAdults: 8,
    previewImage: 'img/apartment-small-03.jpg',
    price: 300,
    rating: 5.0,
    title: 'Big Bang Family',
    type: 'apartment',
  },
];
