import React, { useState } from 'react';
import CardsBlock from './CardsBlock';
import FilterButton from './FilterButton';
import Header from './Header.js'

function Filters (props) {
  const [filterClan, setFilterClan] = useState(null);

  function handleFilterButtonClick(clan) {
    if (clan === filterClan) {
      setFilterClan(null);
    } else {
      setFilterClan(clan);
    }
  }

  const filteredCards = filterClan ? props.cards.filter(card => card.clan === filterClan) : props.cards;

  const scavengersImage = filterClan === 'Scavengers' ? './images/scavs4.png' : './images/scavs3.png';
  const mercsImage = filterClan === 'Mercs' ? './images/mercs4.png' : './images/mercs3.png';
  const brainiacsImage = filterClan === 'Brainiacs' ? './images/brainiacs4.png' : './images/brainiacs3.png';
  const eatersImage = filterClan === 'Eaters' ? './images/eaters4.png' : './images/eaters3.png';

  return (
    <div>
      <div className='headerdiv'>
      <Header />
      </div>
    <div className="filters">
      <div className="clans">
        <FilterButton className="filterButton" image={scavengersImage}  clicked={() => handleFilterButtonClick('Scavengers')} />
        <FilterButton className="filterButton" image={mercsImage} clicked={() => handleFilterButtonClick('Mercs')} />
        <FilterButton className="filterButton" image={brainiacsImage} clicked={() => handleFilterButtonClick('Brainiacs')} />
        <FilterButton className="filterButton" image={eatersImage} clicked={() => handleFilterButtonClick('Eaters')} />
        </div>
      
      
      
    </div>
      <div>
        <CardsBlock cards={filteredCards} />
      </div>
    </div>
  );
}
export default Filters
