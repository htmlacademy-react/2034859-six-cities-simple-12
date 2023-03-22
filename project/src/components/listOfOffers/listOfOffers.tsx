import Card from '../card/card';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type ListOfOffersProps = {
  offers: Offer[];
};

function ListOfOffers({ offers }: ListOfOffersProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(Number);
  const handleMouseOverCard = (offer : Offer) : void => {
    setActiveCardId(offer.id);
  };
  return (
    <>
      {offers.map((item) => <Card offer={item} activeCardId={activeCardId} handleMouseOverCard={handleMouseOverCard} key={item.id} />)}
    </>
  );
}


export default ListOfOffers;
