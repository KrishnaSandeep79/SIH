$(document).ready(function(){
    $('#submit').on('click', function(){

        var username = $('#username');
        var email = $('#emailid');
        var password = $('#password');
        var guid = $('#guid');
        var signup = {username: username.val(),emailid: email.val(),guid:guid.val()};

        $.ajax({
          type: 'POST',
          url: '/signup',
          data: signup,
          success: function(data){
            alert('enroll sucessfull, now login');
            window.location='http://127.0.0.1:3000/'
          },
          error: function(){
            alert('username already exist, please enter another username');
            location.reload();
          }
        });
        return false;
    });
  });
