import Header from '../header/header';

function NotFound(): JSX.Element {
  return (
    <>
      <Header isNavNeed={false} isLogged={false} />
      <p>Упс, здесь ничего нет!</p>
    </>
  );
}

export default NotFound;
