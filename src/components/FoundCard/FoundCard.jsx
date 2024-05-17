import * as decksAPI from '../../utilities/decks-api';
import './FoundCard.css';

export default function FoundCard({ searchCard, setSearchCard, setCardAdded, deckID }) {
    function closePreview() {
        setSearchCard(null);
    }

    async function addCard() {
        await decksAPI.addCard({ cardID: searchCard._id, deckID: deckID});
        setCardAdded(true);
    }

    return (
        <>
            {searchCard && 
                <>
                    <div className="PreviewPanel">
                        <img src={`${searchCard.image_uris.normal}`} alt={`${searchCard.name} card image`} className="CardImg" />
                        <button onClick={closePreview} className="ClosePreview">X</button>
                        <button onClick={addCard} className="AddCard">+</button>
                    </div>
                </>
            }
        </>
    );
}