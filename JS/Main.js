let pictures = [];

const part1Answer = document.querySelectorAll("input[name='answer1']");
const part2Answer = document.querySelectorAll("input[name='answer2']");
const part3Answer = document.querySelectorAll("input[name='answer3']");
const part4Answer = document.querySelectorAll("input[name='answer4']");
const part5Answer = document.querySelectorAll("input[name='answer5']");
const part6Answer = document.querySelectorAll("input[name='answer6']");
const part7Answer = document.querySelectorAll("input[name='answer7']");
const part8Answer = document.querySelectorAll("input[name='answer8']");

/*const picture1Answer = document.querySelectorAll("src[name='answer1']");
picture1Answer.addEventListener("click", addPicture);*/


/*
addPicture("img/cpu.png", "Bild på CPU", document.querySelector("#content-root"));
addPicture("img/gpu.png", "Bild på GPU", document.querySelector("#content-root"));

function addPicture(source, alt, location)
{
    let newPicture = document.createElement("img");
    newPicture.setAttribute("src", source);
    newPicture.setAttribute("alt", alt);
    location.appendChild(newPicture);
}

changePicture("my-picture", "img/newPicture.png", "a new nice picture");

function changePicture(id, src, alt) {
    document.getElementById(id).setAttribute("src", src);
    document.getElementById(id).setAttribute("alt", alt);
} */


const questions = document.querySelectorAll(".question");
let currentQuestion = 0;


const nextButton = document.querySelector("#next-component");
nextButton.addEventListener("click", nextComponent);

const previousButton = document.querySelector("#previous-component");
previousButton.addEventListener("click", previousComponent)

function hideAllQuestions () {
    
}

function nextComponent()    {
    if (currentQuestion < questions.length - 1)
    {
        questions[currentQuestion].style.display = "none";
        currentQuestion ++;
        console.log(currentQuestion);
        questions[currentQuestion].style.display = "block";

        previousButton.disabled = false;

    }
    else
    {
        nextButton.disabled = true;
    }
}

function previousComponent()    {
    
    if (currentQuestion > 0) {
        questions[currentQuestion].style.display = "none";
        currentQuestion --;
        questions[currentQuestion].style.display = "block";

        nextButton.disabled = false;
    }
    else
    {
        previousButton.disabled = true;
    }
}