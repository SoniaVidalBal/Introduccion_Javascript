function calculateRandomNumber(min, max) {
    const RandomNumber = Math.random() * (max - min) + min;
    return RandomNumber
}

console.log('Inicio script')

function PedirCita(){
    const time = calculateRandomNumber(1000, 4000);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const citas = '12.30, 13.30, 14.30'; 
            resolve(citas)
        }, time);
    })
    return promise;
}
 
async function main(){
    try {
        const citasdisponibles = await PedirCita();
        console.log('Las citas disponibles son: ', citasdisponibles);
    } catch (error){
        console.log('no hay citas disponibles')
    }
    console.log('Fin de script')
}
      
main()