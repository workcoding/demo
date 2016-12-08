require.config({
	// 路径是绝对路径html路径
	baseUrl: 'resource/app',
    paths: {
    	hd: 'hd',
    	css: '../lib/css.min',
        jquery: '../lib/jquery.min',
        angular: '../lib/angular2.min',
        bootstrap: '../lib/bootstrap.min'   
    },

// 定义依赖关系 css.min.js 哪整的，再整一个字体库
shim:{
hd:{
init:function(){
return{
modal:modal,
success:success,
}
}
},

	
	'bootstrap':{
		'deps':['jquery']
	}

	// 'bootstrap':{
	// 	'deps':['jquery','css!../css/bootstrap.min.js']
	// }
}


});