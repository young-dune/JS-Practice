const date = document.querySelector('.date');

function getDate(){
    const today = new Date();
    const years = today.getFullYear();
    const months = today.getMonth()+1; 
    const dates = today.getDate();
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const days = week[today.getDay()]

    date.innerText = `${years}년 ${months}월 ${dates}일 ${days}`;
}

getDate();