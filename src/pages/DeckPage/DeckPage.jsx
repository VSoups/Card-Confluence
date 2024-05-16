import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardSearch from '../../components/CardSearch/CardSearch';
import FoundCard from '../../components/FoundCard/FoundCard'
import CardBox from '../../components/CardBox/CardBox';
import './DeckPage.css';

export default function DeckPage({ user, decks }) {
  const [deckDetails, setDeckDetails] = useState(null);
  const [cardList, setCardList] = useState([]);
  const [searchCard, setSearchCard] = useState(null);
  const [userID, setUserID] = useState('');
  const { id } = useParams();

  if (user) {
    setUserID(user._id);
  } else {
    setUserID('');
  }

  useEffect(() => {
    async function getDeck() {
        const deck = await decks.find((d) => d._id === id);
        setDeckDetails(deck);
        setCardList(deck.cards);
      }
      getDeck();
  }, [id, decks]);
  
  const cards = cardList.map((card) => <CardBox card={card} deckID={id} deckUser={deckDetails.user} userID={userID} key={card._id} />)
  // console.log('---DECK---', deckDetails);
  // console.log('---USER---', userID);
  // console.log('---CARDS---', cardList);
  // console.log(cardList);


  return (
    <main className="DeckShow">
      {deckDetails && (
        <>
          <h1>{deckDetails.name}</h1>
          {userID === deckDetails.user && 
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
          }
          <section className="CardList">
            {cardList.length <= 0 ? 
              <p>No cards added yet</p>
              :
              cards
            }
          </section>
        </>
      )}
    </main>
  );
}