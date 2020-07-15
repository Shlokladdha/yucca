$(document).ready(function(){
  $(window).resize(function(){location.reload();});
  if($(window).width() < 768){
    $('.menu-icon').click(function(){
      $('ul').slideToggle();
      $('ul ul').css('display', 'none');
    });

    $('ul li').click(function(){
      $(this).siblings().find('ul').slideUp();
      $(this).find('ul').slideToggle();
    });
  }
  else{
      $("ul").removeAttr('style');
  };
});

function searchfunction(){
  var input,convert,one,two;
  input = document.getElementById("theinput");
  convert = input.value.toUpperCase();
  one = document.getElementById("wrapper");
  two = one.getElementsByClassName("col-5");

  for(i=0; i<two.length; i++){
    span = two[i].getElementsByTagName("span")[0];
    if(span.innerHTML.toUpperCase().indexOf(convert) > -1){
      two[i].style.display = "";
    }
    else{
      two[i].style.display = "none";
    }
  }
}

