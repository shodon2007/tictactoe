let thisPlay = 1;
board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

function checkWin(board) {
    let [row1, row2, row3] = board;
    let result = 0;
    let isFinish = false;



    // Gorizontal Check
    board.forEach(row => {
        if (row[0] == row[1] && row[0] == row[2] && row[0] != 0) {
            result = row[0];
            isFinish = true;
        }
    });

    // Check
    if (isFinish == true) {
        return result;
    }

    // Vertical Check
    for (let i = 0; i != 3; i++) {
        if (row1[i] == row2[i] && row1[i] == row3[i] && row1[i] != 0) {
            result = row1[i];
            return result;
        }
    }

    // Corner Check
    if (row1[0] == row2[1] && row1[0] == row3[2] && row1[0] != 0) {
        result = row1[0];
        return result;
    }
    if (row3[0] == row2[1] && row1[2] == row3[0] && row1[2] != 0) {
        result = row1[0]
        return result;
    }

    // Check to Empty
    row1.forEach((el) => {
        if (el == 0) {
            isFinish = true;
        }
    });
    row2.forEach((el) => {
        if (el == 0) {
            isFinish = true;
        }
    });
    row3.forEach((el) => {
        if (el == 0) {
            isFinish = true;
        }
    });
    if (isFinish == true) {
        return 0;
    }

    return -1;
}

function renderBoard(x, y) {
    let cell = document.querySelector(`.cell${x}${y}`)

    if (thisPlay == 1) {
        cell.innerHTML = 'X';
    }
    if (thisPlay == 2) {
        cell.innerHTML = 'O';
    }
}

function gameClick(x, y) {
    if (board[x][y] == 0) {
        if (thisPlay == 1) {
            board[x][y] = thisPlay;
            renderBoard(x, y);
            thisPlay = 2;
        } else if (thisPlay == 2) {
            board[x][y] = thisPlay;
            renderBoard(x, y);
            thisPlay = 1;
        }
    }

    let winner = checkWin(board);
    ifWin(winner);
}

function ifWin(winner) {
    switch (winner) {
        case 1:
            console.log('x won');
            break;
        case 2:
            console.log('y won');
            break;
        case -1:
            console.log('draw');
            break;
    }
}