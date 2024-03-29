import Nav from '../nav/nav';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

type HeaderProps = {
  isNavNeed: boolean;
  isLogged: boolean;
};

function Header({ isNavNeed, isLogged }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to={AppRoute.Main}
              className="header__logo-link header__logo-link--active"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          {isNavNeed && <Nav isLogged={isLogged} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
