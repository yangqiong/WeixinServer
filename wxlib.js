let request = require("request");
let { URL } = require('url');
let config = require("./config");
let utils = require("./utils");

exports.jscode2session = jscode2session;

async function jscode2session(code){
	let  jscode2sessionURL = new URL('https://api.weixin.qq.com/sns/jscode2session');
	jscode2sessionURL.searchParams.append("appid", config.APPID);
	jscode2sessionURL.searchParams.append("secret", config.SECRET);
	jscode2sessionURL.searchParams.append("js_code", code);
	jscode2sessionURL.searchParams.append("grant_type",  "authorization_code");
	let [response, body] = await utils.runPromise(request.get, request, {
		url: jscode2sessionURL.href,
		json: true
	});
	if (response.statusCode == 200 && !body.errcode){
		return body.openid;
	} else {
		throw {
			statusCode: response.statusCode,
			body: body
		}
	}
}