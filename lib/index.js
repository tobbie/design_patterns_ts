"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var printName = function () {
    var name = 'Oluwatobi';
    console.log(name);
};
var Wizard = /** @class */ (function () {
    function Wizard(name, age, gender, weight) {
        var _this = this;
        this.Display = function () {
            console.log("Hello my name is " + _this.name + ", age is " + _this.age + ", gender is " + _this.gender + " and weight is " + _this.weight);
        };
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
    }
    return Wizard;
}());
printName();
var person1 = new Wizard('Sam', 45, 'Male', 85);
person1.Display();
