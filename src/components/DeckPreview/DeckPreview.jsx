import { Link } from 'react-router-dom';
import * as decksAPI from '../../utilities/decks-api';
import './DeckPreview.css';

export default function DeckPreview({ deck, user }) {
    const bgIMG = deck.cards.length ? 
    {background: `url(${deck.cards[0].card.image_uris.art_crop})`, backgroundSize: 'cover', backgroundPosition: 'center'} : 
    {background: 'url(https://cards.scryfall.io/art_crop/front/e/5/e5d07ad5-0701-4696-91fd-87451997ef23.jpg?1706202770)', backgroundSize: 'cover', backgroundPosition: 'center'};

    async function deleteDeck(evt) {
        if (!evt.target) return;
        await decksAPI.deleteDeck(deck, user);
    }

    return (
        <div>
            <Link to={`deck/${deck._id}`} deck={deck} key={deck._id}>
                <div className="DeckBox" style={bgIMG}>
                    <div className="DeckInfo">
                    <h4>{deck.name}</h4>
                        <p>User: {deck.user.name}</p>
                        <p>Created: {new Date(deck.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </Link>
            {user && user._id === deck.user._id && <button onClick={deleteDeck} className="DeleteDeck">X</button>}
        </div>
    );
}