

console.log(`Hello, World`)

const firstname = `Justin`
let age = 23
console.log(firstname,age)

let x = 4
let y = 10
let z = 10+4

console.log(x, y, z)

let str = 'patrick mahomes'
let str2 = 'tyreek hill'

console.log(str, str2)

const lastName = 'McKenzie'

const justin = firstname + lastName

console.log(justin)

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question("Howdy, what's your name?", function(answer) {
    console.log("Hi " + answer)
})
