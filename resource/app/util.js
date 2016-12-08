//require 定义模块 定义方法

define(['jquery'],function($){
return{
change:function(){
//也可以方法内部引入
require(['jquery'], function($){
console.log($) // OK
})
},

show:function(){
alert("弹出show")
},
message:function(){
alert($)
}

}


});