function getJoke() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showJoke);
  req.open('GET', 'https://icanhazdadjoke.com/');
  req.setRequestHeader('Accept', 'application/json');
  req.send();
}

function showJoke() {
  const joke = JSON.parse(this.responseText);

  document.getElementById("dadJoke").innerHTML = joke["joke"];
}
