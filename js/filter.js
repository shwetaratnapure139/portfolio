$("[data-filter='All']").click(function(e){
    $(".box").fadeIn();
  });
  
  $("[data-filter='House']").click(function(e){
    $(".box").fadeOut();
    $("[data-box='house']").fadeIn();
  });
  
  $("[data-filter='Book']").click(function(e){
    $(".box").fadeOut();
    $("[data-box='book']").fadeIn();
  });
  
  $("[data-filter='Red']").click(function(e){
    $(".box").fadeOut();
    $("[data-box='red']").fadeIn();
  });