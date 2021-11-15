	
// por uma questão de usabilidade o front atua com valores de 0 a 100
// ao inves de 0.00 até 1.00, por isso deve haver uma conversão ao receber os parametros
function treatsBoredApiInput(searchParams) {
	var objectValue = searchParams

	// não existem atividade com 0 participantes
	if (objectValue['participants'] == 0){
		objectValue['participants'] = 1
	}
	
	// se o numero de preco minimo existir realiza a divisão por 100
	// para que esse numero esteja de acordo com o definido pela API
	if (objectValue['minprice']){
		objectValue['minprice'] = objectValue['minprice']/100
	}
	if (objectValue['maxprice']){
		objectValue['maxprice'] = objectValue['maxprice']/100
	}

	if (objectValue['minaccessibility']){
		objectValue['minaccessibility'] = objectValue['minaccessibility']/100
	}

	if (objectValue['maxaccessibility']){
		objectValue['maxaccessibility'] = objectValue['maxaccessibility']/100
	}
	return objectValue
}

module.exports = { treatsBoredApiInput }