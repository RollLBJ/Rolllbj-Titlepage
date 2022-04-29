const clock = document.querySelector('#digital-clock');

function getClock() {
  const date = new Date();
  const hour = String(
    date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
  ).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const sec = String(date.getSeconds()).padStart(2, '0');
  clock.innerHTML =
    `<p>${date.getHours() < 12 ? '오전' : '오후'}</p>` +
    `<p>${hour}:${min}:${sec}</p>`;
}
getClock();
setInterval(getClock, 1000);
