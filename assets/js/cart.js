(function () {

  var cart = $.cookie('cart')

  if (cart) {
    cart = JSON.parse(cart)
  } else {
    cart = {}
  }

  $(document).on('click', '.clear-quote', function (e) {
    e.preventDefault()

    cart = {}

    render()
    saveCart()

    return false
  })

  function saveCart() {
    $.cookie('cart',  JSON.stringify(cart))
  }

  function render() {
    var html = ''
    var uri = ''
    var count = 0

    for (var key in cart) {
      html += '<li class="disabled"><a href="#"><span class="badge pull-right">' + cart[key] + '</span> <span class="truncate">' + key + '</span></a></li>'
      uri += key + ' (' + cart[key] + '), '
      count++
    }

    if (count == 0) {
      html += '<li class="disabled"><a href="#">No items have been added</a></li>'
    }

    html += '<li class="divider"></li><li><a href="http://www2.armoractive.com/l/28102/2013-11-05/tq6v3?products_selected=' + encodeURIComponent(uri.substring(0, uri.length - 2)) + '">Request Quote</a></li>'
    html += '<li class="divider"></li><li><a href="#" class="clear-quote">Clear Quote</a></li>'

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
    saveCart()

    $('.shopping-cart').addClass('open')

    return false
  })

  render()

})()