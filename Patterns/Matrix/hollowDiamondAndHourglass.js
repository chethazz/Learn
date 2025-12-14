function hollowDiamond(rows) {
    const size = rows * 2 - 1;
    for (let i = 0; i < size; i++) {
        const l = i < rows ? i : size - 1 - i;
        let row = "";
        for (let j = 0; j < size; j++) {
            const m = j < rows ? j : size - 1 - j;
            if (l + m === rows - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
            if (j - l === rows - 1) {
                break;
            }
        }
        console.log(row);
    }
}

function hollowHourglass(rows) {
    const size = rows * 2 - 1;
    for (let i = 0; i < size; i++) {
        const l = i < rows ? i : size - 1 - i;
        let row = "";
        for (let j = 0; j < size; j++) {
            const m = j < rows ? j : size - 1 - j;
            if (l === 0 || l === m) {
                row += "* ";
            } else {
                row += "  ";
            }
            if (j + l === size - 1) {
                break;
            }
        }
        console.log(row);
    }
}