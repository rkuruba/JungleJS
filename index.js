

class Animal {
  constructor(name, energy, food) {
    this.name = name
    this.energy = energy
    this.food = food

  }
  eat(value) {
    console.log(`${this.name} is eating.`)
    this.energy += value
  }
  sleep(value) {
    console.log(`${this.name} is sleeping.`)
    this.energy += value
  }
  sound(value) {
    console.log(`${this.name} is making noise.`)
    this.energy -= value
  }
}

class Tiger extends Animal {
  constructor(name, energy,food) {
    super(name, energy, food)
  }
  bark() {
    console.log('Woof Woof!')
    this.energy -= .1
  }
}

class Monkey extends Animal {
  constructor(name, energy, food) {
    super(name, energy, food)
  }
  play() {
    console.log('Oooo Oooo Oooo!')
    this.energy -= 8
  }
}

class Snake extends Animal {
  constructor(name, energy,food) {
    super(name, energy,food)
  }
}

const monkey1 = new Monkey('Rocky', 10, 'Wheat' );
monkey1.play();

console.log(monkey1);
