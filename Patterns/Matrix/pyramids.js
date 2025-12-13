function rightHalfPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < rows; j++) {
            if (j <= i) {
                row += "* ";
            } else {
                break;
            }
        }
        console.log(row);
    }
}

function leftHalfPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < rows; j++) {
            if (j < rows - 1 - i) {
                row += "  ";
            } else {
                row += "* ";
            }
        }
        console.log(row);
    }
}

function fullPyramid(rows) {
    const cols = rows * 2 - 1;
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            const l = j < rows ? j : cols - 1 - j;
            if (l < rows - 1 - i) {
                row += "  ";
            } else {
                row += "* ";
            }
        }
        console.log(row);
    }
}

function invertedLeftHalfPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < rows; j++) {
            if (j >= i) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row);
    }
}

function invertedRightHalfPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < rows; j++) {
            if (i + j <= rows - 1) {
                row += "* ";
            } else {
                break;
            }
        }
        console.log(row);
    }
}

function invertedFullPyramid(rows) {
    const cols = rows * 2 - 1;
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            const l = j < rows ? j : cols - 1 - j;
            if (l >= i) {
                row += "* ";
            } else {
                row += "  ";
            }
            if (i + j === cols - 1) {
                break;
            }
        }
        console.log(row);
    }
}