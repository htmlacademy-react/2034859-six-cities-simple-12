import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Layout from '../layout/layot';
import NotFound from '../notFound/notFound';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import ScrollToTop from '../scrollToTop/scrollToTop';
import { Offer } from '../../types/offer';
import { Comment } from '../../types/comment';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import HistoryRouter from '../historyRoute/historyRoute';
import browserHistory from '../../browser-history';

type AppProps = {
  offers: Offer[];
  comments: Comment[];
};


function App({ offers, comments }: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const isDataLoad = useAppSelector((state) => state.isDataLoad);
  const [isLogged, setIsLogged] = useState((false));

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [authorizationStatus]);

  if (authorizationStatus === AuthorizationStatus.Unknown || !isDataLoad) {
    return (
      <div className="load-area">
        <div className="load-area__spinner">
        </div>
      </div>
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<Layout isLogged={isLogged} />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Room} element={<Room offers={offers} comments={comments} />} />
          <Route path={AppRoute.Login} element={<Login />} />
        </Route>
        <Route path="*" element={< NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
