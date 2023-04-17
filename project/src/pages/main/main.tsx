import Map from '../../components/map/map';
import OffersMainSection from '../../components/offersMainSection/offersMainSection';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeActiveCity, getOffersFromCity } from '../../store/action';
import { CITIES } from '../../consts';
import CitiesNav from '../../components/citiesNav/citiesNav';
import { memo } from 'react';
import EmptyOffersSection from '../../components/emptyOffersSection/emptyOffersSection';


function Main(): JSX.Element {


  const currentCity = useAppSelector((state) => state.currentCity);
  const currentOffers = useAppSelector((state) => state.currentOffers);

  const dispatch = useAppDispatch();


  const onChangeCity = (city: string) => {
    dispatch(changeActiveCity(city));
    dispatch(getOffersFromCity());
  };
  const isOffersEmpty = currentOffers.length === 0;
  return (
    <main className={`page__main page__main--index ${isOffersEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesNav cities={CITIES} currentCity={currentCity} onChangeCity={onChangeCity} />
        </section>
      </div>
      <div className="cities">
        {
          isOffersEmpty ?
            <EmptyOffersSection currentCity={currentCity} /> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <OffersMainSection />
              </section>
              <div className="cities__right-section">
                <Map city={currentOffers[0].city}
                  offers={currentOffers}
                  cssClassOfMap={'cities__map'}
                />
              </div>
            </div>
        }
      </div>
    </main>
  );
}

export default memo(Main);
