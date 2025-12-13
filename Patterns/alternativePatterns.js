function fullPyramid(rows) {
    const cols = rows * 2 - 1;
    const mid = rows - 1;

    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            // Or j >= mid -i && j <= mid + i
            const l = j < rows ? j : cols - 1 - j;
            if (i + l >= mid) {
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
