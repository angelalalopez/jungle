$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.getScript('/products?search=' + searchValue);
  });
});

$(document).on('ready', function() {
  $(window).scroll(function() {
     var url = $('.pagination span.next').children().attr('href');
     console.log($(document).height() - $(window).height());
     if ( url && $(window).scrollTop() > $(document).height() - $(window).height() - 250 ) {
       $('.pagination').text("Fetching more products...");
       return $.getScript(url);
     }
  });
});