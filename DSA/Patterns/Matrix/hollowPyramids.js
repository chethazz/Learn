function hollowRightHalfPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < rows; j++) {
            if (j === 0 || i === j || i === rows - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
            if (j === i) {
                break;
            }
        }
        console.log(row);
    }
}

function hollowLeftHalfPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < rows; j++) {
            if (j === rows - 1 || i === rows - 1 || i + j === rows - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row);
    }
}

function hollowFullPyramid(rows) {
    const cols = rows * 2 - 1;
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            const l = j < rows ? j : cols - 1 - j;
            if (i + l === rows - 1 || i === rows - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
            if (j === rows - 1 + i) {
                break;
            }
        }
        console.log(row);
    }
}

function hollowInvertedRightHalfPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < rows; j++) {
            if (i === 0 || j === 0 || i + j === rows - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
            if (i + j === rows - 1) {
                break;
            }
        }
        console.log(row);
    }
}

function hollowInvertedLeftHalfPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < rows; j++) {
            if (j === 0 || i === 0 || i + j === rows - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row);
    }
}

function hollowInvertedFullPyramid(rows) {
    const cols = rows * 2 - 1;
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            const l = j < rows ? j : cols - 1 - j;
            if (i === 0 || i === l) {
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