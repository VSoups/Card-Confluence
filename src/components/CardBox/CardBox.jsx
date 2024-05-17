import * as decksAPI from '../../utilities/decks-api';
import './CardBox.css'

export default function CardBox({ card, deckID, deckUser, userID }) {
    function addCard() {
        // console.log('CardBox ID: ', card.card._id);
        decksAPI.addCard({ cardID: card.card._id, deckID: deckID });
    }
    function minusCard() {
        decksAPI.minusCard({ cardID: card.card._id, deckID: deckID });
    }

    return (
        <div className="CardBox">
            <img src={`${card.card.image_uris.small}`} alt={`${card.card.name}`} />
            <p>x{card.qty}</p>
            {deckUser === userID &&
                <>
                    <button onClick={addCard}>+</button>
                    <button onClick={minusCard}>-</button>
                </>
            }
        </div>
    );
}