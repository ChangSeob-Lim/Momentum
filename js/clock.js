const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 웹페이지가 실행되자마자 함수 호출하여 시간 초기화
getClock();

// ms초 이후에 실행(계속)
setInterval(getClock, 1000);

// ms초 이후에 실행(한번만)
// setTimeout(getClock, 5000);
