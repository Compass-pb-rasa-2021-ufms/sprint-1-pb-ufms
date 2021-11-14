const jsdom = require("jsdom");
const { JSDOM } = jsdom;

global.document = new JSDOM(`<!DOCTYPE html>
<html style="font-size: 16px">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8" />
    <meta name="keywords" content="Simple Lyrics Sea​rch" />
    <meta name="description" content="" />
    <meta name="page_type" content="np-template-header-footer-from-plugin" />
    <title>Simple Lyrics Search</title>
    <link rel="stylesheet" href="nicepage.css" media="screen" />
    <link rel="stylesheet" href="Página-Inicial.css" media="screen" />
    <link
      id="u-theme-google-font"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
    />
    <link
      id="u-page-google-font"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Chakra+Petch:300,300i,400,400i,500,500i,600,600i,700,700i"
    />

    <meta name="theme-color" content="#478ac9" />
    <meta property="og:title" content="Página Inicial" />
    <meta property="og:description" content="" />
    <meta property="og:type" content="website" />
  </head>
  <body
    data-home-page="index.html"
    data-home-page-title="Página Inicial"
    class="u-body"
  >
    <header class="u-clearfix u-custom-color-2 u-header u-header" id="sec-5ef2">
      <div class="u-align-left u-clearfix u-sheet u-sheet-1"></div>
    </header>
    <section
      class="u-align-center u-clearfix u-custom-color-2 u-section-1"
      id="carousel_8fcf"
    >
      <div class="u-clearfix u-sheet u-sheet-1">
        <h2
          class="
            u-align-center u-custom-font u-text u-text-custom-color-3 u-text-1
          "
        >
          Simple Lyrics Sea​rch
        </h2>
        <div class="u-form u-form-1">
          <form
            action="#"
            method="POST"
            class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
            source="custom"
            name="form"
            style="padding: 10px"
          >
            <div class="u-form-group u-form-name">
              <label
                for="name-3509"
                class="u-form-control-hidden u-label"
              ></label>
              <input
                type="text"
                placeholder="Artist's name"
                id="artist"
                class="
                  u-border-1 u-border-grey-30 u-input u-input-rectangle u-white
                "
                required=""
              />
            </div>
            <div class="u-form-email u-form-group">
              <label
                for="email-3509"
                class="u-form-control-hidden u-label"
              ></label>
              <input
                type="text"
                placeholder="Song's name"
                id="song"
                class="
                  u-border-1 u-border-grey-30 u-input u-input-rectangle u-white
                "
                required=""
              />
            </div>
            <div class="u-align-center u-form-group u-form-submit">
              <input type="submit" id="search-button"value="Search"
                href="#"
                class="
                  u-active-white
                  u-btn
                  u-btn-round
                  u-btn-submit
                  u-button-style
                  u-custom-color-3
                  u-custom-font
                  u-hover-custom-color-4
                  u-radius-50
                  u-text-active-black
                  u-text-custom-color-2
                  u-text-hover-custom-color-3
                  u-btn-1
                "
              >
            </input>
            </div>
          </form>
          <div>
            <p id="Resultado" class="resultado"></p>
          </div>
        </div>
      </div>
    </section>
    <script src="main.js"></script>
    <footer
      class="u-align-center u-clearfix u-custom-color-3 u-footer u-footer"
      id="sec-c456"
    >
      <div class="u-clearfix u-sheet u-sheet-1">
        <p class="u-small-text u-text u-text-variant u-text-1">
          Simply enter the song's artist and name and voilà.<br />This page is
          powered by Lyrics.ovh, an Oracle Apiary API .
        </p>
        <img
          class="u-image u-image-default u-image-1"
          src="images/imageedit_4_4369027381.png"
          alt=""
          data-image-width="1200"
          data-image-height="630"
          data-href="https://lyricsovh.docs.apiary.io/"
          data-target="_blank"
        />
      </div>
    </footer>
  </body>
</html>
`).window.document;
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

/*FUNCIONAL SEM BROWSERIFY
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
*/

/*  //////////////////////PARA USAR NO NODE//////////////////////
var request = require("request");

request(
  "https://api.lyrics.ovh/v1/Coldplay/Viva la Vida",
  function (error, response, body) {
    console.log(JSON.stringify(response));
    const p = document.createElement("p");
    p.textContent = `${response}`;
  }
);
//////////////////////////////////////////////////////////////////
*/
