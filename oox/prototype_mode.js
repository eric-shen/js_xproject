/**
 * Created by Administrator on 2016/11/7.
 */
function Person(name,age,job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
      console.log(this.name);
    };
    return o;
    console.log(o);
}
var friend = new Person("shen",20,"software");
friend.sayName();
//