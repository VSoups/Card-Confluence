import sendRequest from './send-request';
const BASE_URL = '/api/cards';

export async function getCardByName(cardName) {
    return sendRequest(`${BASE_URL}/search/${cardName}`);
}