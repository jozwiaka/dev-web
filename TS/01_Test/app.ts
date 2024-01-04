class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("John");
person.sayHello();
