import { ID } from "../module2";


interface Person {
    firstName: string,
    lastName: string,
    age: number,
    id: ID,

    fullName(): string,
    fullInfo(): string,
}

export default Person;