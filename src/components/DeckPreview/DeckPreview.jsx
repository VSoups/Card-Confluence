import { getUsername } from '../../utilities/users-api';
import './DeckPreview.css';

export default function DeckPreview({ deck }) {
    // add preview img
    // style={{background: `url(${Card.getSmallImg})`}}
    async function fetchName() {
        const name = await getUsername(deck.user);
    }

    return (
        <div className="DeckBox">
            <div className="DeckInfo">
                <h4>{deck.name}</h4>
                <p>Created: {new Date(deck.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
}