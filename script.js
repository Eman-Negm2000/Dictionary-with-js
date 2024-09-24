
let result=document.getElementById('result')
let sound=document.getElementById('sound')
let btn=document.getElementById('search-btn')

btn.addEventListener('click' ,async ()=> {

    let inpWord=document.getElementById('inp-word').value;

    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpWord}`)
    console.log(response)

    let data= await response.json();
    console.log(data)
  try{
    result.innerHTML=`
    <div class='word'>
        <h3>${inpWord}</h3>
        <button>
           <i class="fas fa-volume-up"></i>
        </button>
    </div>

    <div class="details">
       <p>${data[0].meanings[0].partOfSpeech}</p>
       <p>${data[0].phonetic}</p>
    </div>
    <p class="word-meaning">
       ${data[0].meanings[0].definitions[0].definition}
    </p>
   
    <p class="word-example">
    ${data[0].meanings[0].definitions[0].example || ""}
 </p> 
 `
 
  }

  catch{
    result.innerHTML=`<h2 class="error">Couldnt Find The Word</h2>`
  }
    



})














