import { fetchAnimal } from "./api";
import { getAnimals, selectAnimalId, AnimalChoice } from "./animal";
import { Animal } from "./animal/types";
import { Animal1 } from "./animal/types2";
import { json } from "node:stream/consumers";
const prompts = require('prompts');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

interface AnimalChoice2 { title: string, value: number, size: string };
class Bookmarks {
    static #instance: Bookmarks;
    private bookmarks: { [id: string]: string } = this.GetbookmarkFromLocalStorage()
    //we had to set the bookmark to the localstorage to get the updated version, we were facing much problems with this.

    static getInstance(): Bookmarks {
        // Ensure only one instance of Bookmarks exists
        if (!this.#instance) {
            this.#instance = new Bookmarks();
        }
        return this.#instance;
    }

    async savebookmarkToLocalStorage() {
        // Save bookmarks to localStorage
        localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks))
    }



    GetbookmarkFromLocalStorage(): { [id: string]: string } {
        try {
            const savedBookmarks = localStorage.getItem("bookmarks");
            return savedBookmarks ? JSON.parse(savedBookmarks) : {};
            //if it exists get the parsed value if not return an empty object
        } catch (error) {
            return {};
        }

    }
    async getAnimalsAndGetDetails() {
        const animals: Animal[] | undefined = await getAnimals();
        //grabs the animal array retrived from getAnimals function (animal index.ts)
        const options: AnimalChoice2[] | undefined = animals?.map((a) => ({ title: a.name, value: a.id, size: a.size }));
        //mapping to name and id 
        const selectedAnimalId: number = await selectAnimalId(options);
        //retriving selected animal id

        const details: Animal1 | undefined = await fetchAnimal(selectedAnimalId);
        //fetching animal by passing the id
        // Additional prompts
        const prompt: string | undefined = await this.Prompt();
        const petName: string = details?.name || "";
        const petSize: string = details?.size || ""

        this.RetrievedPrompt(prompt, selectedAnimalId, petName, petSize);
    }

    async Prompt() {
        const options = [
            {
                type: 'select', name: 'prompt', message: 'Choose your action', choices: [
                    { title: 'Add to bookmark', value: "add" },
                    { title: 'Remove from bookmark', value: "remove" },
                    { title: 'Display bookmark', value: "display" },
                    { title: 'Search again', value: "search" },
                ]
            },
        ];

        const response = await prompts(options) as { prompt: string };
        //storing value in response the as is used to show the expected value
        return response.prompt;
        //returning the prompt values
        //go back to the function that called you
    }



    RetrievedPrompt(prompt: string, petId: number, PetName: string, petSize: string) {
        if (prompt === "add" || prompt === "remove")
            this.addremove(prompt, petId, PetName)


        else if (prompt === "display")
            this.displayBookmarks(petSize)

        else if (prompt === "search")
            this.Prompt()

        else
            console.log(`Nothing to view`)
    }


    addremove(prompt: string, petId: number, petName: string) {
        if (prompt === "add") {
            if (!this.bookmarks[petId]) {
                this.bookmarks[petId] = petName
                this.savebookmarkToLocalStorage()
                console.log(`${petName} is saved`)
            }
        }
        if (prompt === "remove") {
            if (this.bookmarks[petId]) {
                petName = this.bookmarks[petId]
                delete this.bookmarks[petId]
                this.savebookmarkToLocalStorage()
                console.log(`${petName} has been removed`)
            }
        }
    }


    displayBookmarks(petSize: string) {
        console.log(`Bookmarks:`)
        for (const [id, name,] of Object.entries(this.bookmarks))
            console.log(`Name:${name}, ID: ${id},Size:${petSize}`)
    }
}

let newBookmark = Bookmarks.getInstance()
newBookmark.getAnimalsAndGetDetails()





