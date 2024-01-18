import { getAnimalsAndGetDetails } from "./animal";

async function run() {
   while (true) {

      let res = await getAnimalsAndGetDetails();
      //we're starting our function call here, go to animal index for this.

      //we have the animal details from (getanimalsgetdetails function in animal index.ts)
      
      if (!res) continue;

      const data = { name: res.name, breeds: res.breeds, size: res.size, age: res.age, colors: res.colors, status: res.status };
      console.log(data);
      //DONE!!

   }
}

run()

//start our function call here

  // `name`, `breed`, `size`, `age`, `color`, `status`




