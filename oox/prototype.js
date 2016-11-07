/**
 * Created by Administrator on 2016/11/6.
 */
function Person() {
    Person.prototype.name = "shen";
    Person.prototype.age = 29;
    Person.prototype.job = ["ok1","ok2"];
    Person.prototype.sayName = function () {
        console.log(this.name);
    }
}
var person1 = new Person();
//console.log(Person.prototype);
//console.log(Person.prototype.constructor);
//首先检测实例和原型对象之间的关系，有2个方法
console.log("isPrototypeOf说明了实例和原型对象之间的关系：或者使用getPrototypeOf也是可以的")
console.log(Person.prototype.isPrototypeOf(person1));
console.log(Object.getPrototypeOf(person1));//说明了实例的[[prototype]]指向了原型对象
//其次检测一个属性是属于实例还是属于原型  hasOwnProperty 方法，并且只有当属性属于实例的时候才返回true
console.log(person1.hasOwnProperty("name"));
person1.name = "kkk";
console.log(person1.hasOwnProperty("name"));
//其次检查属性是否属于原型还是实例 可以用In,但是只要符合其中一个都是true的
console.log("name"in person1);
//所以可以把hasOwnProperty和In 结合封装起来
function hasPrototypeProperty(object,name) {
    return (name in object) && object.hasOwnProperty("name");
}
//可以使用for in或者Object.keys(参数是表示对象);
//想要得到所有的实例属性，无论是否是枚举属性,可以用getOwnPropertyNames
/*******************************************************************
 * *****************************************************************
 */
var person2 = new Person();
person1.name = "feng";
person1.job=["ok1","ok3"];
console.log(person1.name);
console.log(person2.name);
console.log(person1.job);
console.log(person2.job);

