import { CommentFormData } from '../types/comment-form-data';

export const getIsCommentValid = (commentFormData: CommentFormData) => {
  const commentLength = commentFormData.comment.length;
  return commentFormData.rating !== 0 && commentLength >= 50 && commentLength <= 300;
};
