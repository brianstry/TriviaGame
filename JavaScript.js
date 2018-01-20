







var questionArray = [];
var answerArray = [
    ["one", "two", "three"]
    []
];
var correctAnswersArray = [];
var counter = 0;
var correctAnswersCounter = 0;
var wrongAnswersCounter = 0;
var timeOutAnswers = 0;






function moreQuestions(){
    if(counter === correctAnswersArray.length){
        alert("trivia complete!");
    } else {
        eachRound();
    }
}

function eachRound(){

    $("#question").text(questionArray[counter]);
    $("#buttonOne").text(AnswerArray[counter][0]);
    $("#buttonTwo").text(AnswerArray[counter][1]);
    $("#buttonThree").text(AnswerArray[counter][2]);

    setTimeout(timeOut, 1000 * 60);

}

function timeOut(){
    timeOutAnswers++;
    counter++;
    moreQuestions();
}




$("#buttonOne").on("click", function () {
    if (answerArray[counter][0] === correctAnswers[counter]){
        alert("correct");
        correctAnswersCounter++;
        counter++;
        moreQuestions();
    } else {
        alert("incorrect")
        wrongAnswersCounter++;
        counter++;
        moreQuestions();
    }
})

$("#buttonTwo").on("click", function () {
    if (answerArray[counter][1] === correctAnswers[counter]){
        alert("correct");
        correctAnswersCounter++;
        counter++;
        moreQuestions();
    } else {
        alert("incorrect")
        wrongAnswersCounter++;
        counter++;
        moreQuestions();
    }
})

$("#buttonThree").on("click", function () {
    if (answerArray[counter][2] === correctAnswers[counter]){
        alert("correct");
        correctAnswersCounter++;
        counter++;
        moreQuestions();
    } else {
        alert("incorrect")
        wrongAnswersCounter++;
        counter++;
        moreQuestions();
    }
})