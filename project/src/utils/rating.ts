import { Comment } from '../types/comment';
import { Offer } from '../types/offer';

export const getRating = (comment: Comment | Offer, isRound?: boolean) => {
  let rating = comment.rating * 20;
  if (isRound) {
    rating = Math.round(rating / 20) * 20;
  }
  return `${rating}%`;
};
