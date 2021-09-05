const loadWord = ()=>{
    const search = document.getElementById('search');
    let searchText= search.value;
    if(search.value = ''){
        return
    }
    search.value= '';
    const URL = (`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`)

    fetch(URL)
    .then(res => res.json())
    .then(data => play(data[0])).catch(error =>{
        console.log(error)
    })
    play('')
}



 const play=des=>{
    document.getElementById('sound').addEventListener('click', function(){
    let audio = new Audio(des.phonetics.audio);
    audio.play();
    })
  
}

const dispalyWord = () =>{
    const card = document.getElementById('card');
    const div = document.createElement('div');
 
 
    card.appendChild(div)
}