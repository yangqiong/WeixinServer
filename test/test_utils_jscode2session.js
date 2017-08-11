let wxlib = require("../wxlib");

(async function(){
	let rsp = await wxlib.jscode2session("001xzpMr0vEWUc1P6CNr0tM7Mr0xzpMJ");
	console.log(rsp)
})();