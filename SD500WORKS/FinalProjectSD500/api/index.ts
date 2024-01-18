import { AnimalsResponse } from "../animal/types";
import { AResponses } from "../animal/types2";
import { getAuth } from "../auth";


export async function fetchAnimals(name: string, type: string, gender: string,size:string) {
    //at this point we have received the prompt value from the function call
    try {
        const tokenn = await getAuth()
        //go to (auth index.ts) to find this function 
        const queryString = `https://api.petfinder.com/v2/animals?type=${type}&size=${size}&gender=${gender}${name?.length ? "&name=" + name : ""}`;
        const rawResponse: Response = await fetch(queryString, {
            method: 'GET',

            headers: { 'Authorization': `Bearer ${tokenn.access_token}` }
        })
        const JsonResponse: AnimalsResponse = await rawResponse.json()
        //check types in (animal types.ts file) if needed
        return JsonResponse
        //return the response go to the getAnimals function that called you in (animal index.ts file)
    }
    catch (error) {
        console.log(error)
    }
}

//tokenn= await getAuth()
//const rawresponse:Response=await fetch(url?gender=${gender}&type=${type}${name?.length}? "&name=" + name : "")




export async function fetchAnimal(id: number) {
    try {
        const tokenn = await getAuth()
        //we received tokenn from getAuth(auth index.ts)

        const queryString = `https://api.petfinder.com/v2/animals/${id}`;
        const rawResponse: Response = await fetch(queryString, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${tokenn.access_token}` }
        })

        const JsonResponse: AResponses = await rawResponse.json()
        return JsonResponse.animal 
        // this is fetching the selected animal detail
        //go to the function that called you getAnimalandgetDetails in (animal index.ts)

    }
    catch (error) {
        console.log(error)
    }
}
