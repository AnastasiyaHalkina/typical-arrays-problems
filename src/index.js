
exports.min = function min (array) {
  if (Array.isArray(array) && array) {
		let result = Math.min(...array);
		
		if (isNaN(result) || !isFinite(result)) {
			return 0;
		}
		return result;
  }
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array) {
    let result = Math.max(...array);

    if (isNaN(result) || !isFinite(result)) {
      return 0;
    }
    return result;
  }
  return 0;
}

exports.avg = function avg (array) {
	if (Array.isArray(array) && array) {
    let result = array.reduce((sum, current) => sum + current, 0) / array.length;
	
		if (isNaN(result) || !isFinite(result)) {
			return 0;
		}
		return result;
	}
	return 0;
}
