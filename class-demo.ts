class Person {
    //public  默认的 无局限
    // private 仅在本类内部使用
    // protected 在本类及子类中使用
    constructor (public name: String) {
        this.name = name
        //constructor构造器中放入必须要实现的东西 作为参数传入
    }
    saySomething() {
        console.log(`my name is ${this.name}`)
    }
}
let Yijinfeng = new Person('Yi jin feng')
console.log(Yijinfeng.name)
Yijinfeng.saySomething()

//泛型的概念
let wuzhouPeopeo: Array<Person> = []
wuzhouPeopeo[0] = Yijinfeng
class Student extends Person {
    constructor(public name:String, public number:Number) {
        super(name)
        this.number = number
    }
    saySomething() {
        console.log(`my name is ${this.name}, my number is ${this.number}`)
    }
}
let Yipeng = new Student('yipeng', 55)
console.log(Yipeng.number)
Yipeng.saySomething()
wuzhouPeopeo[1] = Yipeng
console.log(wuzhouPeopeo)

class Employee extends Person{
    constructor(name:string) {
        super(name)
    }
    work() {
      super.saySomething()//super的第二种用法
      this.dowork()
    }
    dowork() {
        console.log('im working')
    }
}
let ypWorker = new Employee('yp')
ypWorker.work()

wuzhouPeopeo[2] = ypWorker