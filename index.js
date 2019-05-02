
class Food{
  constructor(name, value) {
    this.name = name;
    this.value = value;
    console.log(`Eating ${this.name}`);
  }
}
class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
  eat(name, value) {
    this.energy += value
    console.log(`${this.name} is eating. Tiger's energy is ${this.energy}`)
  }
  sleep(value) {
    this.energy += value
    console.log(`${this.name} is sleeping. Energy level is ${this.energy} `)
  }
  sound(value) {
    console.log(`${this.name} is making noise.`)
    this.energy -= value
  }
}

class Tiger extends Animal {
  constructor(name, energy, food) {
    super(name, energy,food)
  }
}

class Monkey extends Animal {
  constructor(name, energy) {
    super(name, energy)
  }
  play() {
    console.log('Oooo Oooo Oooo!')
    this.energy -= 8
  }
}

class Snake extends Animal {
  constructor(name, energy) {
    super(name, energy)
  }
}
const tiger1 = new Tiger('Tiger1', 20);
const tiger2 = new Tiger('Tiger2', 20);
const tiger3 = new Tiger('Tiger3', 20);
tiger3.sleep(5);
const bugs1 = new Food('cricket');
const grain1 = new Food('wheat');

tiger1.eat(grain1, 5);
tiger2.eat(bugs1, 5);
console.log(Tiger.instances);


