import { CommentFormData } from '../types/comment-form-data';

export const getIsCommentValid = (commentFormData: CommentFormData) =>
  commentFormData.rating !== 0 && commentFormData.comment.length >= 50;
