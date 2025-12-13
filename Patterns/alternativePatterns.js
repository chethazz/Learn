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