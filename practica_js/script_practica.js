import readline from 'readline'

const students = [{
    age: 30,
    examScores: [],
    gender: 'female',
    name: 'Silvia'
  },
  {
    age: 22,
    examScores: [],
    gender: 'male',
    name: 'Edu'
  },
  {
    age: 20,
    examScores: [],
    gender: 'female',
    name: 'Sonia'
}]

const availableMaleNames = ['Pepe', 'Juan', 'Victor', 'Leo', 'Francisco', 'Carlos'];
const availableFemaleNames = ['Cecilia', 'Ana', 'Luisa', 'Sandra', 'Isabel', 'Virginia'];
const availableGenders = ['male', 'female'];

function calculateRandom(min, max) {
    const RandomNumber = Math.floor(Math.random() * (max - min +1)) + min;
    return RandomNumber;
}

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

const isInt = (str) => {
    const integer = parseInt(str);
    if (Number.isNaN(integer)) {
        return false;
    } else {
        return true;
    }
}

function getorder(){
    const promise = new Promise((resolve, reject) => {
        rl.question('Qué operación quieres realizar?: ', (num) => {
            rl.pause();
            if(isInt(num)){
                num = Number.parseInt(num);
                resolve(num);
            } else {
                reject('Se tiene que introducir un número');
            }
        })
    })
return promise;
}

async function whattodo(){
    let numberconsole
    do{
        try {
           numberconsole = await getorder(); 
        } catch (error) {
            console.log(error);
            process.exit(0);
        }
        if (numberconsole == 0){
            rl.close();
            console.log('Hasta pronto!');
        } else {
            orders(numberconsole);
        }
    }
    while (numberconsole != 0)
}

function orders(numberconsole){
    switch(numberconsole){
        case 1: /*Mostrar en formato tabla todos los alumnos*/
            console.table(students);
            break;
        case 2: /*Mostrar el número de alumnos que hay en clase*/
            console.log(students.length);
            break;
        case 3: /*Mostrar los nombres de todos los alumnos*/
            students.forEach(student => console.log(student.name));
            break;
        case 4: /* ELimina el último alumno de la clase */
            students.pop();
            console.log('Los alumnos que quedan en clase son: ');
            console.table(students);
            break;
        case 5: /* Eliminar un alumno aleatoriamente de la clase */
            const position = calculateRandom(0, students.length-1);
            students.splice(position, 1);
            console.table(students);
            break;
        case 6: /* Mostrar todos los datos de las alumnas chicas */
            students.forEach(student => {
                if(student.gender === 'female'){
                    return console.log(student)}
            });
            break;
        case 7: /* Mostrar cuantos chicos y chicas hay en clase */
            let females = 0;
            let males = 0;
            students.forEach(student => {
                if (student.gender === 'male') {
                    males += 1 
                } else {
                    females +=1 }
            });
            console.log('Hombres: ', males, 'Mujeres: ', females);  
            break;
        case 8: /* Mostrar true or false si todas las alumnas son chicas */
            console.log(students.every(student => student.gender === 'female'));
            break;
        case 9: /* Mostrar los nombres de los alumnos que tengan entre 20 y 25 años */
            const intwenties = students.filter(student => student.age >= 20 && student.age <= 25);
            intwenties.forEach(twentie => console.log(twentie.name));
            break;
        case 10: /* Añadir un alumno nuevo */
            const randomgender = availableGenders[Math.floor(Math.random() * availableGenders.length)];
            let randomname = '';
            if (randomgender === 'male'){
                randomname += availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)]
            } else if (randomgender === 'female'){
                randomname += availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)]
            };
            students.push({ 
                age: calculateRandom(20, 50), 
                examScores: [], 
                gender: randomgender, 
                name: randomname,
            });
            console.table(students);
            break;
        case 11: /* Mostrar el nombre de la persona más joven */
            let ages = []
            students.forEach(student => {ages.push([student.age]);
            })
            const min = Math.min(...ages);
            for(let index = 0; index < students.length; index++){
                if (students[index].age === min){
                    return console.log(students[index].name);
                }}
            break;
        case 12: /* Mostrar edad media de todos los alumnos */
            const sumAge = students.reduce((accum, students) => 
                accum + students.age, 0) / students.length;
            console.log(sumAge);
            break;
        case 13: /* Mostrar la edad media de las chicas */
            let newfemlist = [];
            students.forEach(student => {
                if (student.gender === 'female'){
                    newfemlist.push(student.age);
            }})
            const sum = newfemlist.reduce((accum, girl) => accum + girl, 0) / newfemlist.length;
            console.log(sum);
            break;
        case 14: /* Añadir nueva nota. Calcula una nota aleatoria entre 0 y 10 y añade a la lista de cada alumno */
            students.forEach(student => {student.examScores.push(calculateRandom(1, 10))   
            })
            console.table(students);
            break;
        case 15: /* Ordenar la lista de alumnos alfabéticamente */
            console.table(students.sort(function(alumno1, alumno2) {
                if (alumno1.name > alumno2.name) {
                    return 1;
                } else if (alumno1.name < alumno2.name) {
                    return -1; 
                }
                return 0;
            }))
            break;
        case 16: /* Mostrar por consola el alumno con mejores notas. Sumatorio de notas más alto */
            let sumatorio = [];
            students.forEach(student =>
                sumatorio.push(student.examScores.reduce((accum, nota) => accum + nota, 0))
            )
            const max = Math.max(...sumatorio);
            for(let index = 0; index < students.length; index++){
                const suma = students[index].examScores.reduce((accum, nota) => accum + nota, 0)
                if ( suma === max) {
                    return console.log(students[index]);
            }}
            break;
        case 17: /* Mostrar la nota media más alta de la clase y el nombre del alumno al que pertenece */
            let notamedia = [];
            students.forEach(student =>
                notamedia.push(student.examScores.reduce((accum, nota) => 
                    accum + nota, 0) / student.examScores.length
            ));
            const maxnota = Math.max(...notamedia);
            for(let index = 0; index < students.length; index++) {
                const media = students[index].examScores.reduce((accum, nota) => 
                    accum + nota, 0) / students[index].examScores.length;
                if (media === maxnota) {
                    return console.log(students[index].name, media);
            }}
            break;
        case 18: /*Añadir un punto extra a cada nota existente de todos los alumnos. La nota máxima posible es 10. 
        Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10. */
            for(let index = 0; index < students.length; index++) {
                students[index].examScores = (students[index].examScores.map(function(x){
                    if(x < 10){
                        return x += 1;
                    } else {
                        return x;
                    }
                }))
                if(students[index].examScores.length == 0){
                    students[index].examScores.push(10);
                }
            }
            console.table(students);
            break;
    }
}

whattodo()