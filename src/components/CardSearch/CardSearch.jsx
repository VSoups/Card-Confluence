import { useState } from 'react';
import * as cardsAPI from '../../utilities/cards-api';
import './CardSearch.css';

export default function CardSearch({ setSearchCard }) {
  const [card, setCard] = useState('');
  const [error, setError] = useState('');

  async function cardSearch(evt) {
    evt.preventDefault();
    let inputCard = card.split(' ').join('+');
    try {
      const fetchCard = await cardsAPI.getCardByName(inputCard);
      console.log(fetchCard);
      setSearchCard(fetchCard);
    } catch (error) {
      console.log(error);
      setError('Search Error: Card not found');
    }
    setCard('');
    evt.target.name.value = '';
  }

  function handleInput(evt) {
    const searchText = evt.target.value;
    setCard(searchText);
  }
  return (
    <>
      <form onSubmit={cardSearch}>
        <label>Add Card</label>
        <input type="text" name="name" onChange={handleInput} placeholder="Search for a card" />
        <button type="submit">Search</button>
        <p>{error}</p>
      </form>
    </>
  );
}