(function () {

  $('[data-click="cart"]').on('click', function (e) {
    e.preventDefault()
    console.log('Adding to cart')
    return false
  })

})()