const rates = document.querySelectorAll('.rate');
let rate;

function changeStyle(num) {
  for (let i = 0; i < 5; i++) {
    if (Number(num) == i + 1) {
      rates[i].style = 'color: white; background: hsl(216, 12%, 54%);';
      rate = rates[i];
    } else {
      rates[i].style = '';
    }
  }
}

function submitHandler() {
  document.querySelector('#rate-card').classList.add('hide');
  document.querySelector('#result').classList.add('show');
  document.querySelector(
    '.label'
  ).textContent = `You selected ${rate.textContent} out of 5`;
}
