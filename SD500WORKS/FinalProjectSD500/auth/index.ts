import fetch from 'cross-fetch';
import { JWTType, decodeToken } from './decode';
import { getToken, setToken } from './storage';



export type token = { "token_type": string, "expires_in": number, "access_token": string }

async function requestNewToken(): Promise<token> {

    const rawResponse: Response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "grant_type": "client_credentials",
            "client_id": "SdKrsC7ohsOUJHmoGcdjUmjo44Ua9hxriiZKOz0L79SNPsb7ti",
            "client_secret": "a3RPtAQC7nLvvbRLpJ3an8CYj7HwMVO4lG0bblJg"
        })
    })
    const jsonResponse: token = await rawResponse.json()
    setToken(jsonResponse);
    //saved in our local storage.ts file

    return jsonResponse;
}


export async function getAuth(): Promise<token> {

    let data: token = getToken();
    // go to (auth storage.ts) for this file
    if (!data || !data.access_token || new Date(decodeToken(data.access_token).exp * 1000) <= new Date())
        //had to multiply by 1000 because JS is in milliseconds and the decode was in seconds so to convert it.
        data = await requestNewToken();
    // go to same file requestnewToken function
    if (!data)
        console.log("Invalid Data!")

    return data;
    // return token then go to the function that called you, we were called in fetchAnimals function in (api index.ts)
}


