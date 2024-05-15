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

// export async function getSelected() {
//     return sendRequest(`${BASE_URL}/view/:id`);
// }

export async function addCard({ cardId, deckID }) {
    console.log(cardId, deckID);
    return sendRequest(`${BASE_URL}/add/${cardId}`, 'POST');
}