const sounds = {
    "w": "sounds/tom-1.mp3",
    "a": "sounds/tom-2.mp3",
    "s": "sounds/tom-3.mp3",
    "d": "sounds/tom-4.mp3",
    "j": "sounds/snare.mp3",
    "k": "sounds/crash.mp3",
    "l": "sounds/kick-bass.mp3"
}

document.querySelectorAll(".drum").forEach(d => d.addEventListener("click", function () {
    console.log(d.innerHTML); // console.log(d.textContent)
    makeSound(d.innerHTML);
    buttonAnimation(d.innerHTML)
}))

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    var audio = new Audio(sounds[key]);
    audio.play();
}

function buttonAnimation(key) {
    var buttonActive = document.querySelector("." + key);
    buttonActive.classList.add("pressed")
    setTimeout(function () {
        buttonActive.classList.remove("pressed")
    }, 100);
}