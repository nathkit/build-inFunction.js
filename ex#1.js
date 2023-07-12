let numbers = [1, 2, 3, 4, 5]

const squaredNumbers = (numbers) => {
    return Math.pow(numbers,numbers)
}

const newNumbers = numbers.map(squaredNumbers);

console.log(newNumbers);