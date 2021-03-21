var $form = $('form#email_form'),
    url = 'https://script.google.com/macros/s/AKfycbzFTgPRJ8XBpg_TjJdztK_80QDJbC9vFTMV62A5W7PoWdS8HHgUK-h8LFBT_U-9qF55/exec'

$('#form_submit').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success( function(result) {
      $("form.email_form").css('display', 'none'); //hide form
      alert('Thank you for your Contacting us'); //show thank you message
    } 
  );
})