$(function(){

    $('.back-to-top').each(function(){

        //html, body 스크롤 가능한 요소를 감지
        let $el = $(scrollableElement('html','boby'))

        //투탑 버튼 클릭 이벤트
        $(this).on('click', function(event){
            //기본 동작 취소
            event.preventDefault()
            $el.animate({scrollTop : 0}, 1000)
        })
    })
})

//scrollTop 을 사용할 수 있는 요소를 감지하는 함수
function scrollableElement (elements) {
    var i, len, el, $el, scrollable;
    for (i = 0, len = arguments.length; i < len; i++) {
        el = arguments[i],
        $el = $(el);
        if ($el.scrollTop() > 0) {
            return el;
        } else {
            $el.scrollTop(1);
            scrollable = $el.scrollTop() > 0;
            $el.scrollTop(0);
            if (scrollable) {
                return el;
            }
        }
    }
    return [];
}
