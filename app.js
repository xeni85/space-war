//Player 1
const ussAssembly = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
};

//Player 2
const aliens = {
    first: {
        hull: () => {
            let hull = Math.floor(Math.random() * (6 - 3 + 1) + 3);
            return hull;
        },
        firepower: () => {
            let firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2);
            return firepower;
        },
        accuracy: () => {
            let accuracy = (Math.random() * (0.8 - 0.6) + 0.6).toFixed(2);
        },
    },
    second: {
        hull: () => {
            let hull = Math.floor(Math.random() * (6 - 3 + 1) + 3);
            return hull;
        },
        firepower: () => {
            let firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2);
            return firepower;
        },
        accuracy: () => {
            let accuracy = (Math.random() * (0.8 - 0.6) + 0.6).toFixed(2);
        },
    },
    third: {
        hull: () => {
            let hull = Math.floor(Math.random() * (6 - 3 + 1) + 3);
            return hull;
        },
        firepower: () => {
            let firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2);
            return firepower;
        },
        accuracy: () => {
            let accuracy = (Math.random() * (0.8 - 0.6) + 0.6).toFixed(2);
        },
    },
    fourth: {
        hull: () => {
            let hull = Math.floor(Math.random() * (6 - 3 + 1) + 3);
            return hull;
        },
        firepower: () => {
            let firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2);
            return firepower;
        },
        accuracy: () => {
            let accuracy = (Math.random() * (0.8 - 0.6) + 0.6).toFixed(2);
        },
    },
    fifth: {
        hull: () => {
            let hull = Math.floor(Math.random() * (6 - 3 + 1) + 3);
            return hull;
        },
        firepower: () => {
            let firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2);
            return firepower;
        },
        accuracy: () => {
            let accuracy = (Math.random() * (0.8 - 0.6) + 0.6).toFixed(2);
        },
    },
    sixth: {
        hull: () => {
            let hull = Math.floor(Math.random() * (6 - 3 + 1) + 3);
            return hull;
        },
        firepower: () => {
            let firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2);
            return firepower;
        },
        accuracy: () => {
            let accuracy = (Math.random() * (0.8 - 0.6) + 0.6).toFixed(2);
            return accuracy;
        },
    },
};

//extract and insert the first alien player into the game
let alienArray = [...Object.keys(aliens)];
let alienPlayer = aliens[alienArray[0]];
let isOn = false;

//grab nodes
let footer = document.querySelector("footer");
let playerAttackDiv = document.querySelector(".player-attack");
let playerAttackBtn = document.querySelector("#player-attack-btn");
let alienContainer = document.querySelector(".alien-container");
let playerContainer = document.querySelector(".player-container");
let hFour = document.querySelector("h4");
let otherAliens = document.querySelector(".other-aliens");
//counter to change button
let counter = 0;

//game object
const game = {
    beginGame: () => {
        if (counter === 0) {
            console.log("beginGame was clicked");
            playerAttackBtn.textContent = "Attack";
            hFour.textContent = "It's your turn, Press 'Attack' to begin";
            console.log(counter + " Counter");
        }
        counter++;
        // playerAttackDiv.append(h4);
        // playerAttackDiv.append(playerAttackBtn);
    },
    attack: (player1, player2) => {
        if (counter > 1) {
            let alienHull = player2.hull();
            playerAttackBtn.remove();
            hFour.remove();
            playerAttackDiv.classList.remove("player-attack");
            playerAttackDiv.classList.add("player-attack-inGame");
            for (let i = 0; i < Infinity; i++) {
                if (isOn === false && alienHull > 0) {
                    playerAttackDiv.textContent = "It's your turn to play";
                    alienContainer.textContent = `Alien hull: ${alienHull}
                    Alien accuracy: ${player2.accuracy()}
                    Alien firepower: ${player2.firepower()}`

                    console.log();
                    console.log("AlienHull ---" + alienHull);

                    if (player1.accuracy > player2.accuracy()) {
                        alienHull -= player1.firepower;
                    }
                    isOn = true;
                } else if (isOn === true && alienHull > 0) {
                    console.log("Player 2 turn");
                    console.log(
                        "Part 2 " + player1.accuracy + "------" + player2.accuracy()
                    );

                    console.log("AlienHull ---" + alienHull);
                    if (player2.accuracy() > player1.accuracy) {
                        player1.hull -= player2.firepower();
                        console.log("line 116 " + player1.hull);
                    }
                    isOn = false;
                } else {
                    console.log(
                        "Part 3 " + player1.accuracy + "------" + player2.accuracy()
                    );
                    console.log("Player defeated");
                    console.log("AlienHull ---" + alienHull);

                    if (alienArray.length - 1 > 0) {
                        alienArray.shift();
                    } else {
                        console.log("Game over, you won!!");
                    }

                    otherAliens.removeChild(otherAliens.getElementsByTagName("img")[0]);

                    playerAttackDiv.append(playerAttackBtn);
                    break;
                }
            }
            console.log(alienArray);
        }
    },
};

playerAttackBtn.addEventListener("click", function () {
    game.beginGame(ussAssembly, alienPlayer);
});

playerAttackBtn.addEventListener("click", function () {
    game.attack(ussAssembly, alienPlayer);
});

// console.log(aliens.first.hull());
// console.log(aliens.second.hull());
// console.log(aliens.third.hull());
// console.log(aliens.fourth.hull());
// console.log(aliens.fifth.hull());
// console.log(aliens.sixth.hull());