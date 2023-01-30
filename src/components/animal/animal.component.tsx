import React, { useEffect, useState } from "react";
import { IAnimal } from "../../interfaces/models/animal.interface";
import { getAnimals } from "../../services/animal.service";

export const Animalcomponent = () => {
  const [animal, setAnimal] = useState<IAnimal[]>([]);

  useEffect(() => {
    let res = getAnimals();
    setAnimal(res);
  }, []);

  return (
    <div>
      <h1>Animals:</h1>
      <ul>
        {animal.map((animal) => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
};
