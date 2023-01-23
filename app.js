console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchButton = document.querySelector("#submitSearch");

//Exercise 2, 3 & 4:
searchButton.addEventListener("click", image1)

function image1() {  
const searchInput = document.querySelector("#searchWord"); 
const image = document.getElementById("mainImg"); 
const feedbackPara = document.querySelector("p"); 

fetch(`https://api.giphy.com/v1/gifs/translate?apiKey=FkSsLyryOouVNEBQC5k7E3wey46PQsD5&s=${searchInput.value}`)
.then((res) => {
    console.log(res); 
    const result = res.json();
    return result; 
})
.then((giphyDataBlob) => {
    // console.log(giphyDataBlob);
    console.log(image); 
    image.src = giphyDataBlob.data.images.original.url;  
    console.log(giphyDataBlob);
    searchInput.value = ""; 
    feedbackPara.textContent = ""; 
})
.catch((err) => {
    console.log(err);
    feedbackPara.textContent = err.message
})

}








