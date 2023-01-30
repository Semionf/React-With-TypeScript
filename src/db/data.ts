import { IAnimal } from "../interfaces/models/animal.interface";
import { IStudent } from "./../interfaces/models/student.interface";

export const animalsArr: IAnimal[] = [
  {
    id: 1,
    name: "Dog",
    age: 3,
    type: "Mammal",
  },
  {
    id: 2,
    name: "Cat",
    age: 2,
    type: "Mammal",
  },
  {
    id: 3,
    name: "Snake",
    age: 1,
    type: "Reptile",
  },
  {
    id: 4,
    name: "Lizard",
    age: 1,
    type: "Reptile",
  },
];

export const studentsArr: IStudent[] = [
  {
    id: 1,
    name: "John",
    age: 20,
  },
  {
    id: 2,
    name: "Jane",
    age: 21,
  },
  {
    id: 3,
    name: "Jack",
    age: 22,
  },
  {
    id: 4,
    name: "Jill",
    age: 23,
  },
];
