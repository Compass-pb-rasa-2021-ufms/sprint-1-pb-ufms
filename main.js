/*var request = require("request");

request(
  "https://api.lyrics.ovh/v1/Coldplay/Viva la Vida",
  function (error, response, body) {
    console.log(JSON.stringify(response));
    const p = document.createElement("p");
    p.textContent = `${response}`;
  }
);*/

const searchButton = document.getElementById("search-button");

const sendHTTPRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open(method, url);

    request.onload = () => {
      resolve(request.response);
    };
    request.send();
  });
  return promise;
};

const getData = (e) => {
  e.preventDefault();
  var artist = document.getElementById(`artist`).value;
  var song = document.getElementById(`song`).value;
  sendHTTPRequest("GET", `https://api.lyrics.ovh/v1/${artist}/${song}`).then(
    (responseData) => {
      let resultado = JSON.parse(responseData);
      console.log(resultado);
      document.getElementById("Resultado").innerHTML = resultado.lyrics;
    }
  );
};

searchButton.addEventListener("click", getData);

/*
var request = new XMLHttpRequest();
request.open("GET", `https://api.lyrics.ovh/v1/${artist}/${song}`);

request.onreadystatechange = function () {
  var artist = document.getElementById(`artist`).value;
  var song = document.getElementById(`song`).value;

  if (this.readyState === 4) {
    console.log("Status:", this.status);
    console.log("Headers:", this.getAllResponseHeaders());
    console.log("Body:", this.responseText);
    let resultado = JSON.parse(this.responseText);

    document.getElementById("Resultado").innerHTML = resultado.lyrics;
  }
};

request.send();*/
