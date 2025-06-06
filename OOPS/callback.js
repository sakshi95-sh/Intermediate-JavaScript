// Pizza Order app
orderPizza('veg', 'cheese', function (msg) {
    console.log(`On Robin's phone ${msg}`);
});

function orderPizza(nameOfUser, typeOfPizza,callback) {

  console.log(`You received an order from ${nameOfUser} of  ${typeOfPizza}`)

  setTimeout(function () {
    const msg = `You ${typeOfPizza} pizza is ready`
    callback(msg)
  }, 3000)
}
