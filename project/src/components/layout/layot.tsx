import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/header';
import { AppRoute, StylesOfPage } from '../../consts';

type LayoutProps = {
  isLogged: boolean;
};

function Layout({ isLogged }: LayoutProps): JSX.Element {
  const { pathname } = useLocation();

  const pageStyle = (path: string) => {
    switch (path) {
      case AppRoute.Main:
        return StylesOfPage.Main;
      case AppRoute.Login:
        return StylesOfPage.Login;
      default:
        return StylesOfPage.Default;
    }
  };

  return (

    <div className={pageStyle(pathname)}>
      <Header isNavNeed={pathname !== AppRoute.Login} isLogged={isLogged} />
      <Outlet />
    </div>
  );
}


export default Layout;
