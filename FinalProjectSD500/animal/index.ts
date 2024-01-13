import { fetchAnimal, fetchAnimals } from "../api";
import { Animal } from "./types";
import { Animal1 } from "./types2"
const prompts = require('prompts');

export interface AnimalChoice { title: string, value: number};
export interface Animalsss { title: string, value: number,size:string};
//where the pet `name` is used as `title` and `id` is used as a `value`

export async function getAnimalsAndGetDetails() {
    const animals: Animal[] | undefined = await getAnimals();
    //go to getAnimals function in this file(under this function)

    const options = animals?.map((a) => ({ title: a.name + a.size, value: a.id ,size:a.size}));
    //Options is holding animal name and ID
    const selectedAnimalId: number = await selectAnimalId(options);
    //go to this function in the same file(last function)

    //at this point we have the id

    const details: Animal1 | undefined = await fetchAnimal(selectedAnimalId)

    //go to this function(api index.ts) you take the id as an argument with you

    return details
    //this has the details of the animal we chose
    //go to the function that called you in app.ts
}

export async function getAnimals() {

    const options = [
        { type: 'text', name: 'name', message: 'Enter Animal name (optional)' },
        { type: 'select', name: 'type', message: 'Select Animal type', choices: [{ title: 'Dog', value: 'Dog' }, { title: 'Cat', value: 'Cat' }] },
       
        { type: 'select', name: 'gender', message: 'Select Animal gender', choices: [{ title: 'Male', value: 'Male' }, { title: 'Female', value: 'Female' }] },
        {type:'select',name:'size',message:'select the size',choices:[{title:'small',value:'small'},{title:'medium',value:'medium'},{title:'large',value:'large'}]}
    ]
    const animalPrompt: Animal = await prompts(options);
    //recieve prompts from user and save them in animalprompt variable
    const response = await fetchAnimals(animalPrompt.name, animalPrompt.type, animalPrompt.gender,animalPrompt.size);
    //go to (api index) to find this function, note that you have the value of the prompt that are being passed in this function.

    //we fetched our animals and put them in response variable

    return response?.animals;
    // this function is returning the animals array from response
    //go to the function that called you(same file function getAanimalsandGetDetails)
}


export async function selectAnimalId(options: Animalsss[] | undefined): Promise<number> {

    const selection = await prompts({
        type: 'select',
        name: 'id',
    
        message: 'select an animal name?',
        choices: options ?? []
    })
    return selection?.id;
}

//make the user select from a list of animals

//then grab the id of that animal, then go back to where you were called (samefile getAnimalsandgetDetails)



