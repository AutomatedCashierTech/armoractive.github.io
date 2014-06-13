(function () {

  var cart = {
  }

  function render() {
    var html = ''
    var uri = ''

    if (cart.length !== 0) {
      for (var key in cart) {
        html += '<li class="disabled"><a href="#">' + key + ' <span class="badge">' + cart[key] + '</span></a></li>'
        uri += key + ' (' + cart[key] + '), '
      }
    } else {
      html += '<li class="disabled">Nothing here!</li>'
    }

    html += '<li class="divider"></li><li><a href="http://www2.armoractive.com/l/28102/2013-11-05/tq6v3?products_selected=' + encodeURIComponent(url.substring(0, url.length - 1)) + '">Request Quote</a></li>'

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