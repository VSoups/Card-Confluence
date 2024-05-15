import sendRequest from "./send-request";
const BASE_URL = '/api/decks';

export async function createNewDeck(deck) {
    return sendRequest(`${BASE_URL}/new`, 'POST', {deck});
}

// get all decks for home/profile pages
export async function getAllDecks() {
    return sendRequest(BASE_URL);
}