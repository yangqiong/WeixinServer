exports.runPromise = function(fn, that, ...rest){
	return new Promise(function(resolve, reject){
		fn.apply(that, [...rest, function(err, ...rest){
			if (err){
				reject(err);
			} else {
				resolve(rest)
			}
		}])
	})
}