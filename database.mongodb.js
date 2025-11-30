use('LibreriaVideojuegos')

db.getCollection("Videojuegos").insertMany([
    {
        titulo: "River City Girls",
        fecha_lanzamiento: new Date('2019-09-05'),
        desarrollador:[
            "WayForward"
        ],
        editora:[
            "Arc System Works",
            "WayForward",
            "H2 Interactive"
        ],
        productores:[
            "David White",
            "Glenn Seidel",
            "Takaomi Kaneko"
        ],
        generos:[                  
            "Beat 'em-up",
            "Accion"
        ],
        prestamo_familiar: 'si',
        idiomas:[                  
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
        precio: 14.99,
        duracion: 7,
        plataformas:[
            "Nintendo Switch",
            "PlayStation 4",
            "Windows",
            "Xbox One",
            "PlayStation 5",
            "Android",
            "iOS"
        ]
    },
    {          
        titulo: "Stardew Valley",
        fecha_lanzamiento: new Date('2016-02-26'),
        desarrollador:[
            "ConcernedApe"
        ],
        editora:[
            "ConcernedApe"
        ],
        productores:[
            "ConcernedApe"
        ],
        generos:[
            "Simulador de granja"
        ],
        prestamo_familiar: 'si',
        idiomas:[
            "Ingles",
            "Hungaro",
            "Italiano",
            "Alemán",
            "Español de España",
            "Portugues de Brasil",
            "Japonés",
            "Ruso",
            "Coreano",
            "Chino simplificado",
            "Turco"
        ],
        precio: 4.99,
        duracion: 53.5,
        plataformas:[
            "Nintendo Switch",
            "PlayStation 4",
            "PlayStation Vita",
            "Windows",
            "macOS",
            "Linux",
            "Xbox One",
            "Android",
            "iOS"
        ]
    }
])

db.getCollection("Usuarios").insertOne({
        nombre_completo: "Mario Martinez",
        email: "MarioM@gmail.com",
        fecha_registro: new Date('2025-12-31'),
        biblioteca:[
            ObjectId('692c753d2d1b26dc1228b3e8'),
            ObjectId('692c753d2d1b26dc1228b3e9')
        ]
})