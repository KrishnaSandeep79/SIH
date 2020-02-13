$(document).ready(function(){
    $('form').on('submit', function(){

        var d = $('#date');
        var f = new Date(d.val());
        var login = {d:f};
        $.ajax({
          type: 'POST',
          url: '/attendance',
          data: login,
          success: function(data){
            alert("sucess");
            window.location.href="/attendance";
          },
          error: function(){
            alert('no people present');
            location.reload();
          }
        });
        return false;
    });
  });
