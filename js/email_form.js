var $form = $('form#email-form'),
    url = 'https://script.google.com/macros/s/AKfycbzFTgPRJ8XBpg_TjJdztK_80QDJbC9vFTMV62A5W7PoWdS8HHgUK-h8LFBT_U-9qF55/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})


document.addEventListener('DOMContentLoaded', function() {
                // Question 1
                let form_response = document.querySelector('#form_response');
                let form_submit = document.querySelector('#submit_form');
                form_submit.onclick = function() {
                    form_response.innerHTML = 'Thanks!';
                }; })