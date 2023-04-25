const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
  it("sets the name property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
  it("has a initial age of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });
});
it("has a initial hunger of 0", () => {
  const pet = new Pet("Fido");

  expect(pet.hunger).toEqual(0);
});
it("has a initial fitness 10", () => {
  const pet = new Pet("Fido");

  expect(pet.fitness).toEqual(10);
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    const petsAge = pet.age;
    pet.growUp();
    expect(pet.age).toEqual(petsAge + 1);
  });
});

it("increase the hunger by 5", () => {
  const pet = new Pet("Fido");
  const petsHunger = pet.hunger;
  pet.growUp();
  expect(pet.hunger).toEqual(petsHunger + 5);
});

it("decrease the fitness by 3", () => {
  const pet = new Pet("Fido");
  const petsFitness = pet.fitness;
  pet.growUp();
  expect(pet.fitness).toEqual(petsFitness - 3);
});

// describe("walk", () => {
//   it("increases fitness by 4", () => {
//     const pet = new Pet("Fido");
//     const petsWalk = pet.fitness;
//     pet.walk();
//     expect(pet.fitness).toEqual(petsWalk + 4);
//   });
// });

describe("feed", () => {
  it("should decrease the Pets hunger level by 3, hunger level should never go below 0", () => {
    const pet = new Pet("Fido");
    const petsHunger = pet.hunger;
    pet.feed();
    expect(pet.hunger).toEqual(petsHunger);
  });
});
