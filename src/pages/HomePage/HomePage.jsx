import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as deckAPI from '../../utilities/decks-api';
import './HomePage.css';

export default function HomePage({ user }) {
    const [newDeck, setNewDeck] = useState(true);
    const [deckName, setDeckName] = useState('');
    const [error, setError] = useState('');

    function showNewDeck() {
        newDeck ? setNewDeck(false) : setNewDeck(true);
    }

    async function handleNewDeck(evt) {
        evt.preventDefault();
        const deck = {
            name: deckName,
            user: user._id,
        }
        try {
            const newDeck = await deckAPI.createNewDeck(deck);
            if (typeof(newDeck) === 'string') setError(newDeck);
            setDeckName('');
            evt.target.name.value = '';
        } catch (error) {
            console.log(error);
            setError('Create deck failed');
            setNewDeck(false);
        }
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
                    <section style={{display:newDeck ? "none" : "block"}}>
                        <button onClick={showNewDeck} className="CloseForm">X</button>
                        <form onSubmit={handleNewDeck} className="NewDeckForm">
                            <label>Deck Name:</label>
                            <input type="text" onChange={handleText} name="name" placeholder='Lotus Field Combo...' />
                            <button type="submit" className="SubmitForm">Create</button>
                        </form>
                    </section>
                    <p>{error}</p>
                </div>
            }
            <h3>Recent Decks</h3>
            <section className="DeckGrid">decks go here</section>
        </>
    );
}