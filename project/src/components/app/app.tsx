import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Layout from '../layout/layot';
import NotFound from '../notFound/notFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import ScrollToTop from '../scrollToTop/scrollToTop';

type AppProps = {
  cardsCount: number;
};

function App({ cardsCount }: AppProps): JSX.Element {
  const isLogged = true;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<Layout isLogged={isLogged} />}>
          <Route index element={<Main cardsCount={cardsCount} />} />
          <Route path={AppRoute.Room} element={<Room />} />
          <Route path={AppRoute.Login} element={<Login />} />
        </Route>
        <Route path="*" element={< NotFound />} />
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
