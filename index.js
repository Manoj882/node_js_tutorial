
// Here, const variable = 'superHero' in batman.js and superman.js 
// file is not faced conflict because each module in NodeJs has
// it's own scope.

require('./batman');
require('./superman');

