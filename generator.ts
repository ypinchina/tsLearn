// function* dosomething () {
//   console.log('start')
//   yield
//   console.log('end')
// }
//   let makeit = dosomething()
//   makeit.next()
//   makeit.next()

  
function* getStock(stockName) {
  while(true) {
    yield Math.random()*100
  }
}
let getstockFn = getStock('tencent')
let price = 100
let priceLimit = 15
while (price > priceLimit) {
  price = getstockFn.next().value
  console.log(`股票的价格${price}   +   ${getstockFn.next().done}`)
}