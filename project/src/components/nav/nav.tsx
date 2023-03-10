import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

type NavProps = {
  isLogged: boolean;
};

function Nav({ isLogged }: NavProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isLogged ?

          <>
            <li className="header__nav-item user">
              <div className="header__nav-profile">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                </span>
              </div>
            </li>
            <li className="header__nav-item">
              <Link to={AppRoute.Login} className="header__nav-link">
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
          :

          <li className="header__nav-item user">
            <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}


export default Nav;

