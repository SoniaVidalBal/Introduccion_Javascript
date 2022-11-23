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
            const randomGender = availableGenders[Math.floor(Math.random() * availableGenders.length)];
            let randomName = '';
            if (randomGender === 'male'){
                randomName += availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)]
            } else if (randomGender === 'female'){
                randomName += availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)]
            };
            students.push({ 
                age: calculateRandom(20, 50), 
                examScores: [], 
                gender: randomGender, 
                name: randomName,
            });
            console.table(students);
            break;
        case 11: /* Mostrar el nombre de la persona más joven */
            let ages = [];
            students.forEach(student => {
                ages.push([student.age])
            });
            const min = Math.min(...ages);
            students.forEach(student => {
                if (student.age === min){
                    return console.log('La persona más joven de la clase es: ', student.name)
                };
            });
            break;
        case 12: /* Mostrar edad media de todos los alumnos */
            const initialValue = 0;
            const sumWithInitial = students.reduce((accumulator, students
                ) => accumulator + students.age, initialValue) / students.length;
            console.log('La edad media de la clase es: ', sumWithInitial);
            break;
        case 13: /* Mostrar la edad media de las chicas */
            let newfemlist = [];
            students.forEach(student => {
                if (student.gender === 'female'){
                    newfemlist.push(student.age)
                }
            });
            console.log(newfemlist)
            const sum = newfemlist.reduce(function(a, b){return (a + b)})/newfemlist.length;
            console.log('La edad media de las chicas en clase es: ', sum);
            break;
        case 14: /* Añadir nueva nota. Calcula una nota aleatoria entre 0 y 10 y añade a la lista de cada alumno */
            students.forEach(student => {student.examScores.push(calculateRandom(1, 10))   
            });
            console.table(students);
            break;
        case 15: /* Ordenar la lista de alumnos alfabéticamente */
            console.table(students.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1
                };
                if (a.name < b.name) {
                    return -1  
                };
                return 0;
            }));
            break;
    }
}

async function whattodo(){
    let numberconsole
    do{
        try {
           numberconsole = await getorder(); 
        } catch (error) {
            console.log(error)
            process.exit(0)
        };
        if (numberconsole == 0){
            rl.close()
            console.log('Hasta pronto!')
        } else {
            orders(numberconsole)
        };
    }
    while (numberconsole != 0)
}

whattodo()