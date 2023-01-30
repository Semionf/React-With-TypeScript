import { animalsArr } from "../db/data";
import { IAnimal } from "../interfaces/models/animal.interface";

export const getAnimals = () => {
  return animalsArr;
};

export const getAnimalById = (id: number) => {
  return animalsArr.find((animal) => animal.id === id);
};

export const addAnimal = (animal: IAnimal) => {
  animalsArr.push(animal);
};
