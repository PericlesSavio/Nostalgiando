$("a[href='#']").click(function() {
moving = true
  
  $("html, body").animate({ scrollTop: 0 }, 1000,function(){
     
     moving = false
    });
    return false;
});