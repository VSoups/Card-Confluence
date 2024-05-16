import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as deckAPI from '../../utilities/decks-api';
import DeckPreview from '../../components/DeckPreview/DeckPreview';
import './HomePage.css';

export default function HomePage({ user, decks }) {
    const [newDeck, setNewDeck] = useState(true);
    const [deckName, setDeckName] = useState('');
    const [error, setError] = useState('');
    // deck array for index grid
    const fullList = decks.sort((d1, d2) => new Date(d2.createdAt) - new Date(d1.createdAt))
    .map((deck) => <Link to={`deck/${deck._id}`} deck={deck} key={deck._id}><DeckPreview deck={deck} key={deck._id} /></Link>);

    // hide/show new deck form
    function showNewDeck() {
        newDeck ? setNewDeck(false) : setNewDeck(true);
    }

    // create deck form submit function
    async function handleNewDeck(evt) {
        evt.preventDefault();
        const deck = {
            name: deckName,
            user: user._id,
        }
        try {
            const newDeck = await deckAPI.createNew(deck);
            if (typeof(newDeck) === 'string') setError(newDeck);
            setDeckName('');
            evt.target.name.value = '';
            // useNavigate to deck show page
        } catch (error) {
            console.log(error);
            setError('Create deck failed - Network error');
            setNewDeck(false);
        }
    }

    // new deck name input
    function handleText(evt) {
        const name = evt.target.value;
        setDeckName(name);
    }


    return (
        <>
            <h1>Home</h1>
            <hr/>
            { (user) &&
                <div className="NewDeck">
                    <button onClick={showNewDeck} style={{display:newDeck ? "block" : "none"}} className="NewDeckBtn">New Deck</button>
                    <section style={{display:newDeck ? "none" : "block"}}>
                        <button onClick={showNewDeck} className="CloseForm">X</button>
                        <form onSubmit={handleNewDeck} className="NewDeckForm">
                            <label>Deck Name:</label>
                            <input type="text" onChange={handleText} name="name" required placeholder='Lotus Field Combo...' />
                            <button type="submit" className="SubmitForm">Create</button>
                        </form>
                    </section>
                    <p>{error}</p>
                </div>
            }
            <h3>Recent Decks</h3>
            <section className="DeckGrid">{fullList <= 0 ? <p>No decks yet</p> : fullList}</section>
        </>
    );
}