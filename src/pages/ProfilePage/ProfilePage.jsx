import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeckPreview from "../../components/DeckPreview/DeckPreview";
import './ProfilePage.css';

export default function Profile({ user, decks }) {
  const [userDecks, setUserDecks] = useState([]);
  const navigate = useNavigate();
  if (!user) navigate('/');

  useEffect(() => {
    async function getUserDecks() {
      const userList = await decks.filter((d) => d.user._id === user._id);
      setUserDecks(userList);
    }
    getUserDecks();
  }, [user, decks]);
  

  const userIndex = userDecks.map((deck) => <DeckPreview deck={deck} user={user} key={deck._id} />);

  return (
    <main className="ProfileMain">
      <h1>Profile</h1>
      <hr/>
      <h3>Your decks</h3>
      <section className="UserDecks">
        {userIndex.length ?
          userIndex
          :
          <h3>No decks created</h3>
        }
      </section>
    </main>
  );
}