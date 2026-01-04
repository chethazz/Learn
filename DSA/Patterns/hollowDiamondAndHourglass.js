function hollowDiamond(cols) {
    const rows = cols * 2 - 1;
    for (let i = 0; i < rows; i++) {
        const l = i < cols ? i : rows - 1 - i;
        let row = "";
        for (let k = 0; k < cols - 1 - l; k++) {
            row += " ";
        }
        for (let j = 0; j <= l; j++) {
            if (j === 0 || j === l) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row);
    }
}

function hollowHourglass(cols) {
    const rows = cols * 2 - 1;
    for (let i = 0; i < rows; i++) {
        const l = i < cols ? i : rows - 1 - i;
        let row = "";
        for (let k = 0; k < l; k++) {
            row += " ";
        }
        for (let j = 0; j < cols - l; j++) {
            if (l === 0 || j === 0 || j + l === cols - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row);
    }
}