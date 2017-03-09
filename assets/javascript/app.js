$(document).ready(function() {

    var correctAnswer;
    var questions;
    var wrongAnswers;
    var timer;
    var incorrectAnswer;
    var setInvervalId;
    var wonGame;
    var quest = 0;

    //start the game by clicking on the button

    function startScreen() {
        $(".start-button").click(function() {
            $(this).hide(2000, function() {
                $(this).remove();
            });
        });

    }

    startScreen();

    $("body").on("click", ".start-button", function(event) {
        generateHTML();
        startTimer();


    });

    //generating HTML for questions and answers

    function generateHTML() {
        gameHTML =
            "<p class='text-center'>" + questionsAndAnswers[quest].question + "</p>";
        $(".mainSection").html(gameHTML);
        $("#time-left").text("Time Left: ");

        for (var i = 0; i < questionsAndAnswers[quest].answer.length; i++) {

            var button = $("<button>");

            button.text(questionsAndAnswers[quest].answer[i]);

            $("#choices-div").append(button);

            

        }



    }


    //create an event for when the correct/wrong answer is clicked 


    $('#choices-div').on('click', 'button', function(e) {
        userPick = $(this).html();


        if (userPick != correctAnswers[quest]) {
            $('#choices-div').html("Wrong Answer!");

             


            incorrectAnswer++;
            quest++;
            generateHTML();

        } else if (userPick === correctAnswers[quest]) {
            $('#choices-div').html("Correct!");
            correctAnswer++;
            quest++;
            generateHTML();
        }
    });

    function display() {

    }






    //Timer Controls

    function startTimer() {

        var timeLeft = 30;
        var elem = document.getElementById('display');

        var setIntervalId = setInterval(countdown, 1000);

        var $startDiv = $('#start');

        function countdown() {
            if (timeLeft === 0) {
                clearInterval(setIntervalId);
                timeLeft = 30;
                elem.innerHTML = '';
                $startDiv.html("Sorry, you ran out of Time");

                    

                    setTimeout(function() {
                        $startDiv.empty();
                        setIntervalId = setInterval(countdown, 1000);
                    }, 2000);
                } else {
                    timeLeft--;
                    elem.innerHTML = timeLeft + ' Seconds Remaining';

                
            }
                

        }
        //This resets the timer for each question
           var resetOnClick = setInterval(countdown, 1000);
            $('#choices-div').on('click', 'button', function(e) {
                clearInterval(setIntervalId);
                timeLeft = 30;
                elem.innerHTML = '';}
                )
    }




    //var noTime = $('#start').html("Sorry, you ran out of Time");
    //setTimeout(function() {
    //noTime.text("");
    //}, 2000);



    //clearTimeout(setIntervalId);
    // } else {
    //elem.innerHTML = timeLeft + ' Seconds Remaining';
    //timeLeft--;



    //}
    // }
    // }


    //trying to keep score of correct and wrong answers
    function wonGame() {

        if (correctAnswer < 3) {
            $('#choices-div').text("You Lost!");
        } else if (correctAnswer == 3) {
            $('#choices-div').text("You Won");
        }
    };


    //restart the game 
    function restartGame() {
        document.location.reload();
    }

    //questions for the games 
    var questionsAndAnswers = [{
            question: "Why was the Doctor's companion, Clara's, leaf so important?",
            answer: [
                "It was her key to a new world",
                "It was how her parents met",
                "It represented her and the Doctor's relationship",
                "It was the last leaf found on Gallifrey"
            ]
        }, {
            question: "Who was the 10th Doctor?",
            answer: [
                "Matt Smith",
                "David Tennant",
                "Christopher Eccleston",
                "Rose Tyler"
            ]
        },

        {
            question: "How long has doctor who been on the air?",
            answer: [
                "38 Years",
                "50 Years",
                "He's a Time Lord so forever",
                "12 Years"
            ]
        }

    ];


    //correct answers for the game 
    var correctAnswers = ["It was how her parents met", "David Tennant", "38 Years"];







    var gameHTML;

});
