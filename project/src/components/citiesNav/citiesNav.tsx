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
          <a className={`locations__item-link tabs__item${currentCity === city ? ' tabs__item--active' : ''}`} onClick={() => onChangeCity(city)} href="#">
            <span>{city}</span>
          </a>
        </li>))}
    </ul>
  );
}


export default CitiesNav;
