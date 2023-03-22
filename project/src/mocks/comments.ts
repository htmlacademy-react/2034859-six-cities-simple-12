import { Comment } from '../types/comment';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const comments: Comment[] = [
  {
    comment: 'But I must explain to you how all this mistaken.',
    date: 'Mon Apr 10 2019 09:56:10 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: 'Max',
    },
  },
  {
    comment:
      'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    date: 'Sun Mar 05 2020 09:56:10 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: 'Oliver',
    },
  },
  {
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Fri Aug 23 2020 09:56:10 GMT+0300 (Москва, стандартное время)',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Anna',
    },
  },
  {
    comment:
      'Nor again is there anyone who loves or pursues or desires to obtain pain of itself.',
    date: 'Thu Oct 28 2021 09:56:10 GMT+0300 (Москва, стандартное время)',
    id: 4,
    rating: 3,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: 'Leo',
    },
  },
];
