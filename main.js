const rates = document.querySelectorAll('.rate');

rates.forEach((rate) =>
  rate.addEventListener('click', () => {
    rate.classList.remove('selected');
    if (!rate.classList.contains('selected')) {
      rate.classList.add('selected');
    }
  })
);
