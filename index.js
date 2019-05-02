
const jungleanimals = [];
class Jungle{
  constructor(animal)
  {
    this.animal = animal;
  }
  add(animal)
  {
    this.animal = animal;
    jungleanimals.push(animal);
  }
  soundoff(animal,value)
  {
      this.animal = animal
      animal.energy = animal.energy - value;
  }
}
class Food{
  constructor(name, value) {
    this.name = name;
    this.value = value;
    console.log(`${this.name} Instance called ${this.value}`);
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
let TigertotalCount = 1;
class Tiger extends Animal {
  constructor(name, energy) {
    super(name, energy)
    this.instances = TigertotalCount;
    this.incrementCount();
  }
  incrementCount() {
    TigertotalCount = TigertotalCount + 1;
  }
}
let MonkeytotalCount = 1;
class Monkey extends Animal {
  constructor(name, energy) {
    super(name, energy)
    this.instances = MonkeytotalCount;
    this.incrementCount();
  }
  incrementCount() {
    MonkeytotalCount = MonkeytotalCount + 1;
  }
  play() {
    console.log('Oooo Oooo Oooo!')
    this.energy -= 8
  }
}

class Snake extends Animal {
  constructor(name, energy) {
    super(name, energy)
    console.log(`Snake instance created ${this.name}`);
  }
}
const tiger1 = new Tiger('Tiger1', 20);
const tiger2 = new Tiger('Tiger2', 20);
const tiger3 = new Tiger('Tiger3', 20);
tiger3.sleep(5);
const bugs1 = new Food('bug','cricket');
const grain1 = new Food('grain','wheat');

tiger1.eat(grain1, 5);
tiger2.eat(bugs1, 5);
console.log(`Tiger count - ${tiger3.instances}`);

const monkey1 = new Monkey('Monkey1', 20)

console.log(`Monkey count - ${monkey1.instances}`);

monkey1.sleep(10);

while(monkey1.energy >= 8)
{
  monkey1.play();
}
console.log(`Monkey is too tired`);


const snake1 = new Snake('Snake1', 20)

const jungle1 = new Jungle('');
jungle1.add(tiger1.name);
jungle1.add(tiger2.name);
jungle1.add(tiger3.name);
jungle1.add(monkey1.name);
jungle1.add(snake1.name);

console.log(jungleanimals);

jungle1.soundoff(tiger1, 3)
jungle1.soundoff(tiger2, 3)
jungle1.soundoff(tiger3, 3)
jungle1.soundoff(monkey1, 4)
jungle1.soundoff(snake1, 3)

console.log(`Energy Levels of animals after sound off Tiger1 = ${tiger1.energy}, Tiger2 = ${tiger2.energy}, Tiger3 = ${tiger3.energy}, Monkey1 = ${monkey1.energy}, Snake1 = ${snake1.energy}`);