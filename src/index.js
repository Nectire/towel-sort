
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length == 0){
    return []
  }
    matrix = matrix.reduce((previous, current, index) =>{
      if((index+1) % 2 == 0){
        return previous.concat(current.reverse())
      }
      return previous.concat(current)
    });
  return matrix;
}
