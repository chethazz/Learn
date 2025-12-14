function diamond(cols) {
    const rows = cols * 2 - 1;
    for (let i = 0; i < rows; i++) {
        const l = i < cols ? i : rows - 1 - i;
        let row = "";
        for (let k = 0; k < rows - 1 - l; k++) {
            row += " ";
        }
        for (let j = 0; j <= l; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

function hourGlass(cols) {
    const rows = cols * 2 - 1;
    for (let i = 0; i < rows; i++) {
        const l = i < cols ? i : rows - 1 - i;
        let row = "";
        for (let k = 0; k < l; k++) {
            row += " ";
        }
        for (let j = 0; j < cols - l; j++) {
            row += "* ";
        }
        console.log(row);
    }
}