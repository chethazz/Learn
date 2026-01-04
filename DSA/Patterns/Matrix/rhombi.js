function rightLeaningRhombus(rows) {
    const cols = rows * 2 - 1;
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            if (i + j >= rows - 1 && i + j <= cols - 1) {
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

function leftLeaningRhombus(rows) {
    const cols = rows * 2 - 1;
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            if (j >= i && j - i <= rows - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
            if (j - i === rows - 1) {
                break;
            }
        }
        console.log(row);
    }
}