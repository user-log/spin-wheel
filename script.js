jQuery(function($){
  $(document).ajaxSend(function() {
    $("#overlay").fadeIn(300);　
  });
    
  $('#button').click(function(){
    $.ajax({
      type: 'GET',
      success: function(data){
        console.log(data);
      }
    }).done(function() {
      setTimeout(function(){
        $("#overlay").fadeOut(300);
      },500);
    });
  }); 
  setTimeout(function() {   //calls click event after a certain time
    $(location).attr('href','https://www.example.com')
 }, 3000);

});
