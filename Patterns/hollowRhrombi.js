function hollowRightLeaningRhombus(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let k = 0; k < rows - 1 - i; k++) {
            row += "  ";
        }
        for (let j = 0; j < rows; j++) {
            if (j === 0 || i === 0 || j === rows - 1 || i === rows - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row);
    }
}

function hollowLeftLeaningRhombus(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let k = 0; k < i; k++) {
            row += "  ";
        }
        for (let j = 0; j < rows; j++) {
            if (j === 0 || i === 0 || j === rows - 1 || i === rows - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row);
    }
}