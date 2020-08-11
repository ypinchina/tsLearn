//interface接口的使用

interface Usb{
    type: Number,
    brand: String
}
class Mp4 {
    constructor(private transform:Usb) {
        //在class里面调用接口 实例中不能缺少接口中的参数
    }
}
let TomMp4 = new Mp4({
    type: 3.0,
    brand: 'lenovn'
})
//interface的第二个用法  implements 实现
interface Animal{
    eat():void
}
class Sheep implements Animal{
    eat() {
        console.log('i eat grass')
    }
}
class Tiger implements Animal {
    eat() {
        console.log('i eat meat')
    }
}
