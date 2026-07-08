/* ============================
   SENA SUCCESS
   ============================ */

// 입장코드 (ASCII 코드)
// 나중에 비밀번호를 바꾸려면 이 숫자만 변경하면 됨.
const x = [49,49,50,50,51,51];   // 112233
const y = [51,51,50,50,49,49];   // 332211 (관리자)

// 문자열 생성
const z = t => String.fromCharCode(...t);

// 로그인
function a(){

    const b = document.getElementById("code").value;

    if(b === z(x)){

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("menuPage").style.display = "block";

    }else{

        alert("코드가 틀렸습니다.");

    }

}

// 관리자
function c(){

    const d = prompt("관리자 비밀번호");

    if(d === z(y)){

        location.href = "admin.html";

    }else if(d !== null){

        alert("비밀번호가 틀렸습니다.");

    }

}

// HTML에서 호출하기 위해 등록
window.login = a;
window.adminLogin = c;