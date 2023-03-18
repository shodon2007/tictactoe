let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
let thisPlayer = 1;
const gameBody = document.querySelector('.board');

function setGameBody() {
    gameBody.innerHTML = '';
    board.forEach((row, x) => {
        row.forEach((cell, y) => {
            gameBody.innerHTML += `<div class="cell c${x}${y}" onclick="cellClick(${x},${y})"></div>`;
        });
    })
}
setGameBody();


function cellClick(x, y) {
    const isCellEmpty = (board[x][y] == 0);

    if (isCellEmpty) {
        whenCellEmpty(x, y);
    }

    const winner = checkWin();

    if (winner) {
        showWindow(winner);
        restart();
    }
}

function whenCellEmpty(x, y) {
    const selectedCell = document.querySelector('.c' + x + y)

    board[x][y] = thisPlayer;
    selectedCell.innerHTML = toString(thisPlayer);

    thisPlayer = thisPlayer == 1 ? 2 : 1;
}


function toString(number) {
    switch (number) {
        case 0: return " ";
        case 1: return "X";
        case 2: return "O";
    }
}


function checkWin() {
    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= 2; y++) {
            const horizontalCheck = board[x][0] == board[x][1] && board[x][1] == board[x][2];
            const verticalCheck = board[0][y] == board[1][y] && board[1][y] == board[2][y];
            const leftCornerCheck = board[0][0] == board[1][1] && board[1][1] == board[2][2];
            const rightCornerCheck = board[2][0] == board[1][1] && board[1][1] == board[0][2];


            if (horizontalCheck && board[x][0] != 0) return board[x][0];
            if (verticalCheck && board[0][y] != 0) return board[0][y];
            if (leftCornerCheck && board[1][1] != 0) return board[1][1];
            if (rightCornerCheck && board[1][1] != 0) return board[1][1];
        }
    }

    return 0;
}

function restart() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    thisPlayer = 1;
    setGameBody();
}

function showWindow(winner) {
    const window = document.querySelector('.window');
    const windowText = document.querySelector('.window__text');

    window.classList.toggle('active');
    windowText.innerHTML = toString(winner) + ' won';
};