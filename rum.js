$(document).ready(function() {
    $('#btn1').click(function() {
      $('#btn1').addClass('hidden');
      window.location.href = "index2.html";
    });

    $('#btn2').click(function() {
      $('#btn2').addClass('hidden');
      $('#btn1').removeClass('hidden');
    });
   
  });