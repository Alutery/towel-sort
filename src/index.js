
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix) return [];
    
    let resultArray = [];

    matrix.forEach((row, idx) => {
        resultArray.push(...(idx % 2 ? row.reverse() : row));
    });

    return resultArray;
}
