$(document).ready(function(){
    $('#login').on('click', function(){

        var username = $('#username');
        var password = $('#password');
        var guid = $('#guid');
        var login = {username: username.val(),guid:guid.val()};
        $.ajax({
          type: 'POST',
          url: '/',
          data: login,
          success: function(data){
            alert('recognized sucessfully');
          },
          error: function(){
            alert('voice not recognized');
            location.reload();
          }
        });
        return false;
    });
    $('#record').on('click', function(){
        var username = $('#username');
        var login = {username: username.val()};
        $.ajax({
          type: 'POST',
          url: '/getGUID',
          data: login,
          success: function(data){
            window.location='http://127.0.0.1:3000/getGUID';
          },
          error: function(){
            alert('bye');
            location.reload();
          }
        });
        return false;
    });
  });
