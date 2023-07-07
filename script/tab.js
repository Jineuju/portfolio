$(".tab>li").on("click", function(){
    $(".tab>li").on("click", function () {
        $(".tab>li").removeClass("on");
        $(".content>div").removeClass("on");
        $(this).addClass("on");
      
        var conId = $(this).children("a").attr("href");
        $(conId).addClass("on");
      });
})