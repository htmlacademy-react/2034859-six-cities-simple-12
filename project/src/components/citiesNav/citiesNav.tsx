type CitiesNavProps = {
  cities: string[];
  currentCity: string;
  onChangeCity: (arg: string) => void;
};

function CitiesNav({ cities, currentCity, onChangeCity }: CitiesNavProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city}>
          <div style={{cursor: 'pointer'}} className={`locations__item-link tabs__item${currentCity === city ? ' tabs__item--active' : ''}`} onClick={() => onChangeCity(city)}>
            <span>{city}</span>
          </div>
        </li>))}
    </ul>
  );
}


export default CitiesNav;
