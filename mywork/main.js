

//버튼0을 누르면,
// 버튼 0,1,2 하이라이트 없애고,
// 버튼0이 하이라이트됨
// 내용 0,1,2 안보이고
// 내용 0이 보임
var tabBtn = document.querySelectorAll('.tab-button');
var tabCon = document.querySelectorAll('.tab-content');


// 버블링을 이용하여 이벤트리스너를 1개만 써서 개발
document.querySelector('ul.list').addEventListener('click',function(e){
//   만약에 지금 누른게, 버튼0이면, 버튼하이라이트(0), 탭보여주기(0)
//   만약에 지금 누른게, 버튼1이면, 버튼하이라이트(1), 탭보여주기(1)

    버튼하이라이트(e.target.dataset.id);
    탭보여주기(e.target.dataset.id);
    
});


/*
for(let i=0; i<3; i++){
    tabBtn[i].addEventListener('click',function(){
        
        버튼하이라이트(i);
        탭보여주기(i);
       
    });
}
*/

//위의 반복문을 함수화 시키기 (가독성을 위해)
function 버튼하이라이트(i){
        tabBtn[0].classList.remove('active');
		tabBtn[1].classList.remove('active');
		tabBtn[2].classList.remove('active');
        tabBtn[i].classList.add('active');
}

function 탭보여주기(i){
        tabCon[0].classList.remove('show');
        tabCon[1].classList.remove('show');
		tabCon[2].classList.remove('show');
        tabCon[i].classList.add('show');
}







