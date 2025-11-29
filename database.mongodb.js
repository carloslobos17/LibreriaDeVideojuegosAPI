use('LibreriaVideojuegos')

db.getCollection("Usuario").insertOne([
    {
        nombre_completo: "Mario Martinez",
        email: "MarioM@gmail.com",
        fecha_registro: new Date('2025-12-31'),
        videojuegos: [
            {
                _id: ObjectId(),
                titulo: "River City Girls",
                fecha_lanzamiento: new Date('2019-09-05'),
                desarrollador:[
                    {_id: ObjectId()},
                    "WayForward"
                ],
                editora:[
                    {_id: ObjectId()},
                    "Arc System Works",
                    "WayForward",
                    "H2 Interactive"
                ],
                generos:[
                    {_id: ObjectId()},                    
                    "Beat 'em-up",
                    "Accion"
                ],
                prestamo_familiar: 'si',
                idiomas:[
                    {_id: ObjectId()},                    
                    "Ingles",
                    "Frances",
                    "Italiano",
                    "Alemán",
                    "Español de España",
                    "Japonés",
                    "Ruso",
                    "Coreano",
                    "Chino simplificado",
                    "Chino tradicional"
                ],
                precio: 14.99
            },
            {
                _id: ObjectId(),
                titulo: "Stardew Valley",
                fecha_lanzamiento: new Date('2016-02-26'),
                desarrollador:[
                    {_id: ObjectId()},
                    "ConcernedApe"
                ],
                editora:[
                    {_id: ObjectId()},
                    "ConcernedApe"
                ],
                generos:[
                    {_id: ObjectId()},
                    "Simulador de granja"
                ],
                prestamo_familiar: 'si',
                idiomas:[
                    {_id: ObjectId()},
                    "Ingles",
                    "Hungaro",
                    "Italiano",
                    "Alemán",
                    "Español de España",,
                    "Portugues de Brasil",,
                    "Japonés",
                    "Ruso",
                    "Coreano",
                    "Chino simplificado",
                    "Turco"
                ],
                precio: 4.99                
            }
        ]
    }
])