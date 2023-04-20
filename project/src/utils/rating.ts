import { Comment } from '../types/comment';
import { Offer } from '../types/offer';

export const getRating = (comment: Comment | Offer) => {
  const rating = comment.rating * 20;
  return `${rating}%`;
};
