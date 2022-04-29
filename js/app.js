const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const link = document.querySelector('a');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
// Data from localStorage
const savedUsername = localStorage.getItem('username'); // 새로고침이 되면 로컬 스토리지에 있는 데이터를 받아옴 (없을 경우 null 들어옴)

function onLoginSubmit(event) {
  event.preventDefault(); // 새로고침 방지(기본 동작 방지)
  const typedUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, typedUsername); // 로컬 저장소에 데이터 저장
  loginForm.classList.add(HIDDEN_CLASSNAME); // 이름을 입력받았으니 입력 폼을 안보이게 숨김
  paintGreetings(typedUsername); // 인사말을 출력하는 함수에 입력받은 이름을 넘겨줌
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME); // 인사말 태그(h1)을 보이게 하고
  greeting.innerText = `안녕하세요 ${username}님`; // 인사말 텍스트를 innerText로 추가한다.
}

if (savedUsername === null) {
  //저장된 이름이 없을 경우
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
  // 저장된 유저 이름이 없다면 입력을 받아야 하므로 form에 hidden 옵션을 제거한다.
  // 로그인 폼에 제출 이벤트 함수를 등록한다.
} else {
  // show the greeting
  paintGreetings(savedUsername); // 저장된 이름이 있다면 (!=null) 인사말을 출력함.
}
