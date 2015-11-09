$(document).ready(function(){

$('#contact-submit').on('click', function(){
  $name = $('#name-input').val();
  $email = $('#email-input').val();
  $message = $('#message-input').val();
  $.ajax({
          type: 'POST',
          url: 'http://www.mariaschettino.com/contact',
          data: ({name: $name, email: $email, message: $message}),
          dataType: 'json',
          headers: {origin: 'good'}
      }).done (function(data){
        console.log(data);
      });
})
});

