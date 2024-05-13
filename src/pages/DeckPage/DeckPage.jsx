import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function DeckPage() {
  const [card, setCard] = useState('');

  async function cardSearch(evt) {
    evt.preventDefault();
    const cardFuzzy = card.split(' ');
    console.log(cardFuzzy);
    // const fetchCard = await 
    setCard('');
    evt.target.name.value = '';
  }

  function handleInput(evt) {
    const cardInput = evt.target.value;
    setCard(cardInput);
  }

  return (
    <>
      <h1>Deck Page</h1>
      <form onSubmit={cardSearch}>
        <input type="text" name="name" onChange={handleInput} placeholder="Search for a card" />
        <button type="submit">Search</button>
      </form>
    </>
  );
}