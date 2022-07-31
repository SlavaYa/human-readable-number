  
  module.exports = function toReadable (number) {
  let firstOrder = ['one', 'two','three', 'four','five','six','seven','eight','nine'];
  let secondOrder = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  let thirdOrder = ['twenty','thirty','forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  if (number === 0){ return 'zero'}
  if (number < 10) {return firstOrder[number-1]}
  if (number >=10 && number < 20){return secondOrder[number%10]}
  if (number >=20 && number < 100) {
    if(number%10 === 0){return thirdOrder[number/10-2]}
    else {return  thirdOrder[Math.trunc(number/10) - 2] + ' ' + firstOrder[number%10-1]
  }}
  if (number >=100 && number <1000 ){
    if (number%100 === 0){return firstOrder[number/100 - 1] + ' hundred' }
    else if (Math.trunc(number%100/10) === 1) {return firstOrder[Math.trunc(number/100)-1] + ' hundred ' + secondOrder[number%10]}
    else if (Math.trunc(number%100/10) === 0) {return firstOrder[Math.trunc(number/100)-1] + ' hundred ' + firstOrder[number%10-1]}
    else if (number%10 === 0 && (number/10)%10 > 1){return firstOrder[Math.trunc(number/100)-1] + ' hundred ' + thirdOrder[Math.trunc(number%100/10)-2]}
    else  {return firstOrder[Math.trunc(number/100)-1] + ' hundred ' + thirdOrder[Math.trunc(number%100/10)-2] + ' ' + firstOrder[number%10-1]}}
  }