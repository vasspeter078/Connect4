let connect4 = {
    player: 1,
    board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ],
    step: function (column) {
        for (let i = 6 - 1; i >= 0; --i) {
            if (this.board[i][column - 1] === 0) {
                this.board[i][column - 1] = this.player
                return i + 1
            }
        }
        return 0
    },
    checkPlayerWins: function (player) {
        for (let i = 0; i < 6; ++i) {
            for (let j = 0; j < 4; ++j) {
                if (this.board[i][j] === player && this.board[i][j + 1] === player && this.board[i][j + 2] === player && this.board[i][j + 3] === player) {
                    return true
                }
            }
        }
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 7; ++j) {
                if (this.board[i][j] === player && this.board[i + 1][j] === player && this.board[i + 2][j] === player && this.board[i + 3][j] === player) {
                    return true
                }
            }
        }
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 4; ++j) {
                if (this.board[i][j] === player && this.board[i + 1][j + 1] === player && this.board[i + 2][j + 2] === player && this.board[i + 3][j + 3] === player) {
                    return true
                }
            }
        }
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 4; ++j) {
                if (this.board[i][j + 3] === player && this.board[i + 1][j + 2] === player && this.board[i + 2][j + 1] === player && this.board[i + 3][j] === player) {
                    return true
                }
            }
        }
    },
    checkWinner: function () {
        if (this.checkPlayerWins(1)) {
            return 1
        }
        if (this.checkPlayerWins(2)) {
            return 2
        }
        return 0
    }
}

function convertNumbersToString(row, column) {
    let numberString
    if (row === 1) {
        numberString = "first-row"
    }
    if (row === 2) {
        numberString = "second-row"
    }
    if (row === 3) {
        numberString = "third-row"
    }
    if (row === 4) {
        numberString = "fourth-row"
    }
    if (row === 5) {
        numberString = "fifth-row"
    }
    if (row === 6) {
        numberString = "sixth-row"
    }
    if (column === 1) {
        numberString += " first-column"
    }
    if (column === 2) {
        numberString += " second-column"
    }
    if (column === 3) {
        numberString += " third-column"
    }
    if (column === 4) {
        numberString += " fourth-column"
    }
    if (column === 5) {
        numberString += " fifth-column"
    }
    if (column === 6) {
        numberString += " sixth-column"
    }
    if (column === 7) {
        numberString += " seventh-column"
    }
    return numberString
}

document.getElementById("first-column").onclick = () => {
    let row = connect4.step(1)
    if (row != 0) {
        let id = convertNumbersToString(row, 1)
        document.getElementById(id).getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
        setTimeout(function() {
            if (connect4.checkWinner() === 1) {
                alert("Blue won")
            }
            if (connect4.checkWinner() === 2) {
                alert("Red won")
            }
        }, 100)    
        connect4.player = connect4.player === 1 ? 2 : 1
    }
}

document.getElementById("second-column").onclick = () => {
    let row = connect4.step(2)
    if (row != 0) {
        let id = convertNumbersToString(row, 2)
        document.getElementById(id).getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
        setTimeout(function() {
            if (connect4.checkWinner() === 1) {
                alert("Blue won")
            }
            if (connect4.checkWinner() === 2) {
                alert("Red won")
            }
        }, 100) 
        connect4.player = connect4.player === 1 ? 2 : 1
    }
}

document.getElementById("third-column").onclick = () => {
    let row = connect4.step(3)
    if (row != 0) {
        let id = convertNumbersToString(row, 3)
        document.getElementById(id).getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
        setTimeout(function() {
            if (connect4.checkWinner() === 1) {
                alert("Blue won")
            }
            if (connect4.checkWinner() === 2) {
                alert("Red won")
            }
        }, 100) 
        connect4.player = connect4.player === 1 ? 2 : 1
    }
}

document.getElementById("fourth-column").onclick = () => {
    let row = connect4.step(4)
    if (row != 0) {
        let id = convertNumbersToString(row, 4)
        document.getElementById(id).getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
        setTimeout(function() {
            if (connect4.checkWinner() === 1) {
                alert("Blue won")
            }
            if (connect4.checkWinner() === 2) {
                alert("Red won")
            }
        }, 100) 
        connect4.player = connect4.player === 1 ? 2 : 1
    }
}

document.getElementById("fifth-column").onclick = () => {
    let row = connect4.step(5)
    if (row != 0) {
        let id = convertNumbersToString(row, 5)
        document.getElementById(id).getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
        setTimeout(function() {
            if (connect4.checkWinner() === 1) {
                alert("Blue won")
            }
            if (connect4.checkWinner() === 2) {
                alert("Red won")
            }
        }, 100) 
        connect4.player = connect4.player === 1 ? 2 : 1
    }
}

document.getElementById("sixth-column").onclick = () => {
    let row = connect4.step(6)
    if (row != 0) {
        let id = convertNumbersToString(row, 6)
        document.getElementById(id).getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
        setTimeout(function() {
            if (connect4.checkWinner() === 1) {
                alert("Blue won")
            }
            if (connect4.checkWinner() === 2) {
                alert("Red won")
            }
        }, 100) 
        connect4.player = connect4.player === 1 ? 2 : 1
    }
}

document.getElementById("seventh-column").onclick = () => {
    let row = connect4.step(7)
    if (row != 0) {
        let id = convertNumbersToString(row, 7)
        document.getElementById(id).getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
        setTimeout(function() {
            if (connect4.checkWinner() === 1) {
                alert("Blue won")
            }
            if (connect4.checkWinner() === 2) {
                alert("Red won")
            }
        }, 100) 
        connect4.player = connect4.player === 1 ? 2 : 1
    }
}

document.getElementById("first-column").onmouseover = () => {
    document.getElementById("first-column").getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
}

document.getElementById("second-column").onmouseover = () => {
    document.getElementById("second-column").getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
}

document.getElementById("third-column").onmouseover = () => {
    document.getElementById("third-column").getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
}

document.getElementById("fourth-column").onmouseover = () => {
    document.getElementById("fourth-column").getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
}

document.getElementById("fifth-column").onmouseover = () => {
    document.getElementById("fifth-column").getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
}

document.getElementById("sixth-column").onmouseover = () => {
    document.getElementById("sixth-column").getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
}

document.getElementById("seventh-column").onmouseover = () => {
    document.getElementById("seventh-column").getElementsByClassName("circle")[0].style.backgroundColor = connect4.player === 1 ? "blue" : "red"
}

document.getElementById("first-column").onmouseout = () => {
    document.getElementById("first-column").getElementsByClassName("circle")[0].style.backgroundColor = "lightgrey"
}

document.getElementById("second-column").onmouseout = () => {
    document.getElementById("second-column").getElementsByClassName("circle")[0].style.backgroundColor = "lightgrey"
}

document.getElementById("third-column").onmouseout = () => {
    document.getElementById("third-column").getElementsByClassName("circle")[0].style.backgroundColor = "lightgrey"
}

document.getElementById("fourth-column").onmouseout = () => {
    document.getElementById("fourth-column").getElementsByClassName("circle")[0].style.backgroundColor = "lightgrey"
}

document.getElementById("fifth-column").onmouseout = () => {
    document.getElementById("fifth-column").getElementsByClassName("circle")[0].style.backgroundColor = "lightgrey"
}

document.getElementById("sixth-column").onmouseout = () => {
    document.getElementById("sixth-column").getElementsByClassName("circle")[0].style.backgroundColor = "lightgrey"
}

document.getElementById("seventh-column").onmouseout = () => {
    document.getElementById("seventh-column").getElementsByClassName("circle")[0].style.backgroundColor = "lightgrey"
}
