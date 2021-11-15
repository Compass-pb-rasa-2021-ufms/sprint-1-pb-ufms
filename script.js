function showCharacter(character)
{
	let image = document.querySelector("[data-img]")
	let name = document.querySelector("[data-name]")
	let casa = document.querySelector("[data-casa]")
	image.src = character.image
	name.innerHTML = character.name
	casa.innerHTML = character.house
}

async function getCharacter(cont)
{
	try{	
		const response = await fetch("https://hp-api.herokuapp.com/api/characters")
		const lista = await response.json()
		let character = lista[cont]
		showCharacter(character)
	}
	catch(error){	
		console.log("Putz...")
	}
}

async function start()
{
	getCharacter(0)
	for(let i=1; i<15; i++)
		await new Promise(resolve => setTimeout(() => resolve(getCharacter(i)), 3000))
}

start()