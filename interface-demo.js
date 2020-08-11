"use strict";
//interface接口的使用
var Mp4 = /** @class */ (function () {
    function Mp4(transform) {
        this.transform = transform;
        //在class里面调用接口 实例中不能缺少接口中的参数
    }
    return Mp4;
}());
var TomMp4 = new Mp4({
    type: 3.0,
    brand: 'lenovn'
});
var Sheep = /** @class */ (function () {
    function Sheep() {
    }
    Sheep.prototype.eat = function () {
        console.log('i eat grass');
    };
    return Sheep;
}());
var Tiger = /** @class */ (function () {
    function Tiger() {
    }
    Tiger.prototype.eat = function () {
        console.log('i eat meat');
    };
    return Tiger;
}());
