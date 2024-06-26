import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css';

export default function LoginForm({ user, setUser }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
  
  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    // will resolve to the user object included in the
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      console.log('LoginForm user ', user)
      setUser(user);
      navigate('/');
    } catch {
      setError('Log In Failed - Try Again');
    }

  }

  return (
    <div>
      <div className="FormContainer">
        <form autoComplete="off" onSubmit={handleSubmit} className="LoginForm">
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}