/**
 * Created by Administrator on 2016/11/4.
 */
//对象的属性修改
var person ={
    name:"Nicholas",
    age:29,
    job:"software enginner",
    sayName:function () {
        console.log(this.name);
    }
};
Object.defineProperty(person,"name",{
    configurable:false,value:"hallo"
});
delete person.name;
console.log(person.name);

//访问器属性
var book = {
  _year:2017,edition:2
};
Object.defineProperty(book,"year",{
  setter:function (newValue) {
        if(newValue>2004){
            this._year = newValue;
            this.edition += newValue-2014;
        }
    }
});
book.year = 2018;
console.log(book.edition);

//构造函数
// function Person(name,age,job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function () {
//         console.log(this.name);
//     }
// }
// var person1 = new Person("Nicholas",29,"engnner");
// var person2 = new Person("shen",30,"ok");
//构造函数改版
// function ChangePerson(name,age,job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this,sayName = sayName;
// }
// function sayName() {
//     console.log(this.name);
// }
// var p1 = new ChangePerson("shen",30,"okkkk");
// var p2 = new ChangePerson("jian",20,"ololol");
