var btn = document.querySelector("#btn");
var head = document.querySelector("#head");
var height = document.querySelector("#height");
var mass = document.querySelector("#mass");
var hairColor = document.querySelector("#hair-color");
var skinColor = document.querySelector("#skin-color");
var eyeColor = document.querySelector("#eye_color");
var birthYear = document.querySelector("#birth_year");
var gender = document.querySelector("#gender");
var homeHref = document.querySelector("#home");
var image = document.querySelector("#image");
var spinner = document.getElementById("spinner");
var spin = document.querySelector(".spin");

btn.addEventListener("click", function () {

    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var url = "https://swapi.co/api/people/" + randomNumber;
    setTimeout(myTimeOut, 0);
    fetch(url)

        .then(function (res) {

            return res.json();

        })
        .then(function (data) {
            if (data) {
                setTimeout(clearTime, 100);
            }
            head.textContent = data.name;
            height.textContent = data.height;
            mass.textContent = data.mass;
            hairColor.textContent = data.hair_color;
            skinColor.textContent = data.skin_color;
            eyeColor.textContent = data.eye_color;
            birthYear.textContent = data.birth_year;
            gender.textContent = data.gender;
            homeHref.textContent = data.homeworld;
            homeHref.src = data.homeworld;

        }).then(function (err) {

        })

});

function myTimeOut() {
    spinner.className = "spiner";
    spin.classList.add("add")
}
function clearTime() {
    spinner.className = "clear";
    spin.classList.remove("add");
}