import { Link } from 'react-router-dom';

export default function HomePage({ user }) {

    return (
        <>
            <h1>Home</h1>
            { (user) ?
                <Link to="/deck">New Deck</Link>
                :
                <p>Log in or sign up to create a deck</p>
            }
            <h3>Recent Decks</h3>
            <section className="DeckGrid">decks go here</section>
        </>
    );
}