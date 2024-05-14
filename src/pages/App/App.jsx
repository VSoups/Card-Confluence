import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import DeckPage from '../DeckPage/DeckPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components */}
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/deck" element={<DeckPage user={user} />} />
            <Route path="/account" element={<AuthPage user={user} setUser={setUser} />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>
        </>
    </main>
  );
}
