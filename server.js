const express = require('express'); // npm install express
const bodyParser = require('body-parser'); // npm install body-parser
const request = require('request') // npm install request deprecated talvez substituir por got
const got = require('got') // npm install got
const app = express();
const path = require('path')
const superagent = require('superagent');
// usa isso aqui pra poder passar o parâmetro
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(bodyParser.urlencoded({ extended: true })); 

// expondo a pasta publico que serve os arquivos staticos, como css/js/image
app.use(express.static(__dirname + '/public'));

// POST number
app.post('/example', (req, res) => {
	if (req.body.numero){
		console.log('com data')
		console.log('req.body.numero', req.body.numero)
		requestNumberAPI(4).then(function(data) { 
			console.log("data", data)
			translategot(data).then(function(translatedText){
				console.log('texto traduzido', translatedText)
				res.render(path.join(__dirname+'/number.html'), {textoEN: data, textoPT: translatedText});
			})
		});	
	} else {
		console.log('sem data')
		console.log('req.body.numero', req.body.numero)
		res.render(path.join(__dirname+'/number.html'), {textoEN: '', textoPT: ''});
	}
});

// GET number
app.get('/example', (req, res) => {
	//   res.render(__dirname + '/index', { message: 'test' })
	res.render(path.join(__dirname+'/number.html'));

	});

// GET number
// renderiza a pagina nova
app.get('/entediado', (req, res) => {
	res.render(path.join(__dirname+'/bored.html'));

	});

// GET number
app.post('/entediado', (req, res) => {
	console.log("response", req.body)

});



app.get('/', (req, res) => {
	//   res.render(__dirname + '/index', { message: 'test' })
	  res.sendFile(path.join(__dirname+'/index.html'));
	});

function jsonParser(stringValue) {
	var string = JSON.stringify(stringValue);
	var objectValue = JSON.parse(string);
	return objectValue['translatedText'];
}

const url = "http://numbersapi.com/";

// // usando request
// request(url, (error, response, body) => {
//    if (!error && response.statusCode == 200) {
//         console.log(body) 
//    }
// })

// usando got
// para fazer um request

// resolveBodyOnly

// Type: boolean
// Default: false

// When set to true the promise will return the Response body instead of the Response object.
async function requestNumberAPI(number){
	try {
		requestUrl = url + number
		console.log(requestUrl)
		const response = await got(requestUrl, {resolveBodyOnly: true});
		console.log(response)
		// console.log('got', response.statusCode, response.body);
		// console.log(typeof(response.body))
        return response
		//=> '<!doctype html> ...'
	} catch (error) {
		// console.log(ePromise.resolverror.response.body);
        return (error)
	}
};

// async function test() {
// 	await got("http://numbersapi.com/4")
// 	.then(response => {
// 		return response.body;
// 	})
// 	.catch(err => {
// 	debug(err);
// 	return err.response && err.response.body ? err.response.body : err
// 	})
// }

const port = 8080;
// var test = requestNumberAPI().then(response => { return response})

async function translate(text){
	try {
		const res = await superagent.post('https://libretranslate.de/translate')
		.send({q: text, source: "en", target: "es"});
		console.log(res.body);
	  } catch (err) {
		console.error(err);
	  }
};

async function atividade(){
	try {
		const res = await superagent.post('https://libretranslate.de/translate')
		.send({q: text, source: "en", target: "es"});
		console.log(res.body);
	  } catch (err) {
		console.error(err);
	  }
};


async function requestBoredAPI(){

	try {
		requestUrl = 'http://www.boredapi.com/api/activity'
		console.log(requestUrl)
		const response = await got(requestUrl, {
			searchParams: { 
				type: 'social', 
				maxprice: 0.4,
			},
			responseType: 'json',
			resolveBodyOnly: true
		});
		console.log("boredAPI", response)
		// console.log('got', response.statusCode, response.body);
		// console.log(typeof(response.body))
        return response
		//=> '<!doctype html> ...'
	} catch (error) {
		// console.log(ePromise.resolverror.response.body);
		console.log(error)
        return (error)
		//=> 'Internal server error ...'
	}
};
requestBoredAPI()

async function translategot(text){
	try {
		const {body} = await got.post('https://libretranslate.de/translate', {
					json: {q: text, source: "en", target: "pt"},
					responseType: 'json'
		});
		stringResponse = jsonParser(body)
		return stringResponse
	}
	catch (err) {
		// console.error(err);
		return err
	  }
};
translategot('this is a test')


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});