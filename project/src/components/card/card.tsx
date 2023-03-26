import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';

type CardProps = {
  offer: Offer;
  handleMouseOverCard: (arg: Offer) => void;
  cssClassOfCard: string;
};


function Card({ offer, handleMouseOverCard, cssClassOfCard }: CardProps): JSX.Element {
  const handleMouseOverArticle = () => {
    handleMouseOverCard(offer);
  };
  return (
    <article onMouseMoveCapture={handleMouseOverArticle} className={`${cssClassOfCard}__card place-card`}>
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div className={`${cssClassOfCard}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>

  );
}


export default Card;
