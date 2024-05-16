import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ user, setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setShowSignUp(!showSignUp)} className="AuthToggleBtn">{showSignUp ? 'Log In' : 'Sign Up'}</button>
      <div className="AccForm">
        { showSignUp ?
            <SignUpForm setUser={setUser} />
            :
            <LoginForm user={user} setUser={setUser} />
        }
      </div>
    </main>
  );
}