import sendRequest from "./send-request";
const BASE_URL = '/api/decks';

// create a new deck
export async function createNew(deck) {
    return sendRequest(`${BASE_URL}/new`, 'POST', {deck});
}

// get all decks for home/profile pages
export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function addCard({ cardID, deckID }) {
    console.log(cardID, deckID);
    return sendRequest(`${BASE_URL}/add/${cardID}`, 'POST', {deckID});
}

export async function minusCard({ cardID, deckID }) {
    return sendRequest(`${BASE_URL}/minus/${cardID}`, 'POST', {deckID});
}

export async function deleteDeck(deck, user) {
    return sendRequest(`${BASE_URL}/delete`, 'DELETE', {deck, user})
}