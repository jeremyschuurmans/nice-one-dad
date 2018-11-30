function getJoke() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showJoke);
  req.open('GET', 'https://icanhazdadjoke.com/');
  req.setRequestHeader('Accept', 'application/json')
  req.send();
}

function showJoke() {
  console.log(this.responseText);
}
