import Card from '../card/card';
import { Offer } from '../../types/offer';

type ListOfOffersProps = {
  offers: Offer[];
  cssClassOfCard: string;
};

function ListOfOffers({
  offers,
  cssClassOfCard,
}: ListOfOffersProps): JSX.Element {
  return (
    <>
      {offers.map((item) => (
        <Card offer={item} cssClassOfCard={cssClassOfCard} key={item.id} />
      ))}
    </>
  );
}

export default ListOfOffers;
