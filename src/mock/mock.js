var home = require('../data/home.json');
var recommend1 = require('../data/recommend1.json');
var recommend2 = require('../data/recommend2.json');
var recommend3 = require('../data/recommend3.json');
var mock = {
    '/book/index': home,
    '/book/list?init=1': recommend1,
    '/book/list?init=2': recommend2,
    '/book/list?init=3': recommend3
};
module.exports = function(url) {
    return mock[url];
}