window.onload = () => {
    console.log("JS File Connected");

    // const game = new Game(3);
    // console.log({ game });
    // game.teamTakeShot("a");
    // game.teamTakeShot("B");

    // console.log(document.getElementsByTagName("button"));
    // console.log(document.querySelectorAll("button"));
};

class Player {
    constructor(name, number, position, team) {
        this.name = name;
        this.team = team;
        this.playerNumber = number;
        this.position = position;
        this.active = false;
        this.speed = 0;
        this.fieldPosition = "N";
        this.fieldLocationX = 5;
        this.fieldLocationY = 5;
        this.hasTheBall = false;
        this.kickPower = Math.ceil(Math.random() * 10);
        this.headerPower = Math.ceil(Math.random() * 5);
    }

    getName() {
        console.log(
            `This is ${this.name}, playing in ${this.position} as number ${this.playerNumber}.`
        );
    }

    toggleActive() {
        this.active = !this.active;
    }

    movePlayer(direction, speed, distance) {
        this.fieldPosition = direction;
        this.speed = speed;
        switch (direction.toUpperCase()) {
            case "N":
                for (let i = 0; i < distance; i++) {
                    this.fieldLocationY--;
                }
                break;
            case "S":
                for (let i = 0; i < distance; i++) {
                    this.fieldLocationY++;
                }
                break;
            case "W":
                for (let i = 0; i < distance; i++) {
                    this.fieldLocationX--;
                }
                break;
            case "E":
                for (let i = 0; i < distance; i++) {
                    this.fieldLocationX++;
                }
                break;
        }
    }

    stopPlayer() {
        this.speed = 0;
    }

    pass(playerToPassTo) {
        playerToPassTo.toggleHasBall();
        this.toggleHasBall();
    }

    kickShot(goalie) {
        console.log({ goalie });
        if (this.speed > 0) {
            return goalie.blockShot(this.kickPower + this.speed);
        } else {
            return goalie.blockShot(this.kickPower);
        }
    }

    headerShot(goalie) {
        console.log({ goalieHeader: goalie });
        if (this.speed > 0) {
            return goalie.blockShot(this.headerPower + this.speed);
        } else {
            return goalie.blockShot(this.headerPower);
        }
    }

    toggleHasBall() {
        this.hasTheBall = true;
    }
}

class Goalie extends Player {
    constructor(name, number, blockPower) {
        super(name, number);
        this.position = "Goalie";
        this.blockPower = blockPower;
    }

    blockShot(attackPower) {
        if (attackPower <= this.blockPower) {
            console.log("Shot was blocked!");
            return false;
        } else {
            console.log("Shot was made!");
            return true;
        }
    }
}

class Game {
    constructor(playerCount) {
        this.playersA = [];
        this.goalieA = [];
        this.playersB = [];
        this.goalieB = [];
        this.scoreA = 0;
        this.scoreB = 0;

        this.generatePlayers(playerCount);
    }

    generatePlayers(playerCount) {
        for (let i = 0; i <= playerCount; i++) {
            this.playersA.push(
                new Player(`PlayerA ${i + 1}`, i + 3, `${i + 1}`, "A")
            );
            this.playersB.push(
                new Player(`PlayerB ${i + 1}`, i + 3, `${i + 1}`, "B")
            );

            if (playerCount - i < 2) {
                this.goalieA.push(
                    new Goalie(
                        `GoalieA ${i + 1}`,
                        i + 5,
                        Math.ceil(Math.random() * 10),
                        "A"
                    )
                );
                this.goalieB.push(
                    new Goalie(
                        `GoalieB ${i + 1}`,
                        i + 5,
                        Math.ceil(Math.random() * 10),
                        "B"
                    )
                );
            }
        }
    }

    addPoint(team) {
        if (team.toLowerCase() === "a") {
            this.scoreA++;
            document.querySelector("#scoreA").innerHTML = this.scoreA;
            // document.getElementById('scoreA').innerHTML = this.scoreA;
        } else {
            this.scoreB++;
            document.querySelector("#scoreB").innerHTML = this.scoreB;
            // document.getElementById('scoreB').innerHTML = this.scoreB;
        }
    }

    teamTakeShot(team) {
        if (team.toLowerCase() === "a") {
            const player = this.playersA[
                Math.floor(Math.random() * this.playersA.length)
            ];
            if (player.kickPower > player.headerPower) {
                if (
                    player.kickShot(
                        this.goalieB[
                            Math.floor(Math.random() * this.goalieB.length)
                        ]
                    )
                ) {
                    this.addPoint("a");
                }
            } else {
                if (
                    player.headerShot(
                        this.goalieB[
                            Math.floor(Math.random() * this.goalieB.length)
                        ]
                    )
                ) {
                    this.addPoint("a");
                }
            }
        } else {
            const player = this.playersB[
                Math.floor(Math.random() * this.playersB.length)
            ];
            if (player.kickPower > player.headerPower) {
                if (
                    player.kickShot(
                        this.goalieA[
                            Math.floor(Math.random() * this.goalieA.length)
                        ]
                    )
                ) {
                    this.addPoint("b");
                }
            } else {
                if (
                    player.headerShot(
                        this.goalieA[
                            Math.floor(Math.random() * this.goalieA.length)
                        ]
                    )
                ) {
                    this.addPoint("b");
                }
            }
        }
    }

    declareWinner() {
        document.querySelector(".winner").innerHTML =
            this.scoreA > this.scoreB
                ? "Team A Wins "
                : this.scoreA < this.scoreB
                ? "Team B Wins"
                : "Tie Game!";
    }
}

const startGame = () => {
    console.log("Starting Game");
    const game = new Game(3);

    for (let i = 0; i < 5; i++) {
        game.teamTakeShot("a");
        game.teamTakeShot("B");
    }

    game.declareWinner();
};
