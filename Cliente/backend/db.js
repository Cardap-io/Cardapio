var users  = require('./db.json');
var cardapio = require('./cardapio.json');
//var carrinho = require('./carrinho.json')

module.exports = function() {
return {
users  : users.users,
produtos : cardapio.produtos,
cardapio: cardapio.cardapio,
//carrinho: carrinho.produtos
// and so on
}
}

