import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Layout from '../layout/layot';
import NotFound from '../notFound/notFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import ScrollToTop from '../scrollToTop/scrollToTop';
import { Offer } from '../../types/offer';
import { Comment } from '../../types/comment';

type AppProps = {
  offers: Offer[];
  comments: Comment[];
};

function App({ offers, comments }: AppProps): JSX.Element {
  const isLogged = true;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<Layout isLogged={isLogged} />}>
          <Route index element={<Main/>} />
          <Route path={AppRoute.Room} element={<Room offers={offers} comments={comments}/>} />
          <Route path={AppRoute.Login} element={<Login />} />
        </Route>
        <Route path="*" element={< NotFound />} />
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
