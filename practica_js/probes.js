import readline from 'readline'


const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
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
}
const numberconsole = await getorder()
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
        let position = calculateRandomNumber(0, students.length-1);
        delete(students[position]);
        console.table(students);
        break;
    case 6: /* Mostrar todos los datos de las alumnas chicas */
        students.forEach(student => {if(student.gender === 'female'){return student}
        })
        console.log(students)
        break;
    case 7: /* Mostrar cuantos chicos y chicas hay en clase */
        break;
    case 8: /* Mostrar true or false si todas las alumnas son chicas */
        break;
    case 9: /* Mostras los nombres de los alumnos que tengan entre 20 y 25 años */
        break;
    case 10: /* Añadir un alumno nuevo */
        break;
    case 11: /* Mostrar el nombre de la persona más joven */
        break;
    case 12: /* Mostrar edad media de todos los alumnos */
        break;
    case 13:/* Mostrar la edad media de las chicas */
        break;
    case 14: /* Añadir nueva nota. Calcula una nota aleatoria entre 0 y 10 y añade a la lista de cada alumno */
        students.forEach(student => {student.examScores.push(calculateRandomNumber(1, 10))   
        });
        console.table(students);
        break;
    case 15: /* Ordenar la lista de alumnos alfabéticamente */
        break;
}   