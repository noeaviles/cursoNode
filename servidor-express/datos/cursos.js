const infoCursos = {
    'programacion':[
        {
            id:1,
            titulo:"Aprende Node",
            lenguaje:"javascript",
            vistas:15000,
            nivel:'basico'
        },
        {
            id:2,
            titulo:"Python Intermedio",
            lenguaje:"python",
            vistas:952,
            nivel:"intermedio"
        },
        {
            id:3,
            titulo:"Aprender Java",
            lenguaje:"java",
            vistas:4500,
            nivel:"intermedio"
        }, {
            id:4,
            titulo:"Python Basico",
            lenguaje:"python",
            vistas:1052,
            nivel:"intermedio"
        },
    ],
    'matematicas' : [
        {
            id:1,
            titulo:"Aprender Calculo",
            tema:"calculo",
            vistas:2301,
            nivel:"basico"
        },{
            id:2,
            titulo:"Aprende Algebra",
            tema:"algebra",
            vistas:8974,
            nivel:"avanzado"
        }
    ]
}

module.exports.infoCursos = infoCursos;