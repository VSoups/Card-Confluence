import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import DeckPage from '../DeckPage/DeckPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import * as decksAPI from '../../utilities/decks-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [decks, setDecks] = useState([]);

  // deck index page not updated after new deck is made
  // fetchAll function returning twice
  useEffect(() => {
    async function fetchAll() {
      const allDecks = await decksAPI.getAll();
      // console.log(allDecks);
      setDecks(allDecks);
    }
    fetchAll();
  }, []);

  return (
    <main className="App">
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components */}
            <Route path="/" element={<HomePage user={user} decks={decks} />} />
            <Route path="/profile" element={<ProfilePage user={user} decks={decks} />} />
            {/* change route from /deck to /deck/:id and add decks state */}
            <Route path="/deck/:id" element={<DeckPage user={user} decks={decks} />} />
            <Route path="/account" element={<AuthPage user={user} setUser={setUser} />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>
        </>
    </main>
  );
}
