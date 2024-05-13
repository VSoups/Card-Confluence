import sendRequest from './send-request';
const BASE_URL = '/cards';

export async function getCardByName(cardName) {
    return sendRequest(BASE_URL);
}