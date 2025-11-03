import * as personUtils from "./utils/person";

const person = personUtils.createPerson("Rasmus", "Hedin", 27, 1);
console.log(person.fullName());
console.log(person.fullInfo());