import { useState } from 'react';
import * as deckAPI from '../../utilities/decks-api';
import './HomePage.css';

export default function HomePage({ user }) {
    const [newDeck, setNewDeck] = useState(true);
    const [deckName, setDeckName] = useState('');

    function showNewDeck() {
        newDeck ? setNewDeck(false) : setNewDeck(true);
    }

    async function handleNewDeck(evt) {
        const deck = {
            name: deckName,
            user: user._id,
        }
        const newDeck = await deckAPI.createNewDeck(deck);
    }

    function handleText(evt) {
        const name = evt.target.value;
        setDeckName(name);
    }


    return (
        <>
            <h1>Home</h1>
            { (user) &&
                <div className="NewDeck">
                    <button onClick={showNewDeck} style={{display:newDeck ? "block" : "none"}}>New Deck</button>
                    <form onSubmit={handleNewDeck} style={{display:newDeck ? "none" : "grid"}} className="NewDeckForm">
                        <button onClick={showNewDeck} className="CloseForm">X</button>
                        <label>Deck Name:</label>
                        <input type="text" onChange={handleText} name="name" />
                        <button type="submit" className="SubmitForm">Create</button>
                    </form>
                </div>
            }
            <h3>Recent Decks</h3>
            <section className="DeckGrid">decks go here</section>
        </>
    );
}