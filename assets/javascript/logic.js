
//crystals

var crystals = {
    blue: {
        name: "Blue",
        value: 0
    },

    orange: {
        name: "Orange",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },

};



//scores
var targetScore = 0;
var yourScore = 0;

//wins lossses
var winCount = 0;
var loseCount = 0;





//functions
//-------------------------------------
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



var startGame = function () {
    //resert current score 
    yourScore = 0;
    targetScore = randomNumber(19, 120);

    crystals.blue.value = randomNumber(1, 12);
    crystals.orange.value = randomNumber(1, 12);
    crystals.yellow.value = randomNumber(1, 12);
    crystals.red.value = randomNumber(1, 12);

    $("#your-score-count").html(yourScore);
    $("#target-score-count").html(targetScore);
    




    console.log(targetScore);
    console.log(crystals.blue.value);
    console.log(crystals.orange.value);
    console.log(crystals.yellow.value);
    console.log(crystals.red.value);

}


var addValue = function (crystals) {
    yourScore = yourScore + crystals.value;
    $("#your-score-count").html(yourScore);
    checkWin();
    console.log("your score is" + yourScore);
}


var checkWin = function () {
    if (yourScore > targetScore) {
        
        alert('Not very good at math huh?');
        loseCount++;
        $("#lose-count").html(loseCount);
        //$("#loser").html('Not very good at math huh?');
        startGame();
        
        
    }
    else if (yourScore == targetScore) {
        alert("You're a real Einstein!");
        winCount++;
        $("#win-count").html(winCount);

        startGame();
       
    }
}


startGame();




//call functions
//-------------------------------------
$("#crystal1").click(function () {
    addValue(crystals.blue);
});

$("#crystal2").click(function () {
    addValue(crystals.orange);


});
$("#crystal3").click(function () {
    addValue(crystals.yellow);

});

$("#crystal4").click(function () {
    addValue(crystals.red);

});
