var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
var person = new Person("John");
person.sayHello();
