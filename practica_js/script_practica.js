import readline from 'readline'

const students = [{
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  },
  {
    age: 22,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 20,
    examScores: [],
    gender: 'female',
    name: 'sonia'
}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

function calculateRandom(min, max) {
    const RandomNumber = Math.floor(Math.random() * (max - min +1)) + min;
    return RandomNumber;
};

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

function getorder(){
    const promise = new Promise((resolve, reject) => {
        rl.question('Qué operación quieres realizar?: ', (num) => {
            rl.pause();
            resolve(num)
        })
    })
return promise;
};

const numberconsole = await getorder();

if (numberconsole == 1){ /*Mostrar en formato tabla todos los alumnos*/
    console.table(students)
}
else if (numberconsole == 2){ /*Mostrar el número de alumnos que hay en clase*/
    console.log(students.length)
}
else if (numberconsole == 3){ /*Mostrar los nombres de todos los alumnos*/
   students.forEach(student => console.log(student.name))
}
else if (numberconsole == 4){ /* ELimina el último alumno de la clase */
    students.pop()
    console.log('Los alumnos que quedan en clase son: ')
    console.table(students)
}
else if (numberconsole == 5){ /* Eliminar un alumno aleatoriamente de la clase */
    let position = calculateRandom(0, students.length-1)
    students.splice(position, 1)
    console.table(students)
}
else if (numberconsole == 6){ /* Mostrar todos los datos de las alumnas chicas */
    students.forEach(student => {
        if(student.gender === 'female'){
            return console.log(student)}
    })
}
else if (numberconsole == 7){ /* Mostrar cuantos chicos y chicas hay en clase */
    let females = 0
    let males = 0
    students.forEach(student => {
        if (student.gender === 'male') {
            males += 1 
        } else {
            females +=1 }
    })
    console.log('Hombres: ', males, 'Mujeres: ', females)  
}
else if (numberconsole == 8){ /* Mostrar true or false si todas las alumnas son chicas */
    function isFemale (students){
        if (students.gender === 'female') {
            return true 
        } else {
            return false }
    
    };
    console.log(students.every(isFemale))
}
else if (numberconsole == 9){ /* Mostrar los nombres de los alumnos que tengan entre 20 y 25 años */
    function istwenties(students){
        if (students.age >= 20 && students.age <= 25){
            return true
        } else {
            return false
        }
    }
    const young = students.filter(istwenties)
    console.table(young)
}
else if (numberconsole == 10){ /* Añadir un alumno nuevo */
    const randomGender = availableGenders[Math.floor(Math.random() * availableGenders.length)];
    let randomName = '';
    if (randomGender === 'male'){
        randomName += availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];
    } else if (randomGender === 'female'){
        randomName += availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)];
    };
    students.push({ 
        age: calculateRandom(20, 50), 
        examScores: [], 
        gender: randomGender, 
        name: randomName,
    });
    console.table(students);
}
else if (numberconsole == 11){ /* Mostrar el nombre de la persona más joven */

}
else if (numberconsole == 12){ /* Mostrar edad media de todos los alumnos */

}
else if (numberconsole == 13){ /* Mostrar la edad media de las chicas */

}
else if (numberconsole == 14){ /* Añadir nueva nota. Calcula una nota aleatoria entre 0 y 10 y añade a la lista de cada alumno */
    students.forEach(student => {student.examScores.push(calculateRandom(1, 10))   
    });
    console.table(students);
}
else if (numberconsole == 15){ /* Ordenar la lista de alumnos alfabéticamente */
    console.table(students.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
    }))
}