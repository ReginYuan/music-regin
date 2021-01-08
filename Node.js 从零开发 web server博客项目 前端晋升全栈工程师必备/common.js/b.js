const {add,mul}= require('./a');
//引入lodash组件
//Lodash是一个一致性、模块化、高性能的 JavaScript 实用工具库，
//内部封装了很多字符串、数组、对象等常见数据类型的处理函数。

//为什么选择 Lodash ？
//Lodash 通过降低 array、number、objects、string 等等的
//使用难度从而让 JavaScript 变得更简单。
//Lodash 的模块化方法 非常适用于：遍历 array、object 和 string
//对值进行操作和检测
//创建符合功能的函数
const _=require('lodash');

const sum =add(10,20);
const result =mul(100,200);
console.log(sum);
console.log(result);


//
const arr=_.concat([1,2],3);
console.log('arr',arr);


