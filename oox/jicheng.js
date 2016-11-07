/**
 * Created by Administrator on 2016/11/7.
 */
function SuperType(){
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
};
function SubType() {
    this.subproperty = false;
}

SubType.prototype.getSubValue = function () {
    return this.subproperty;
};
SubType.prototype = new SuperType();
var instance = new SubType();
console.log(instance.getSubValue());