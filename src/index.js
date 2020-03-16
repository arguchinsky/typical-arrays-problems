
exports.min = function min (array) {
  return (arguments[0] && array.length) ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return (arguments[0] && array.length) ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {
  return (arguments[0] && array.length) ? array.reduce((acc, curr )=> acc += curr, 0) / array.length : 0;
}
