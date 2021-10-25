const container = document.querySelector('.container');
const numberInput = document.getElementById('number');
const btn = document.getElementById('check-btn');
const attempts = document.getElementById('number-attempts');
const dpImg = document.getElementById('dead-pool');
const guide = document.getElementById('guide');

const randomNum = Math.floor(Math.random() * 100);
let counter = 0;
console.log(randomNum);
function validation() {
  let num = numberInput.value;
  num = parseInt(num);
  console.log(typeof num);

  if (isNaN(num) || num > 100 || num <= 0) {
    alert('Enter a valid input!');
  } else {
    counter++;
    attempts.innerHTML = `Number of attempts ${counter}`;
    if (num === randomNum) {
      guide.innerHTML = 'Congrats!';
      btn.style.display = 'none';
      const replayBtn = document.createElement('button');
      replayBtn.innerHTML = 'Replay';
      replayBtn.classList.add('replay-btn');
      replayBtn.addEventListener('click', () => {
        location.reload();
      });
      dpImg.style.display = 'block';
      container.appendChild(replayBtn);
    } else if (num < randomNum) {
      guide.innerHTML = 'Closer, but you should increase the number!';
    } else if (num > randomNum) {
      guide.innerHTML = 'Closer, but you should decrease the number!';
    }
  }
}

btn.addEventListener('click', () => {
  validation();
});
