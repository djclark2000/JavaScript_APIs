function displayCatImage(){
    const showGifButton = document.getElementById("showGifButton");
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=FkSsLyryOouVNEBQC5k7E3wey46PQsD5&s=${searchInput.value}`)
    
    //First, we receive a responce object
    .then((res) =>{
        console.log(res);
        //We want to parse (read and Understand) the body from it
        const result = res.json(); 
        console.log(result);
        return result; 
    })
    //Then we receive the data off of that body property
    .then ((giphyDataBlob) => {
        const imgHolder = document.getElementById("gif"); 
        //We access the specific data/info that we want
        //and use as needed in our web app
        imgHolder.src = giphyDataBlob.data.images.original.url;
        console.log(giphyDataBlob);
    })
    .catch((err) => {
        console.log(err);
    })
}


const searchInput = document.getElementById("searchText"); 

showGifButton.addEventListener("click", displayCatImage); 

