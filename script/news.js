// 1번째
$(".con>li>a>img").eq(0).on("click", function(){
    $(".popupBg, .popup").show();
});
$("#close").on("click", function(){
    $(".popupBg, .popup").hide();
});

$(".con>li>div>h2").eq(0).on("click", function(){
    $(".popupBg, .popup").show();
});
$("#close").on("click", function(){
    $(".popupBg, .popup").hide();
});
