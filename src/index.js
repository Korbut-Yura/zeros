module.exports = function getZerosCount(number) {
  let result = 0,
    i = 1;
    while (Math.pow(5,i) < number){
        result += Math.floor(number/Math.pow(5,i));
        i++;
    }
    return result;
}
