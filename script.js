function isSolved(board) {
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
        result = row1[0]
        return result;
    }
    if (row3[0] == row2[1] && row1[2] == row3[2] && row1[3] != 0) {
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
        return -1;
    }

    return 0;
}

console.log(isSolved([
    [0, 2, 2],
    [2, 1, 1],
    [0, 0, 1],
]));