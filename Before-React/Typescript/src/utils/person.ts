import {ID} from '../module2';

interface Person {
    firstName: string,
    lastName: string,
    age: number,
    id: ID,

    fullName(): string,
    fullInfo(): string,
}

function createPerson(firstName: string, lastName: string, age: number, id: string|number): Person {
    return {
        firstName,
        lastName,
        age,
        id,

        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        fullInfo() {
            return `${this.fullName()} ${this.age} ${this.id}`;
        }
    }
}

export {createPerson, Person};