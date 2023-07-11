$(document).ready(function() {
    $("#btn").click(function(){
        $('#joke').removeClass('fade');
        const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
        fetch(url)
        .then(data => data.json())
        .then(item =>{
            $('#joke').text(`${item.joke}`);
            $('#joke').addClass('fade');
            //jokeContainer.textContent = `${item.joke}`;
            //jokeContainer.classList.add("fade");
        });
    });
});
