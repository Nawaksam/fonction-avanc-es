const peoples = [
  "JoHn",
  "ChrISTiana",
  "anThoNY",
  "MARia",
  "jaMeS",
  "MIChaEl",
  "jeNNIFeR",
]

// prettier-ignore
const toPascalStr = (str) => {
  let strArr = str.split(" ")
  for (let word of strArr) {
    strArr[strArr.indexOf(word)] = `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`
  }
  return strArr.join("")
}

const toPascalArr = (array, method) => {
  for (let str of array) {
    array[array.indexOf(str)] = method(str)
  }
}

toPascalArr(peoples, toPascalStr)
console.log(peoples)
