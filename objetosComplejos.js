const curso = {
    nombre: "Matematicas",
    alumnos: [
        {nombre: "Ana",calificacion: 85},
        {nombre: "Carlos",calificacion: 90}, 
        {nombre: "Maria",calificacion: 95},         
    ]
};
const calcularPromedio = (curso) => {
    const totalCalificaciones = curso.alumnos.reduce((total,alumno) => total + alumno.calificacion, 0);
    const promedio =totalCalificaciones / curso.alumnos.length;
    return promedio;
};

const promedioCalificaciones = calcularPromedio(curso);
console.log(`El promedio es ${promedioCalificaciones.toFixed(2)}`);