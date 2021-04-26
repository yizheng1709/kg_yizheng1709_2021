
let array = process.argv.slice(2)
const newArray = []
for (let num of array) {
    let currentNum = ""
    num = num.split('')
    for (let digit of num) {
        if (digit === "0") {
            currentNum += "Zero"
        } else if (digit === "1") {
            currentNum += "One"
        } else if (digit === "2") {
            currentNum += "Two"
        } else if (digit === "3") {
            currentNum += "Three"
        } else if (digit === "4") {
            currentNum += "Four"
        } else if (digit === "5") {
            currentNum += "Five"
        } else if (digit === "6") {
            currentNum += "Six"
        } else if (digit === "7") {
            currentNum += "Seven"
        } else if (digit === "8") {
            currentNum += "Eight"
        } else {
            currentNum += "Nine"
        }
    } newArray.push(currentNum)

}
console.log(newArray.join(','))


