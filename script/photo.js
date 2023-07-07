window.addEventListener("load", ()=>{
    const grid = new Isotope("section", {
        itemSelection : "article",
        columnWidth : "article",
        transitionDuration : "0.5s"
    });

    let btns = document.querySelectorAll(".photo > .inner > ul > li")

    for(let el of btns){
        el.addEventListener("click", (e)=>{
            e.preventDefault();
            // 버튼 클릭할 때 a태그 속성 안에 변수 담기
            // sort : 정렬
            let sort = e.currentTarget.querySelector("a").getAttribute("href");
            // grid를 호출해서 filter를 적용한 값들만 보여지기
            // arrange : 오름차순
            grid.arrange({
                filter : sort
            })
            for (let el of btns) { el.classList.remove("on"); }
            e.currentTarget.classList.add("on");
        });
    };
});