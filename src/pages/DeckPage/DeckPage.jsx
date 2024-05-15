import { useEffect, useState } from 'react';
import CardSearch from '../../components/CardSearch/CardSearch';
import FoundCard from '../../components/FoundCard/FoundCard'
import './DeckPage.css';
import { useParams } from 'react-router-dom';

export default function DeckPage({ user, decks }) {
  const [deckDetails, setDeckDetails] = useState(null);
  const [searchCard, setSearchCard] = useState(null);
  const { id } = useParams();

  // useEffect(() => {
  //   async function getDeck() {
  //     const deck = await decks.find((d) => d._id === id);
  //     console.log(deck);
  //     setDeckDetails(deck);
  //   }
  //   getDeck();
  // }, []);


  return (
    <>
      <h1>Deck view</h1>
      <section className="CardAdding">
        <div className="SearchBox">
          <CardSearch setSearchCard={setSearchCard} />
        </div>
        {searchCard && 
          <div className="PreviewPanel">
            <FoundCard searchCard={searchCard} setSearchCard={setSearchCard} deckID={id} />
          </div>
        }  
      </section>
      <section className="CardList">
        <p>Cards go here</p>
      </section>
    </>
  );
}