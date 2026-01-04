function hollowRightLeaningRhombus(rows) {
    const cols = rows * 2 - 1;
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            if (
                i + j === rows - 1 ||
                (i === 0 && j >= rows) ||
                (i === rows - 1 && j < rows) ||
                i + j === cols - 1
            ) {
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

function hollowLeftLeaningRhombus(rows) {
    const cols = rows * 2 - 1;
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            const l = j < rows ? j : cols - 1 - j;
            if (
                i === j ||
                j - i === rows - 1 ||
                (i === rows - 1 && j >= rows) ||
                (i === 0 && j < rows)
            ) {
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