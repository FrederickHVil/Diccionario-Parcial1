var respuesta = [];

document.getElementById("search").onclick = function() {

    let word = {
        wordInput: document.getElementById("word-input").value

    };

    console.log(word);
}

fetch('https://api.dictionaryapi.dev/api/v2/entries/en/red')
    .then(response => response.json())
    .then(data => {


        let respuesta = document.getElementById("mostrar")
        respuesta.innerHTML = `<p>${data.definition}</p>`

        console.log(data)

    });



