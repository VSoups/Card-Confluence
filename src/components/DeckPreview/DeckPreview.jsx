import './DeckPreview.css';

export default function DeckPreview({ deck }) {
    const bgIMG = deck.cards.length ? 
    {background: `url(${deck.cards[0].card.image_uris.art_crop})`, backgroundSize: 'contain'} : 
    {background: 'url(https://cards.scryfall.io/art_crop/front/e/5/e5d07ad5-0701-4696-91fd-87451997ef23.jpg?1706202770)', backgroundSize: 'cover', backgroundPosition: 'center'};

    return (
        <div className="DeckBox" style={bgIMG}>
            <div className="DeckInfo">
                <h4>{deck.name}</h4>
                <p>User: {deck.user.name}</p>
                <p>Created: {new Date(deck.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
}