"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //public  默认的 无局限
    // private 仅在本类内部使用
    // protected 在本类及子类中使用
    function Person(name) {
        this.name = name;
        this.name = name;
        //constructor构造器中放入必须要实现的东西 作为参数传入
    }
    Person.prototype.saySomething = function () {
        console.log("my name is " + this.name);
    };
    return Person;
}());
var Yijinfeng = new Person('Yi jin feng');
console.log(Yijinfeng.name);
Yijinfeng.saySomething();
//泛型的概念
var wuzhouPeopeo = [];
wuzhouPeopeo[0] = Yijinfeng;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, number) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.number = number;
        _this.number = number;
        return _this;
    }
    Student.prototype.saySomething = function () {
        console.log("my name is " + this.name + ", my number is " + this.number);
    };
    return Student;
}(Person));
var Yipeng = new Student('yipeng', 55);
console.log(Yipeng.number);
Yipeng.saySomething();
wuzhouPeopeo[1] = Yipeng;
console.log(wuzhouPeopeo);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        return _super.call(this, name) || this;
    }
    Employee.prototype.work = function () {
        _super.prototype.saySomething.call(this); //super的第二种用法
        this.dowork();
    };
    Employee.prototype.dowork = function () {
        console.log('im working');
    };
    return Employee;
}(Person));
var ypWorker = new Employee('yp');
ypWorker.work();
wuzhouPeopeo[2] = ypWorker;
