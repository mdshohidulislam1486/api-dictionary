const loadWord = ()=>{
    const search = document.getElementById('search');
    const searchText= search.value;
    const URL = (`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`)

    fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data[0]))
}