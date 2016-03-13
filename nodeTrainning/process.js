'use strict';


process.on('exit',function(code){
	console.log('about to exit with code:' + code);
})

process.nextTick(function(){
	console.log('nextTick callback!');
})

console.log('nextTick was set');


