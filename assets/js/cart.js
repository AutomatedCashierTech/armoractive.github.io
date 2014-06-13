(function () {

  var cart = {
  }

  function render() {
    var html = ''

    if (cart.length !== 0) {
      for (var key in cart) {
        html += '<li class="disabled"><a href="#">' + key + '<span class="badge">' + cart[key] + '</span></a></li>'
      }
    } else {
      html += '<li class="disabled">Nothing here!</li>'
    }

    html += '<li class="divider"></li><li><a href="#">Request Quote</a></li>'

    $('.shopping-cart .dropdown-menu').html(html)
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

    render()

    return false
  })

  render()

})()