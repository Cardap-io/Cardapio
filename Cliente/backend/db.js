var users  = require('./db.json');
var cardapio = require('./cardapio.json');

module.exports = function() {
return {
users  : users,
cardapio : cardapio,
// and so on
}
}