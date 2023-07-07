var $panel = $(".banner > .panel");
var $next = $(".btn > .next");
var $prev = $(".btn > .prev");

$next.on("click", function(e){
    e.preventDefault();
    next_web()
});

$prev.on("click", function(e){
    e.preventDefault();
    prev_web()
});

// 패널 다음 이동 함수
function next_web(){
    $panel.stop().animate({"margin-left" : "-50%"}, 500, function(){
        $panel.children("li").first().appendTo($panel);
        $panel.css({"margin-left" : "-25%"})
    });
}

// 패널 이전 이동 함수
function prev_web() {
    $panel.stop().animate({ 'margin-left': '0%' }, 500, function () {
        $panel.children('li').last().prependTo($panel);
        $panel.css({ 'margin-left': '-25%' });
    });
}