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

  it("has a initial hunger of 0", () => {
    const pet = new Pet("Fido");
  
    expect(pet.hunger).toEqual(0);
  });

  it("has a initial fitness 10", () => {
    const pet = new Pet("Fido");

    expect(pet.fitness).toEqual(10);
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
});

describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('Fido');

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });

  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});

describe("feed", () => {
  it("should decrease the Pets hunger level by 3, hunger level should never go below 0", () => {
    const pet = new Pet("Fido");
   
    const petsHunger = pet.hunger;
   
    pet.feed();
   
    expect(pet.hunger).toEqual(petsHunger);
  });
});
