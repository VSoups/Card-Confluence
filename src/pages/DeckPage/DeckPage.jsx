import { useState } from 'react';
import CardSearch from '../../components/CardSearch/CardSearch';
import FoundCard from '../../components/FoundCard/FoundCard'
import './DeckPage.css';

export default function DeckPage({ user }) {
  const [searchCard, setSearchCard] = useState(null);


  return (
    <>
      <h1>Deck Page</h1>
      <div className="SearchBox">
        <CardSearch setSearchCard={setSearchCard} />
        <FoundCard searchCard={searchCard} />
      </div>
    </>
  );
}