import { token } from "./index";

const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

const TOKEN_NAME = "access_token"

export function setToken(token: token) {
    localStorage.setItem(TOKEN_NAME, JSON.stringify(token)) //"access_token:"blablabla"
}
//set Items in local storage
export function getToken() {
    const token = localStorage.getItem(TOKEN_NAME)

    try {
        return JSON.parse(token);
    }
    catch {
        return null;
    }
}
//get token from local storage