const input = document.getElementById('search-quan-intput');
const btn = document.getElementById('search-btn');

btn.addEventListener('click', startSearching);

function startSearching(){
    let inputValue = input.value
    for (let i = 0; i < inputValue; i++){
        const wordRequest = new XMLHttpRequest();
        wordRequest.addEventListener('readystatechange', function(event){
            if (event.target.readyState === 4 && event.target.status === 200){
                let word = JSON.parse(event.target.responseText);
                window.open(`https://www.bing.com/search?q=${word[0].replace(" ", "+")}`, "_blank");
                // window.open(event.target.responseText)
            }
        });
        wordRequest.open('GET', 'https://random-word-api.herokuapp.com/word');
        wordRequest.send();
    }
}
