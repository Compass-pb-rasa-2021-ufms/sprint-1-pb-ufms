const axios = require("axios")

function getCharacter(name, database)
{
	let character = database.filter(function(character) {
		return character.name == name
	})

	console.log(character)
}

axios.get("https://hp-api.herokuapp.com/api/characters")
	.then(response => {
		const database = response.data
		getCharacter("Harry Potter", database)
	})
	.catch(error => {
		console.log(error)
	})
	
