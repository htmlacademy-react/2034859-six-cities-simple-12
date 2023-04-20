import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { postComment } from '../../store/api-actions';
import { getIsCommentValid } from '../../utils/isCommentValid';
import { CommentFormData } from '../../types/commentFormData';
import { InputsSetting } from '../../consts';

type CommentFormProps = {
  idOfOffer: number;
};
function CommentForm({ idOfOffer }: CommentFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [commentFormData, setCommentFormData] = useState<CommentFormData>({
    rating: 0,
    comment: '',
  });
  const [isDataValid, setIsDataValid] = useState(false);
  const onChangeText = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentFormData({ ...commentFormData, comment: evt.target.value });
  };
  const onChangeRating = (evt: ChangeEvent<HTMLInputElement>) => {
    setCommentFormData({
      ...commentFormData,
      rating: Number(evt.target.value),
    });
  };

  useEffect(() => {
    if (getIsCommentValid(commentFormData)) {
      setIsDataValid(true);
    } else {
      setIsDataValid(false);
    }
  }, [commentFormData]);

  const handleSubmitForm = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(postComment({ idOfOffer, commentFormData }));
  };
  return (
    <form
      onSubmit={handleSubmitForm}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {InputsSetting.map((item) => (
          <label
            key={item.id}
            className="reviews__rating-label form__rating-label"
            title={item.title}
          >
            <input
              onChange={onChangeRating}
              className="form__rating-input visually-hidden"
              name="rating"
              value={item.value}
              id={item.id}
              type="radio"
            />
            <svg
              className="form__star-image"
              width="37"
              height="33"
              style={{
                fill: item.value <= commentFormData.rating ? '#ff9000' : '',
              }}
            >
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        ))}
      </div>
      <textarea
        onChange={onChangeText}
        value={commentFormData.comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isDataValid}
          style={{ cursor: isDataValid ? 'pointer' : 'auto' }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
