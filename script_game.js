
import readline from 'readline'

function calculateRandomNumber(min, max) {
    const RandomNumber = Math.floor(Math.random() * (max - min +1)) + min;
    return RandomNumber;
}

const secretnumber = calculateRandomNumber(0, 20);
console.log(secretnumber);
/*En navegador: prompt('Di un numero: ');*/

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});



function getnumberforconsole(){
    const promise = new Promise((resolve, reject) => {
        rl.question('Introduce el número: ', (num) => {
            rl.pause();
            resolve(num)
        })
    })
return promise;
}
const numberconsole = await getnumberforconsole()

rl.close()
console.log(numberconsole)