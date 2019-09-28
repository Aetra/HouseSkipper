import { authHeader, handleResponse } from '.././helpers';
import config from '../.././config1.js';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.fakeAPI}/users`, requestOptions).then(handleResponse);
}
