async function app() {
  let result = await fetch('https://api.adviceslip.com/advice');
  const data = await result.json();
  const { id, advice } = data.slip;
  document.querySelector('#advice-number').innerHTML = id;
  document.querySelector('#generated-text').innerHTML = `“ ${advice} ”`;
}
