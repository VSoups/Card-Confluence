import * as decksAPI from '../../utilities/decks-api';
import './FoundCard.css';

export default function FoundCard({ searchCard, setSearchCard, deckID }) {
    function closePreview() {
        setSearchCard(null);
    }

    function addCard() {
        // console.log(searchCard);
        decksAPI.addCard({ cardID: searchCard._id, deckID: deckID});
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