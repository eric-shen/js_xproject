1.函数是对象，是Function类型的实例，函数名只是函数的引用，具体请看代码，
2.函数是个值，可以用作参数或者返回值。
3.函数拥有arguments这个对象，用于保存函数的参数，该对象还有一个callee属性，是个指针，指向拥有argument对象的函数,
this指的是函数执行的环境对象
4.函数对象属性caller,表示调用当前函数的引用，谁调用当前函数就是caller所指向的对象
5.函数的属性length,prototype
函数的方法apply(),call()设置函数体内this的值,二者区别是call必须把参数全部列举出来，apply不需要全部列举出来
总结起来就是函数有2个方法，apply(),call(),3个属性caller.lentgh.prototype    函数的参数有一个属性callee返回的是函数
有什么不懂的，请加入QQ群223068582参与讨论