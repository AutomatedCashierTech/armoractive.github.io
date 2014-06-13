(function () {

  var cart = {
  }

  $('[data-click="cart"]').on('click', function (e) {
    e.preventDefault()

    var $this   = $(this)
    var product = $this.data('product')

    if (cart[product]) {
      cart[product]++
    } else {
      cart[product] = 1
    }

    console.log(cart)

    return false
  })

})()