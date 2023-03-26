import Card from '../card/card';
import { Offer } from '../../types/offer';
import { useEffect, useState } from 'react';
import { Location } from '../../types/location';

type ListOfOffersProps = {
  offers: Offer[];
  handleOfferHover: (arg: Location) => void;
  cssClassOfCard: string;
};

function ListOfOffers({ offers, handleOfferHover, cssClassOfCard }: ListOfOffersProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const handleMouseOverCard = (offer: Offer): void => {
    setActiveCard(offer);
  };
  useEffect(() => {
    if (activeCard) {
      handleOfferHover(activeCard.location);
    }
  }, [activeCard]);
  return (
    <>
      {offers.map((item) => <Card offer={item} handleMouseOverCard={handleMouseOverCard} cssClassOfCard={cssClassOfCard} key={item.id} />)}
    </>
  );
}


export default ListOfOffers;
