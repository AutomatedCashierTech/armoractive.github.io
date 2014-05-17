$(document).ready(function () {

  $('[data-toggle="tooltip"]').tooltip()

  // Delegate lightbox functionality
  $(document).delegate('*[data-toggle="lightbox"]', 'click', function (e) {
    e.preventDefault()
    $(this).ekkoLightbox()
  })


})