import Card from '../card/card';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import { Location } from '../../types/location';

type ListOfOffersProps = {
  offers: Offer[];
  handleOfferHover:(arg: Location) => void;
};

function ListOfOffers({ offers, handleOfferHover }: ListOfOffersProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(Number);
  const handleMouseOverCard = (offer : Offer) : void => {
    setActiveCardId(offer.id);
    handleOfferHover(offer.location);
  };
  return (
    <>
      {offers.map((item) => <Card offer={item} activeCardId={activeCardId} handleMouseOverCard={handleMouseOverCard} key={item.id} />)}
    </>
  );
}


export default ListOfOffers;
