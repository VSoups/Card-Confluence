import './FoundCard.css';

export default function FoundCard({ searchCard, setSearchCard }) {
    function closePreview() {
        setSearchCard(null);
    }

    return (
        <>
            {searchCard && 
                <>
                    <div className="PreviewPanel">
                        <img src={`${searchCard.image_uris.normal}`} alt={`${searchCard.name} card image`} className="CardImg" />
                        <button onClick={closePreview}>X</button>
                    </div>
                </>
            }
        </>
    );
}