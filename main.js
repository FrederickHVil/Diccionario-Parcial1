var wordToSearch = [];

document.getElementById("search").onclick = function() {

    let word = {
        wordInput: document.getElementById("word-input").value

    };

    let tr = document.createElement("tr");
    //tr.setAttribute("id");

    let tdId = document.createElement("td");
    tr.appendChild(tdId);

    Object.keys(word).forEach((key) => {
        console.log(key);

        let td = document.createElement("td");
        td.innerHTML = word[key];

        tr.appendChild(td);
    } );

    document.getElementById("body-table").appendChild(tr);

    console.log(word);
}

fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
    .then(response => response.json())
    .then(data => {


    });



