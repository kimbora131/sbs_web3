
$(function() {

    const intervalTime = 5000
    const fadeTime = 2000

    //:gt(index)
    // - index 보다 큰 번호의 요소들을 선택
    // 첫 번째 사진 제외하고 숨김
    $('#slide > div:gt(0)').hide()

    setInterval(function(){
        //슬라이드 박스의 첫번째 자식요소 선택
        $('#slide > div:first')
        
        .fadeOut(fadeTime)                  //1000ms 동안 서서히 사라지게 하는 메서드
        .next()                         //선택한 요소의 다음 요소를 선택하는 메서드
        .fadeIn(fadeTime)                   //1000ms 동안 서서히 나타나게 하는 메서드
        .end()                          //현재 선택한 요소의 이전 요소를 선택하는 메서드
        .appendTo('#slide');            //선택한 요소를 지정한 부모요소의 마지막 자식 요소로 추가한다
    }, intervalTime)    
})