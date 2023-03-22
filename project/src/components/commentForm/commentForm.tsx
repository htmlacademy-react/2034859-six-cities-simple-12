// type CommentFormProps = {
// };

import { ChangeEvent, useState } from 'react';


function CommentForm(): JSX.Element {
  const [commentFormData, setCommentFormData] = useState({ rating: 0, text: '' });
  const onChangeText = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentFormData({ ...commentFormData, text: evt.target.value });
  };
  const onChangeRating = (evt: ChangeEvent<HTMLInputElement>) => {
    setCommentFormData({ ...commentFormData, rating: Number(evt.target.value) });
  };
  const inputsSetting = [
    {
      value: 5,
      id: '5-stars',
      title: 'perfect',
    },
    {
      value: 4,
      id: '4-stars',
      title: 'good',
    },
    {
      value: 3,
      id: '3-stars',
      title: 'not bad',
    },
    {
      value: 2,
      id: '2-stars',
      title: 'badly',
    },
    {
      value: 1,
      id: '1-star',
      title: 'terribly',
    },
  ];
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {inputsSetting.map((item) => (
          <>
            <input onChange={onChangeRating} className="form__rating-input visually-hidden" name="rating" value={item.value} id={item.id} type="radio" />
            <label htmlFor={item.id} className="reviews__rating-label form__rating-label" title={item.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea onChange={onChangeText} value={commentFormData.text} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>

  );
}

export default CommentForm;
