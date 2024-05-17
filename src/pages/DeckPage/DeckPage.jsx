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
  const [cardAdded, setCardAdded] = useState(false);
  const [userID, setUserID] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (user) {
      setUserID(user._id);
    } else {
      setUserID('');
    }
  }, [user]);

  useEffect(() => {
    setCardAdded(false);
    async function getDeck() {
        const deck = await decks.find((d) => d._id === id);
        setDeckDetails(deck);
        setCardList(deck.cards);
      }
      getDeck();
  }, [id, decks, cardAdded]);
  
  const cards = cardList.map((card) => <CardBox card={card} deckID={id} deckUser={deckDetails.user._id} userID={userID} key={card._id} />)


  return (
    <main className="DeckShow">
      {deckDetails && (
        <>
          <h1 className="ShowTitle">{deckDetails.name}</h1>\
          <h3 className="ShowUser">Made by: {deckDetails.user.name}</h3>
          {userID === deckDetails.user._id && 
            <section className="CardAdding">
              <div className="SearchBox">
                <CardSearch setSearchCard={setSearchCard} />
              </div>
              {searchCard && 
                <div className="PreviewPanel">
                  <FoundCard searchCard={searchCard} setSearchCard={setSearchCard} setCardAdded={setCardAdded} deckID={id} />
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