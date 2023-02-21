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
            let accuracy = Math.random() * (0.8 - 0.6) + 0.6;
            return accuracy.toFixed(2);
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
            let accuracy = Math.random() * (0.8 - 0.6) + 0.6;
            return accuracy.toFixed(2);
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
            let accuracy = Math.random() * (0.8 - 0.6) + 0.6;
            return accuracy.toFixed(2);
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
            let accuracy = Math.random() * (0.8 - 0.6) + 0.6;
            return accuracy.toFixed(2);
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
            let accuracy = Math.random() * (0.8 - 0.6) + 0.6;
            return accuracy.toFixed(2);
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
            let accuracy = Math.random() * (0.8 - 0.6) + 0.6;
            return accuracy.toFixed(2);
        },
    },
};

//extract and insert the first alien player into the game
let alienArray = [...Object.keys(aliens)];
let alienPlayer = aliens[alienArray[0]];
let isOn = false;

//grab nodes
let footer = document.querySelector("footer");
let playerImg = document.querySelector("#player");
let alienImg = document.querySelector("#alien");
let playerLaser = document.querySelector(".player-laser");
let alienLaser = document.querySelector(".alien-laser");
console.log(alienImg + " This is alien Img")
console.log(playerImg + " This is player Img")
let playerAttackDiv = document.querySelector(".player-attack");
let playerAttackBtn = document.querySelector("#player-attack-btn");
let alienContainer = document.querySelector(".alien-container");
let playerContainer = document.querySelector(".player-container");
let hFour = document.querySelector("h4");
let otherAliens = document.querySelector(".other-aliens");
let alienP1 = document.getElementById('alienP1');
let alienP2 = document.getElementById('alienP2');
let alienP3 = document.getElementById('alienP3');
let playerP1 = document.getElementById('playerP1');
let playerP2 = document.getElementById('playerP2');
let playerP3 = document.getElementById('playerP3');
//counter to change button
let counter = 0;

//game object
const game = {

    insertPlayerData: (player1) => {
        playerP1.textContent = `player hull: ${player1.hull}`
        playerP2.textContent = `Player accuracy: ${player1.accuracy}`
        playerP3.textContent = `Player firepower: ${player1.firepower}`
    },
    insertAlienData: (player2, hull) => {
        alienP1.textContent = `Alien hull: ${hull}`
        alienP2.textContent = `Alien accuracy: ${player2.accuracy()}`
        alienP3.textContent = `Alien firepower: ${player2.firepower()}`
    },
    startHasBeenPressed: () => {
        playerAttackBtn.remove();
        hFour.remove();
        playerAttackDiv.classList.remove("player-attack");
        playerAttackDiv.classList.add("player-attack-inGame");
    },
    playerSuccessfulAttack: (player1, t) => {
        setTimeout(() => {
            alienLaser.classList.remove("alien-laser-miss");
            alienLaser.classList.remove("alien-laser-hit");
            alienImg.classList.remove("alien-inGame");
            playerLaser.classList.remove("player-laser-miss");
            playerLaser.classList.add("player-laser-hit");
            playerImg.classList.add("player-inGame");


            playerAttackDiv.textContent =
                `Great shot, you caused the Alien ${player1.firepower} damage`;
        }, t);
    },
    playerFailedAttack: (t) => {
        setTimeout(() => {
            alienLaser.classList.remove("alien-laser-hit");
            alienLaser.classList.remove("alien-laser-miss");
            playerLaser.classList.remove("player-laser-hit");
            alienImg.classList.remove("alien-inGame");
            playerLaser.classList.add("player-laser-miss");
            playerImg.classList.add("player-inGame");


            playerAttackDiv.textContent = "You missed, shoot again!";
        }, t);
    },
    alienSuccessfulAttack: (player1,player2, t) => {
        setTimeout(() => {
            alienLaser.classList.remove("alien-laser-miss");
            playerImg.classList.remove("player-inGame");
            playerLaser.classList.remove("player-laser-hit");
            playerLaser.classList.remove("player-laser-miss");
            alienLaser.classList.add("alien-laser-hit");
            alienImg.classList.add("alien-inGame");


            playerP1.textContent = `player hull: ${player1.hull}`
            playerAttackDiv.textContent =
                `On No, you were hit! The Alien caused you ${player2.firepower()} damage`;
        }, t);
    },
    alienFailedAttack: (t) => {
        setTimeout(() => {
            playerImg.classList.remove("player-inGame");
            playerLaser.classList.remove("player-laser-hit");
            playerLaser.classList.remove("player-laser-miss");
            alienLaser.classList.remove("alien-laser-hit");
            alienImg.classList.add("alien-inGame");
            alienLaser.classList.add("alien-laser-miss");


            playerAttackDiv.textContent = "Alien missed, you got lucky!";
        }, t);
    },
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
            game.startHasBeenPressed();
            let alienHull = player2.hull();
            let timer = 3000;  
            playerAttackDiv.textContent = "Press attack to begin!";
            for (let i = 0; i < Infinity; i++) {
                if (isOn === false && alienHull > 0 && player1.hull > 0) {
                    game.insertPlayerData(player1);
                    game.insertAlienData(player2, alienHull);
                    if (player1.accuracy > player2.accuracy()) {
                        game.playerSuccessfulAttack(player1, timer.toString())
                        alienHull -= player1.firepower;
                        timer+=3000;
                        if(alienHull <= 0 ) {
                            console.log("I-m in here");
                            setTimeout(() => {
                                playerAttackDiv.textContent = "YAY, Alien was defeated!";
                                playerAttackDiv.append(playerAttackBtn);
                            }, timer.toString());
                            timer+=3000;
                        }
                    } else {
                        game.playerFailedAttack(timer.toString())
                        console.log(timer + " player attack failed");
                        timer+=3000;
                    }
                    isOn = true;
                } else if (isOn === true && alienHull > 0 && player1.hull > 0) {
                    if (player2.accuracy() > player1.accuracy) {
                        player1.hull -= player2.firepower();
                        game.alienSuccessfulAttack(player1, player2, timer.toString())
                        console.log(timer + " alien attack successful")
                        timer+=3000;
                    } else {
                        game.alienFailedAttack(timer.toString());
                        console.log(timer + " alien attack failed")
                        timer+=3000;
                    }
                    isOn = false;
                } else {
                    console.log("Player defeated");
                    console.log("AlienHull ---" + alienHull);
                    if (alienArray.length - 1 > 0) {
                        alienArray.shift();
                    } else {
                        console.log("Game over, you won!!")
                    }
                    timer = 3000;
                    otherAliens.removeChild(otherAliens.getElementsByTagName("img")[0])
                    break;
                }
            }
            playerAttackDiv.append(playerAttackBtn);
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