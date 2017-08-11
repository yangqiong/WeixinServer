let request = require("request");
let wxlib = require("../wxlib");

module.exports = function(req, res){
	(async function(){
		let code = req.query.code;
		console.log(code);
		if (!code){
			res.json({
				status: -1,
				message: "缺少参数"
			})
		}
		try {
			let openID = await wxlib.jscode2session(code);
			res.json({
				status: 0,
				data: openID
			});
		} catch(err){
			console.log(err);
			res.json({
				status: -1,
				error: err
			});
		}
	})();
}