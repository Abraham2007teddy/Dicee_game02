var random_1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1; 
var random_2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1; 

function selector_1(number) {
    if (number === 1) {
        document.getElementById("img1").src="./images/dice1.png";
    } 
    else if (number === 2) {
        document.getElementById("img1").src="./images/dice2.png";
    }
    else if (number === 3) {
        document.getElementById("img1").src="./images/dice3.png";
    }
    else if (number === 4) {
        document.getElementById("img1").src="./images/dice4.png";
    }
    else if (number === 5) {
        document.getElementById("img1").src="./images/dice5.png";
    }
    else {
        document.getElementById("img1").src="./images/dice6.png";
    }
}

function selector_2(number) {
    if (number === 1) {
        document.getElementById("img2").src="./images/dice1.png";
    } 
    else if (number === 2) {
        document.getElementById("img2").src="./images/dice2.png";
    }
    else if (number === 3) {
        document.getElementById("img2").src="./images/dice3.png";
    }
    else if (number === 4) {
        document.getElementById("img2").src="./images/dice4.png";
    }
    else if (number === 5) {
        document.getElementById("img2").src="./images/dice5.png";
    }
    else {
        document.getElementById("img2").src="./images/dice6.png";
    }
}

function compare(number_1, number_2) {
    if (number_1 > number_2) {
        document.getElementById("h1_one").innerHTML = "First player wins!"
    }
    else if (number_1 < number_2) {
        document.getElementById("h1_one").innerHTML = "Second player wins!"
    }
    else {
        document.getElementById("h1_one").innerHTML = "Tie!"
    }
}




selector_1(random_1);
selector_2(random_2);
compare(random_1, random_2);

