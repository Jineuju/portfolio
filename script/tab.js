
$(".tab>li").on("click", function () {
  $(this).on("click", function () {
    $(this).removeClass("on");
    $(".content>div").removeClass("on");
    $(this).addClass("on");

    var conId = $(this).attr("data-id");

    $(conId).addClass("on");
  });
})




