import datas from './input.js'

const splitedDatas = datas.split(/\n\n/)
// console.log(split)

const formatedArrays = splitedDatas.map((numbers) => {
  const group = numbers.split(/\n/)
  const groupNumber = group.map(Number)
  return groupNumber
})

console.log(formatedArrays)

const newArrayReduced = formatedArrays.map(formatedArray => {
    const sum = formatedArray.reduce((a, b) => a + b, 0)
    return sum
})

// // sort methode
// const maxNum = newArrayReduced.sort((a, b) => b - a)[0]

// Math.max methode
console.log(Math.max(...newArrayReduced))







