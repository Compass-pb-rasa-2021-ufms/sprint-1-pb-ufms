function showCharacter(lista)
{
	let num = 1
	let character = lista[num]
	
	let image = document.querySelector("img")
	image.src = character.image
}

async function start()
{
	try{	
		const response = await fetch("https://hp-api.herokuapp.com/api/characters")
		const lista = await response.json()
		showCharacter(lista)
	}
	catch(error){	
		console.log("Putz...")
	}
}

start()