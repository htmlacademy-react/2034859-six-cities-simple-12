import { CommentFormData } from '../types/commentFormData';

export const getIsCommentValid = (commentFormData: CommentFormData) =>
  commentFormData.rating !== 0 && commentFormData.comment.length >= 50;
