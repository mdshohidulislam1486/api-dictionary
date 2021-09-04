const loadWord = ()=>{
    const search = document.getElementById('search');
    const searchText= search.value;
    const URL = (`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`)

    fetch(URL)
    .then(res => res.json())
    .then(data => dispalyDetails(data[0]))
}

const dispalyDetails=des=>{
    document.getElementById('sound')
    console.log(des.phonetics[0].audio)

}