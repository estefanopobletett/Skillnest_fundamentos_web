let botnlike1 = document.querySelector("#botnlike");
let likes1 = document.querySelector("#likes");

botnlike1.addEventListener("click", function () {
    let contador = parseInt(likes1.innerText);
    likes1.innerText = contador + 1;
});

let botnlike2 = document.querySelector("#botnlike2");
let likes2 = document.querySelector("#likes2");

botnlike2.addEventListener("click", function () {
    let contador = parseInt(likes2.innerText);
    likes2.innerText = contador + 1;
});

let botnlike3 = document.querySelector("#botnlike3");
let likes3 = document.querySelector("#likes3");

botnlike3.addEventListener("click", function () {
    let contador = parseInt(likes3.innerText);
    likes3.innerText = contador + 1;
});