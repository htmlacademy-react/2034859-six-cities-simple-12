
import { useAppSelector } from '../../hooks';
import ListOfOffers from '../listOfOffers/listOfOffers';

function OffersMainSection(): JSX.Element {

  const currentCity = useAppSelector((state) => state.currentCity);
  const currentOffers = useAppSelector((state) => state.currentOffers);

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li
            className="places__option places__option--active"
            tabIndex={0}
          >
            Popular
          </li>
          <li className="places__option" tabIndex={0}>
            Price: low to high
          </li>
          <li className="places__option" tabIndex={0}>
            Price: high to low
          </li>
          <li className="places__option" tabIndex={0}>
            Top rated first
          </li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        <ListOfOffers offers={currentOffers} cssClassOfCard='cities'/>
      </div>
    </>
  );
}


export default OffersMainSection;
