console.log('Hello user!')
console.log('Try to guess the mistery number.')
console.log('Use "submit(x)" to submit a number.')

const misteryNumber = Math.round(Math.random() * 100)

const submit = (x) => {
    if (x < misteryNumber) {
        console.log('Too small.')
        document.body.innerHTML = '<h1>Too small.</h1>'
        document.body.style.backgroundColor = '#ff5722'
    }
    if (x > misteryNumber) {
        console.log('Too big.')
        document.body.innerHTML = '<h1>Too big.</h1>'
        document.body.style.backgroundColor = '#03a9f4'
    }
    if (x == misteryNumber) {
        console.log('Hurray!')
        document.body.innerHTML = '<h1>Hurray!.</h1>'
        document.body.style.backgroundColor = '#ffeb3b'
    }
}

const cheat = () => {
    console.log(`The mistery number is ${misteryNumber}`)
}
