
function mix (a, b, p) {
  return a * (1-p) + b * p;
}

module.exports = function rectMix (a, b, p) {
  var bound = [];
  for (var i=0; i<4; ++i)
    bound[i] = mix(a[i], b[i], p);
  return bound;
};

