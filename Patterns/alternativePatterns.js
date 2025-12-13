function fullPyramid(rows) {
    const cols = rows * 2 - 1;

    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            // Or j >= mid -i && j <= mid + i
            if (j > rows - 1 + i) {
                break;
            }
            const l = j < rows ? j : cols - 1 - j;
            if (i + l >= rows - 1) {
                row += "* ";
            } else {
                row += "  ";
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
            if (i + j >= cols) {
                break;
            }
            const l = j < rows ? j : cols - 1 - j;
            if (l >= i) {
                row += "* ";
            } else if (l < i) {
                row += "  ";
            }
        }
        console.log(row);
    }
}

invertedFullPyramid(5);

function rightLeaningRhombus(rows) {
    const cols = rows * 2 - 1;

    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            if (i + j >= cols) {
                break;
            }
            if (i + j < rows - 1) {
                row += "  ";
            } else {
                row += "* ";
            }
        }
        console.log(row);
    }
}

function leftLeaningRhombus(rows) {
    const cols = rows * 2 - 1;

    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            if (j > rows - 1 + i) {
                break;
            }
            if (j >= i) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row);
    }
}