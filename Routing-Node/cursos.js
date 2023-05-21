const infoCursos = {
    'programacion':[
        {
            id:1,
            titulo:"Aprende Node",
            lenguaje:"JavaScript",
            vistas:15000,
            nivel:'basico'
        },
        {
            id:2,
            titulo:"Python Intermedio",
            lenguaje:"Python",
            vistas:952,
            nivel:"Intermedio"
        },
        {
            id:3,
            titulo:"Aprender Java",
            lenguaje:"JAVA",
            vistas:4500,
            nivel:"Intermedio"
        }
    ],
    'matematicas' : [
        {
            id:1,
            titulo:"Aprender Calculo",
            tema:"Calculo",
            vistas:2301,
            nivel:"Basico"
        },{
            id:2,
            titulo:"Aprende Algebra",
            tema:"Algebra",
            vistas:8974,
            nivel:"Avanzado"
        }
    ]
}

module.exports.infoCursos = infoCursos;