







var questionArray = [];
var answerArray = [
    ["one", "two", "three"]
    []
];
var correctAnswersArray = [];
var counter = 0;
var correctAnswersCounter = 0;
var wrongAnswersCounter = 0;




$("#question")



























$("#buttonOne").on("click", function () {
    if (answerArray[counter][0] === correctAnswers[counter]){
        alert("correct");
    } else {
        alert("incorrect")
    }
})

$("#buttonTwo").on("click", function () {
    if (answerArray[counter][1] === correctAnswers[counter]){
        alert("correct");
    } else {
        alert("incorrect")
    }
})

$("#buttonThree").on("click", function () {
    if (answerArray[counter][2] === correctAnswers[counter]){
        alert("correct");
    } else {
        alert("incorrect")
    }
})