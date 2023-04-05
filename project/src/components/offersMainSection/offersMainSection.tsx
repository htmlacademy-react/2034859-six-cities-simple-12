
import { useAppSelector } from '../../hooks';
import ListOfOffers from '../listOfOffers/listOfOffers';
import SortingForm from '../sortingForm/sortingForm';

function OffersMainSection(): JSX.Element {

  const currentCity = useAppSelector((state) => state.currentCity);
  const currentOffers = useAppSelector((state) => state.currentOffers);

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
      <SortingForm />
      <div className="cities__places-list places__list tabs__content">
        <ListOfOffers offers={currentOffers} cssClassOfCard='cities' />
      </div>
    </>
  );
}


export default OffersMainSection;
