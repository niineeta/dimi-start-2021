console.log('Hello user!')
console.log('Try to guess the mistery number.')
console.log('Use "submit(x)" to submit a number.')

const misteryNumber = Math.round(Math.random() * 100)

const submit = (x) => {
    if (x < misteryNumber) {
        console.log('Too small.')
    }
    if (x > misteryNumber) {
        console.log('Too big.')
    }
    if (x == misteryNumber) {
        console.log('Hurray!')
    }
}

const cheat = () => {
    console.log(`The mistery number is ${misteryNumber}`)
}
