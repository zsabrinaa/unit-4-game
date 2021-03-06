$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var mushGreen = Math.floor((Math.random() * 9 + 2));
    var mushBlue = Math.floor((Math.random() * 6 + 2));
    var mushYellow = Math.floor((Math.random() * 8 + 2));
    var mushRed = Math.floor((Math.random() * 5 + 2));
    var targetNum = (mushBlue + mushGreen + mushRed + mushYellow) * 3;
    var userScore = 0;
    var audio = new Audio('assets/sounds/mushSound.mp3');
    var winsSound = new Audio('assets/sounds/win.mp3');
    var loseSound = new Audio('assets/sounds/lose.mp3');
    var mute = false;
    $("#user-score").text(userScore);
    $("#random-number").text(targetNum);
    function reset() {
        $("#user-score").empty();
        mushGreen = Math.floor((Math.random() * 9 + 2));
        mushBlue = Math.floor((Math.random() * 6 + 2));
        mushYellow = Math.floor((Math.random() * 8 + 2));
        mushRed = Math.floor((Math.random() * 5 + 2));
        userScore = 0;
        $("#user-score").text(userScore);
        targetNum = (mushBlue + mushGreen + mushRed + mushYellow) * 3;
        $("#random-number").text(targetNum);
    };
    function checkWins() {
        if (targetNum === userScore) {
            wins++;
            if (mute == false) {
                winsSound.play();
            }
            $("#wins-count").text("Wins:" + wins);
            reset();
        }
        else if (userScore >= targetNum) {
            losses++;
            if (mute == false) {
                loseSound.play();
            }
            $("#losses-count").text("Losses:" + losses);
            reset();

        }
    }
    $("#mute-button").on("click", function () {
        if (mute == false) {
            mute = true;
            $("#mute-button").text("Unmute");
        }else {
            mute = false;
            $("#mute-button").text("Mute");
        }

    }
    )
    $("#mushroom-green").on("click", function () {
        console.log("im here!");
        audio.currentTime = 0;
        if (mute == false) {
            audio.play();
        }
        console.log(audio);
        userScore += mushGreen;
        $("#user-score").text(userScore);
        checkWins();
    })
    $("#mushroom-blue").on("click", function () {
        console.log("im here");
        audio.currentTime = 0;
        if (mute == false) {
            audio.play();
        }
        userScore += mushBlue;
        $("#user-score").text(userScore);
        checkWins();
    })
    $("#mushroom-red").on("click", function () {
        console.log("im here");
        audio.currentTime = 0;
        if (mute == false) {
            audio.play();
        }
        userScore += mushRed;
        $("#user-score").text(userScore);
        checkWins();
    })
    $("#mushroom-yellow").on("click", function () {
        console.log("im here");
        audio.currentTime = 0;
        if (mute == false) {
            audio.play();
        }
        userScore += mushYellow;
        $("#user-score").text(userScore);
        checkWins();
    })


})