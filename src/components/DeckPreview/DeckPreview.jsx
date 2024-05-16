import './DeckPreview.css';

export default function DeckPreview({ deck }) {
    const bgIMG = deck.cards.length ? {background: `url(${deck.cards[0].card.image_uris.art_crop})`, backgroundSize: 'contain'} : 
    {background: "linea-gradient(45deg, #0756ec, #ffffff)"};

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