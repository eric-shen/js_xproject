/**
 * Created by Administrator on 2016/11/4.
 */
//声明对象 和 引用
function sum(value1,value2){
    return value1 + value2;
}
// var sum1 = function (value1,value2) {
//     return value1 + value2;
// }
var ex1 = sum;
console.log(ex1(10,20));
sum =null;
console.log(ex1(10,20));
console.log("case 1 over");

//函数是个值，可以用做被返回
function compare(propertyName) {
    return function (object1,object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if(value1 < value2){
            return 1;
        }else if(value1 > value2){
            return -1;
        }else{
            return 0;
        }
    }
}
var data = [{name:"Zay",age:28},{name:"nick",age:30}];
var use = data.sort(compare("name"));
console.log(use);
//3.callee
function factorial(num) {
    if(num<=1){
        return 1;
    }else
    {
        return num * arguments.callee(num-1);
    }
}
//4.caller
function outer() {
    inner.caller;
    console.log("this is a outer函数");
}
function inner() {
    console.log("you get inner");
}
outer();
//

