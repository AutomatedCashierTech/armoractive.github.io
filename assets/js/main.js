(function () {

   window.getParameterByName = function(name) {
     name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
     var regexS = "[\\?&]" + name + "=([^&#]*)";
     var regex = new RegExp(regexS);
     var results = regex.exec(window.location.href);
     if (results == null) return "";
     else return decodeURIComponent(results[1].replace(/\+/g, " "));
    }

  $(document).ready(function () {

    // Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip()

    // Delegate lightbox functionality
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (e) {
      e.preventDefault()
      $(this).ekkoLightbox()
    })

    $.getFeed({
      url: 'http://blog.armoractive.com/feed/atom',
      success: function (feed) {
        if (!feed || !feed.items) {
          return
        }

        $('.blog-posts-loading').hide()

        var items = feed.items.slice(0, 4)

        for (var i = 0; i < 4; i++) {

          if (typeof items[i] !== 'undefined') {
              var description = $(items[i].description).first().html()

              if (description.length > 255) {
                  description = description.substring(0, 252) + '...'
              }

              $('.blog-posts-' + i).html([
                  '<h4><a href="' + items[i].link + '">' + items[i].title + '</a></h4>',
                  '<p>' + description + '</p>'
              ].join('\n'))
          }
        }
      }
    })

    // Performs a smooth page scroll to an anchor on the same page.
    $('a.js-smooth-scroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']')

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000)

          return false
        }
      }
    })

  })

})()