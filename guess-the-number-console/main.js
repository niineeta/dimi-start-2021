console.log('Hello user!')
console.log('Try to guess the mistery number.')
console.log('Use "submit(x)" to submit a number.')

const misteryNumber = 45

const submit = (x) => {
    if (x < mysteryNumber) {
        console.log('Too small.')
    }
    if (x > mysteryNumber) {
        console.log('Too big.')
    }
    if (x == mysteryNumber) {
        console.log('Hurray!')
    }
}