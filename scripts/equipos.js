const paises = [
            { nombre: "México", codigo: "mx" },
            { nombre: "Sudáfrica", codigo: "za" },
            { nombre: "Corea del Sur", codigo: "kr" },
            { nombre: "Chequia", codigo: 'cz'},
            { nombre: "Canadá", codigo: "ca" },
            { nombre: "Bosnia y Herzegovina", codigo: "ba" },
            { nombre: "Qatar", codigo: "qa" },
            { nombre: "Suiza", codigo: "ch" },
            { nombre: "Brasil", codigo: "br" },
            { nombre: "Marruecos", codigo: "ma" },
            { nombre: "Haití", codigo: "ht" },
            { nombre: "Escocia", codigo: "gb-sct" },
            { nombre: "Estados Unidos", codigo: "us" },
            { nombre: "Paraguay", codigo: "py" },
            { nombre: "Australia", codigo: "au" },
            { nombre: "Turquía", codigo: "tr" },
            { nombre: "Alemania", codigo: "de" },
            { nombre: "Curazao", codigo: "cw" },
            { nombre: "Costa de Marfil", codigo: "ci" },
            { nombre: "Ecuador", codigo: "ec" },
            { nombre: "Países Bajos", codigo: "nl" },
            { nombre: "Japón", codigo: "jp" },
            { nombre: "Suecia", codigo: "se" },
            { nombre: "Túnez", codigo: "tn" },       
            { nombre: "Bélgica", codigo: "be" },
            { nombre: "Egipto", codigo: "eg" },
            { nombre: "Irán", codigo: "ir" },
            { nombre: "Nueva Zelanda", codigo: "nz" },       
            { nombre: "España", codigo: "es" },
            { nombre: "Cabo Verde", codigo: "cv" },
            { nombre: "Arabia Saudita", codigo: "sa" },
            { nombre: "Uruguay", codigo: "uy" },        
            { nombre: "Francia", codigo: "fr" },
            { nombre: "Senegal", codigo: "sn" },
            { nombre: "Irak", codigo: "iq" },
            { nombre: "Noruega", codigo: "no" },        
            { nombre: "Argentina", codigo: "ar" },
            { nombre: "Argelia", codigo: "dz" },
            { nombre: "Austria", codigo: "at" },
            { nombre: "Jordania", codigo: "jo" },        
            { nombre: "Portugal", codigo: "pt" },
            { nombre: "RD Congo", codigo: "cd" },
            { nombre: "Uzbekistán", codigo: "uz" },
            { nombre: "Colombia", codigo: "co" },        
            { nombre: "Inglaterra", codigo: "gb-eng" }, // Código específico de Flagcdn para Inglaterra
            { nombre: "Croacia", codigo: "hr" },
            { nombre: "Ghana", codigo: "gh" },
            { nombre: "Panamá", codigo: "pa" }
];

const gruposMundial = [
    {
        id: 1,
        grupo: "A",
        equipos: [
            { nombre: "México", codigo: "mx" },
            { nombre: "Sudáfrica", codigo: "za" },
            { nombre: "Corea del Sur", codigo: "kr" },
            { nombre: "Chequia", codigo: 'cz'}
        ]
    },
    {
        id: 2,
        grupo: "B",
        equipos: [
            { nombre: "Canadá", codigo: "ca" },
            { nombre: "Bosnia y Herzegovina", codigo: "ba" },
            { nombre: "Qatar", codigo: "qa" },
            { nombre: "Suiza", codigo: "ch" },
        ]
    },
    {
        id: 3,
        grupo: "C",
        equipos: [
            { nombre: "Brasil", codigo: "br" },
            { nombre: "Marruecos", codigo: "ma" },
            { nombre: "Haití", codigo: "ht" },
            { nombre: "Escocia", codigo: "gb-sct" }
        ]
    },
    {
        id: 4,
        grupo: "D",
        equipos: [
            { nombre: "Estados Unidos", codigo: "us" },
            { nombre: "Paraguay", codigo: "py" },
            { nombre: "Australia", codigo: "au" },
            { nombre: "Turquía", codigo: "tr" }
        ]
    },
    {
        id: 5,
        grupo: "E",
        equipos: [
            { nombre: "Alemania", codigo: "de" },
            { nombre: "Curazao", codigo: "cw" },
            { nombre: "Costa de Marfil", codigo: "ci" },
            { nombre: "Ecuador", codigo: "ec" }
        ]
    },
    {
        id: 6,
        grupo: "F",
        equipos: [
            { nombre: "Países Bajos", codigo: "nl" },
            { nombre: "Japón", codigo: "jp" },
            { nombre: "Suecia", codigo: "se" },
            { nombre: "Túnez", codigo: "tn" }
        ]
    },
    {
        id: 7,
        grupo: "G",
        equipos: [
            { nombre: "Bélgica", codigo: "be" },
            { nombre: "Egipto", codigo: "eg" },
            { nombre: "Irán", codigo: "ir" },
            { nombre: "Nueva Zelanda", codigo: "nz" }
        ]
    },
    {
        id: 8,
        grupo: "H",
        equipos: [
            { nombre: "España", codigo: "es" },
            { nombre: "Cabo Verde", codigo: "cv" },
            { nombre: "Arabia Saudita", codigo: "sa" },
            { nombre: "Uruguay", codigo: "uy" }
        ]
    },
    {
        id: 9,
        grupo: "I",
        equipos: [
            { nombre: "Francia", codigo: "fr" },
            { nombre: "Senegal", codigo: "sn" },
            { nombre: "Irak", codigo: "iq" },
            { nombre: "Noruega", codigo: "no" }
        ]
    },
    {
        id: 10,
        grupo: "J",
        equipos: [
            { nombre: "Argentina", codigo: "ar" },
            { nombre: "Argelia", codigo: "dz" },
            { nombre: "Austria", codigo: "at" },
            { nombre: "Jordania", codigo: "jo" }
        ]
    },
    {
        id: 11,
        grupo: "K",
        equipos: [
            { nombre: "Portugal", codigo: "pt" },
            { nombre: "RD Congo", codigo: "cd" },
            { nombre: "Uzbekistán", codigo: "uz" },
            { nombre: "Colombia", codigo: "co" }
        ]
    },
    {
        id: 12,
        grupo: "L",
        equipos: [
            { nombre: "Inglaterra", codigo: "gb-eng" }, // Código específico de Flagcdn para Inglaterra
            { nombre: "Croacia", codigo: "hr" },
            { nombre: "Ghana", codigo: "gh" },
            { nombre: "Panamá", codigo: "pa" }
        ]
    }
];

const partidosFaseGrupo = [
    { id: 1, fecha: '11-06-2026', hora: "4:00 pm", grupo: "A", equipos: {cod1: "mx", cod2: "za"} },
    { id: 2, fecha: '11-06-2026', hora: "11:00 pm", grupo: "A", equipos: {cod1: "kr", cod2: "cz"} },
    { id: 3, fecha: '12-06-2026', hora: "4:00 pm", grupo: "B", equipos: {cod1: "ca", cod2: "ba"} },
    { id: 4, fecha: '12-06-2026', hora: "10:00 pm", grupo: "D", equipos: {cod1: "us", cod2: "py"} },
    { id: 5, fecha: '13-06-2026', hora: "4:00 pm", grupo: "B", equipos: {cod1: "qa", cod2: "ch"} },
    { id: 6, fecha: '13-06-2026', hora: "7:00 pm", grupo: "C", equipos: {cod1: "br", cod2: "ma"} },
    { id: 7, fecha: '13-06-2026', hora: "10:00 pm", grupo: "C", equipos: {cod1: "ht", cod2: "gb-sct"} },
    { id: 8, fecha: '14-06-2026', hora: "1:00 am", grupo: "D", equipos: {cod1: "au", cod2: "tr"} },
    { id: 9, fecha: '14-06-2026', hora: "2:00 pm", grupo: "E", equipos: {cod1: "de", cod2: "cw"} },
    { id: 10, fecha: '14-06-2026', hora: "5:00 pm", grupo: "F", equipos: {cod1: "nl", cod2: "jp"} },
    { id: 11, fecha: '14-06-2026', hora: "8:00 pm", grupo: "E", equipos: {cod1: "ci", cod2: "ec"} },
    { id: 12, fecha: '14-06-2026', hora: "11:00 pm", grupo: "F", equipos: {cod1: "se", cod2: "tn"} },
    { id: 13, fecha: '15-06-2026', hora: "1:00 pm", grupo: "H", equipos: {cod1: "es", cod2: "cv"} },
    { id: 14, fecha: '15-06-2026', hora: "4:00 pm", grupo: "G", equipos: {cod1: "be", cod2: "eg"} },
    { id: 15, fecha: '15-06-2026', hora: "7:00 pm", grupo: "H", equipos: {cod1: "sa", cod2: "uy"} },
    { id: 16, fecha: '15-06-2026', hora: "10:00 pm", grupo: "G",equipos: {cod1: "ir", cod2: "nz"} },
    { id: 17, fecha: '16-06-2026', hora: "4:00 pm", grupo: "I", equipos: {cod1: "fr", cod2: "sn"} },
    { id: 18, fecha: '16-06-2026', hora: "7:00 pm", grupo: "I", equipos: {cod1: "iq", cod2: "no"}  },
    { id: 19, fecha: '16-06-2026', hora: "10:00 pm", grupo: "J", equipos: {cod1: "ar", cod2: "dz"} },
    { id: 20, fecha: '17-06-2026', hora: "1:00 pm", grupo: "J", equipos: {cod1: "at", cod2: "jo"} },
    { id: 21, fecha: '17-06-2026', hora: "2:00 pm", grupo: "K", equipos: {cod1: "pt", cod2: "cd"} },
    { id: 22, fecha: '17-06-2026', hora: "5:00 pm", grupo: "L", equipos: {cod1: "gb-eng", cod2: "hr"} },
    { id: 23, fecha: '17-06-2026', hora: "8:00 pm", grupo: "L", equipos: {cod1: "gh", cod2: "pa"} },
    { id: 24, fecha: '17-06-2026', hora: "11:00 pm", grupo: "K", equipos: {cod1: "uz", cod2: "co"} },
    { id: 25, fecha: '18-06-2026', hora: "1:00 pm", grupo: "A", equipos: {cod1: "cz", cod2: "za"} },
    { id: 26, fecha: '18-06-2026', hora: "4:00 pm", grupo: "B", equipos: {cod1: "ch", cod2: "ba"} },
    { id: 27, fecha: '18-06-2026', hora: "7:00 pm", grupo: "B", equipos: {cod1: "ca", cod2: "qa"} },
    { id: 28, fecha: '18-06-2026', hora: "10:00 pm", grupo: "A", equipos: {cod1: "mx", cod2: "kr"} },
    { id: 29, fecha: '19-06-2026', hora: "4:00 pm", grupo: "D", equipos: {cod1: "us", cod2: "au"} },
    { id: 30, fecha: '19-06-2026', hora: "7:00 pm", grupo: "C", equipos: {cod1: "gb-sct", cod2: "ma"} },
    { id: 31, fecha: '19-06-2026', hora: "9:30 pm", grupo: "C", equipos: {cod1: "br", cod2: "ht"} },
    { id: 32, fecha: '20-06-2026', hora: "12:00 am", grupo: "D", equipos: {cod1: "tr", cod2: "py"} },
    { id: 33, fecha: '20-06-2026', hora: "2:00 pm", grupo: "F", equipos: {cod1: "nl", cod2: "se"} },
    { id: 34, fecha: '20-06-2026', hora: "5:00 pm", grupo: "E", equipos: {cod1: "de", cod2: "ci"} },
    { id: 35, fecha: '20-06-2026', hora: "9:00 pm", grupo: "E", equipos: {cod1: "ec", cod2: "cw"} },
    { id: 36, fecha: '21-06-2026', hora: "1:00 am", grupo: "F", equipos: {cod1: "tn", cod2: "jp"} },
    { id: 37, fecha: '21-06-2026', hora: "1:00 pm", grupo: "H", equipos: {cod1: "es", cod2: "sa"} },
    { id: 38, fecha: '21-06-2026', hora: "4:00 pm", grupo: "G", equipos: {cod1: "be", cod2: "ir"} },
    { id: 39, fecha: '21-06-2026', hora: "7:00 pm", grupo: "H", equipos: {cod1: "uy", cod2: "cv"} },
    { id: 40, fecha: '21-06-2026', hora: "10:00 pm", grupo: "G", equipos: {cod1: "nz", cod2: "eg"} },
    { id: 41, fecha: '22-06-2026', hora: "2:00 pm", grupo: "J", equipos: {cod1: "ar", cod2: "at"} },
    { id: 42, fecha: '22-06-2026', hora: "6:00 pm", grupo: "I", equipos: {cod1: "fr", cod2: "iq"} },
    { id: 43, fecha: '22-06-2026', hora: "9:00 pm", grupo: "I", equipos: {cod1: "no", cod2: "sn"} },
    { id: 44, fecha: '23-06-2026', hora: "12:00 am", grupo: "J", equipos: {cod1: "jo", cod2: "dz"} },
    { id: 45, fecha: '23-06-2026', hora: "2:00 pm", grupo: "K", equipos: {cod1: "pt", cod2: "uz"} },
    { id: 46, fecha: '23-06-2026', hora: "5:00 pm", grupo: "L", equipos: {cod1: "gb-eng", cod2: "gh"} },
    { id: 47, fecha: '23-06-2026', hora: "8:00 pm",  grupo: "L", equipos: {cod1: "pa", cod2: "hr"} },
    { id: 48, fecha: '23-06-2026', hora: "11:00 pm", grupo: "K", equipos: {cod1: "co", cod2: "cd"}},
    { id: 49, fecha: '24-06-2026', hora: "4:00 pm", grupo: "B", equipos: {cod1: "ch", cod2: "ca"} },
    { id: 50, fecha: '24-06-2026', hora: "4:00 pm", grupo: "B", equipos: {cod1: "ba", cod2: "qa"} },
    { id: 51, fecha: '24-06-2026', hora: "7:00 pm", grupo: "C", equipos: {cod1: "ma", cod2: "ht"} },
    { id: 52, fecha: '24-06-2026', hora: "7:00 pm", grupo: "C", equipos: {cod1: "gb-sct", cod2: "br"} },
    { id: 53, fecha: '24-06-2026', hora: "10:00 pm", grupo: "A", equipos: {cod1: "za", cod2: "kr"} },
    { id: 54, fecha: '24-06-2026', hora: "10:00 pm", grupo: "A", equipos: {cod1: "cz", cod2: "mx"} },
    { id: 55, fecha: '25-06-2026', hora: "5:00 pm", grupo: "E", equipos: {cod1: "cw", cod2: "ci"} },
    { id: 56, fecha: '25-06-2026', hora: "5:00 pm", grupo: "E", equipos: {cod1: "ec", cod2: "de"} },
    { id: 57, fecha: '25-06-2026', hora: "8:00 pm", grupo: "F", equipos: {cod1: "tn", cod2: "nl"} },
    { id: 58, fecha: '25-06-2026', hora: "8:00 pm", grupo: "F", equipos: {cod1: "jp", cod2: "se"} },
    { id: 59, fecha: '25-06-2026', hora: "11:00 pm", grupo: "D", equipos: {cod1: "tr", cod2: "us"} },
    { id: 60, fecha: '25-06-2026', hora: "11:00 pm", grupo: "D", equipos: {cod1: "py", cod2: "au"} },
    { id: 61, fecha: '26-06-2026', hora: "4:00 pm", grupo: "I", equipos: {cod1: "no", cod2: "fr"} },
    { id: 62, fecha: '26-06-2026', hora: "4:00 pm", grupo: "I", equipos: {cod1: "sn", cod2: "iq"} },
    { id: 63, fecha: '26-06-2026', hora: "9:00 pm", grupo: "H", equipos: {cod1: "cv", cod2: "sa"} },
    { id: 64, fecha: '26-06-2026', hora: "9:00 pm", grupo: "H", equipos: {cod1: "uy", cod2: "es"} },
    { id: 65, fecha: '27-06-2026', hora: "12:00 pm", grupo: "G", equipos: {cod1: "nz", cod2: "be"} },
    { id: 66, fecha: '27-06-2026', hora: "12:00 pm", grupo: "G", equipos: {cod1: "eg", cod2: "ir"} },
    { id: 67, fecha: '27-06-2026', hora: "6:00 pm", grupo: "L", equipos: {cod1: "pa", cod2: "gb-eng"} },
    { id: 68, fecha: '27-06-2026', hora: "6:00 pm", grupo: "L", equipos: {cod1: "hr", cod2: "gh"} },
    { id: 69, fecha: '27-06-2026', hora: "8:30 pm", grupo: "K", equipos: {cod1: "co", cod2: "pt"} },
    { id: 70, fecha: '27-06-2026', hora: "8:30 pm", grupo: "K", equipos: {cod1: "cd", cod2: "uz"} },
    { id: 71, fecha: '27-06-2026', hora: "11:00 pm", grupo: "J", equipos: {cod1: "dz", cod2: "at"} },
    { id: 72, fecha: '27-06-2026', hora: "11:00 pm", grupo: "J", equipos: {cod1: "ar", cod2: "jo"} }
];

const partidosEliminatorias = [
    {id: 1, fecha: '28-06-2026', hora: "4:00 pm"},
    {id: 2, fecha: '29-06-2026', hora: "10:00 pm"},
    {id: 3, fecha: '29-06-2026', hora: "5:30 pm"},
    {id: 4, fecha: '30-06-2026', hora: "6:00 pm"},
    {id: 5, fecha: '1-07-2026', hora: "5:00 pm"},
    {id: 6, fecha: '1-07-2026', hora: "9:00 pm"},
    {id: 7, fecha: '2-07-2026', hora: "4:00 pm"},
    {id: 8, fecha: '2-07-2026', hora: "8:00 pm"},
    {id: 9, fecha: '29-06-2026', hora: "2:00 pm"},
    {id: 10, fecha: '30-06-2026', hora: "2:00 pm"},
    {id: 11, fecha: '30-06-2026', hora: "10:00 pm"},
    {id: 12, fecha: '1-07-2026', hora: "1:00 pm"},
    {id: 13, fecha: '3-07-2026', hora: "12:00 pm"},
    {id: 14, fecha: '3-07-2026', hora: "10:30 pm"},
    {id: 15, fecha: '3-07-2026', hora: "3:00 pm"},
    {id: 16, fecha: '3-07-2026', hora: "7:00 pm"},
];

const partidosOctavos = [
    {id: 1, fecha: '4-07-2026', hora: "2:00 pm"},
    {id: 2, fecha: '4-07-2026', hora: "6:00 pm"},
    {id: 3, fecha: '6-07-2026', hora: "9:00 pm"},
    {id: 4, fecha: '6-07-2026', hora: "4:00 pm"},
    {id: 5, fecha: '5-07-2026', hora: "5:00 pm"},
    {id: 6, fecha: '5-07-2026', hora: "9:00 pm"},
    {id: 7, fecha: '7-07-2026', hora: "5:00 pm"},
    {id: 8, fecha: '7-07-2026', hora: "7:00 pm"},
];

const partidosCuartos = [
    {id: 1, fecha: '9-07-2026', hora: "5:00 pm"},
    {id: 2, fecha: '10-07-2026', hora: "4:00 pm"},
    {id: 3, fecha: '11-07-2026', hora: "6:00 pm"},
    {id: 4, fecha: '11-07-2026', hora: "10:00 pm"},
];

const partidosSemi = [
    {id: 1, fecha: '14-07-2026', hora: "4:00 pm"},
    {id: 2, fecha: '15-07-2026', hora: "4:00 pm"},
];

const partidosPuestos = [
    {id: 1, fecha: '18-07-2026', hora: "6:00 pm"},
];

const partidosFinal = [
    {id: 1, fecha: '19-07-2026', hora: "4:00 pm"},
];

//funcion fixture para fase de grupos
function renderGrupos() {
    const contenedor = document.getElementById("grupos-container")
    contenedor.innerHTML = "";

    gruposMundial.forEach(zona => {
        const seccionGrupo = document.createElement("section");
        seccionGrupo.classList.add("grupo-seccion");
        seccionGrupo.innerHTML = `<h2>Grupo ${zona.grupo}</h2>`;

        const partidosContenedor = document.createElement("div");
        partidosContenedor.classList.add("partidos-lista");
        // filtro de los partidos de este grupo
        const partidosDeEstaZona = partidosFaseGrupo.filter(partido => partido.grupo === zona.grupo);

        partidosDeEstaZona.forEach(partido => {
            // busqueda de los nombres de los equipos usando sus códigos
            const equipo1 = zona.equipos.find(e => e.codigo === partido.equipos.cod1);
            const equipo2 = zona.equipos.find(e => e.codigo === partido.equipos.cod2);

            if (!equipo1 || !equipo2) {
                console.error(`Error en el Partido ID: ${partido.id} (Grupo ${partido.grupo}). Uno de los códigos (${partido.equipos.cod1} o ${partido.equipos.cod2}) no coincide con los del grupo.`);
                return; // Pasa al siguiente partido sin colgar el bucle
            }

            // tarjeta 
            const tarjetaPartido = `
                <div class="partido-container">
                <div class="partido-info-header">
                    <small> ${partido.fecha} -  ${partido.hora}</small>
                </div>
                <div class="partido-card">
                    <div class="equipo1">
                        <img src="https://flagcdn.com/${equipo1.codigo}.svg" width="30" alt="${equipo1.nombre}">
                        <span>${equipo1.nombre}</span>
                    </div>

                    <div class="marcador">
                        <input type="number" min="0" id="goles-L-${partido.id}" placeholder="0">
                        <span class="separador">-</span>
                        <input type="number" min="0" id="goles-V-${partido.id}" placeholder="0">
                    </div>

                    <div class="equipo2">
                        <span>${equipo2.nombre}</span>
                        <img src="https://flagcdn.com/${equipo2.codigo}.svg" width="30" alt="${equipo2.nombre}">
                    </div>
                </div>
                </div>
            `;
            partidosContenedor.innerHTML += tarjetaPartido;
        });

        seccionGrupo.appendChild(partidosContenedor);
        contenedor.appendChild(seccionGrupo);
    });
}

renderGrupos();

// --- ELIMINATORIAS DE 32 (Fase de 32) ---
const contenedorEliminatoria = document.getElementById("eliminatoria-container");

partidosEliminatorias.forEach(partido => {
    const tarjetaPartido = document.createElement("div");
    tarjetaPartido.classList.add("partido-eliminatoria-card");
    tarjetaPartido.innerHTML = `
        <div class="partido-info-header"> ${partido.fecha} - ${partido.hora}</div>
        <div class="partido-content">
            <div class="buscador-equipo">
                <div class="input-contenedor">
                    <span class="bandera-fija" id="bandera-e32-1-${partido.id}"></span>
                    <input type="text" class="input-pais e" data-target="e32-1-${partido.id}" placeholder="A definir">
                </div>
                <div class="sugerencias-desplegable" id="sugerencias-e32-1-${partido.id}"></div>
            </div>
            <div class="marcador">
                <input type="number" min="0" id="goles-1-e32-${partido.id}" placeholder="0">
                <span class="separador">-</span>
                <input type="number" min="0" id="goles-2-e32-${partido.id}" placeholder="0">
            </div>
            <div class="buscador-equipo">
                <div class="input-contenedor">
                    <span class="bandera-fija" id="bandera-e32-2-${partido.id}"></span>
                    <input type="text" class="input-pais e" data-target="e32-2-${partido.id}" placeholder="A definir">
                </div>
                <div class="sugerencias-desplegable" id="sugerencias-e32-2-${partido.id}"></div>
            </div>
        </div>
    `;
    contenedorEliminatoria.appendChild(tarjetaPartido);
});


// --- OCTAVOS DE FINAL ---
const contenedorOctavos = document.getElementById("octavos-container");

partidosOctavos.forEach(partido => {
    const tarjetaPartido = document.createElement("div");
    tarjetaPartido.classList.add("partido-eliminatoria-card");
    tarjetaPartido.innerHTML = `
        <div class="partido-info-header"> ${partido.fecha} - ${partido.hora}</div>
        <div class="partido-content">
            <div class="buscador-equipo">
                <div class="input-contenedor">
                    <span class="bandera-fija" id="bandera-oct-1-${partido.id}"></span>
                    <input type="text" class="input-pais e" data-target="oct-1-${partido.id}" placeholder="A definir">
                </div>
                <div class="sugerencias-desplegable" id="sugerencias-oct-1-${partido.id}"></div>
            </div>
            <div class="marcador">
                <input type="number" min="0" id="goles-1-oct-${partido.id}" placeholder="0">
                <span class="separador">-</span>
                <input type="number" min="0" id="goles-2-oct-${partido.id}" placeholder="0">
            </div>
            <div class="buscador-equipo">
                <div class="input-contenedor">
                    <span class="bandera-fija" id="bandera-oct-2-${partido.id}"></span>
                    <input type="text" class="input-pais e" data-target="oct-2-${partido.id}" placeholder="A definir">
                </div>
                <div class="sugerencias-desplegable" id="sugerencias-oct-2-${partido.id}"></div>
            </div>
        </div>
    `;
    contenedorOctavos.appendChild(tarjetaPartido);
});


// --- CUARTOS DE FINAL ---
const contenedorCuartos = document.getElementById("cuartos-container");

partidosCuartos.forEach(partido => {
    const tarjetaPartido = document.createElement("div");
    tarjetaPartido.classList.add("partido-eliminatoria-card");
    tarjetaPartido.innerHTML = `
        <div class="partido-info-header"> ${partido.fecha} - ${partido.hora}</div>
        <div class="partido-content">
            <div class="buscador-equipo">
                <div class="input-contenedor">
                    <span class="bandera-fija" id="bandera-cua-1-${partido.id}"></span>
                    <input type="text" class="input-pais e" data-target="cua-1-${partido.id}" placeholder="A definir">
                </div>
                <div class="sugerencias-desplegable" id="sugerencias-cua-1-${partido.id}"></div>
            </div>
            <div class="marcador">
                <input type="number" min="0" id="goles-1-cua-${partido.id}" placeholder="0">
                <span class="separador">-</span>
                <input type="number" min="0" id="goles-2-cua-${partido.id}" placeholder="0">
            </div>
            <div class="buscador-equipo">
                <div class="input-contenedor">
                    <span class="bandera-fija" id="bandera-cua-2-${partido.id}"></span>
                    <input type="text" class="input-pais e" data-target="cua-2-${partido.id}" placeholder="A definir">
                </div>
                <div class="sugerencias-desplegable" id="sugerencias-cua-2-${partido.id}"></div>
            </div>
        </div>
    `;
    contenedorCuartos.appendChild(tarjetaPartido);
});


// --- SEMIFINAL ---
const contenedorSemi = document.getElementById("semi-container");

partidosSemi.forEach(partido => {
    const tarjetaPartido = document.createElement("div");
    tarjetaPartido.classList.add("partido-eliminatoria-card");
    tarjetaPartido.innerHTML = `
        <div class="partido-info-header"> ${partido.fecha} - ${partido.hora}</div>
        <div class="partido-content">
            <div class="buscador-equipo">
                <div class="input-contenedor">
                    <span class="bandera-fija" id="bandera-semi-1-${partido.id}"></span>
                    <input type="text" class="input-pais e" data-target="semi-1-${partido.id}" placeholder="A definir">
                </div>
                <div class="sugerencias-desplegable" id="sugerencias-semi-1-${partido.id}"></div>
            </div>
            <div class="marcador">
                <input type="number" min="0" id="goles-1-semi-${partido.id}" placeholder="0">
                <span class="separador">-</span>
                <input type="number" min="0" id="goles-2-semi-${partido.id}" placeholder="0">
            </div>
            <div class="buscador-equipo">
                <div class="input-contenedor">
                    <span class="bandera-fija" id="bandera-semi-2-${partido.id}"></span>
                    <input type="text" class="input-pais e" data-target="semi-2-${partido.id}" placeholder="A definir">
                </div>
                <div class="sugerencias-desplegable" id="sugerencias-semi-2-${partido.id}"></div>
            </div>
        </div>
    `;
    contenedorSemi.appendChild(tarjetaPartido);
});


// --- TERCER PUESTO ---
const contenedorPuesto = document.getElementById("puesto-container");

partidosPuestos.forEach(partido => {
    const tarjetaPartido = document.createElement("div");
    tarjetaPartido.classList.add("partido-eliminatoria-card");
    tarjetaPartido.innerHTML = `
        <div class="partido-info-header"> ${partido.fecha} - ${partido.hora}</div>
        <div class="partido-content">
            <div class="buscador-equipo">
                <div class="input-contenedor">
                    <span class="bandera-fija" id="bandera-puesto-1-${partido.id}"></span>
                    <input type="text" class="input-pais e" data-target="puesto-1-${partido.id}" placeholder="A definir">
                </div>
                <div class="sugerencias-desplegable" id="sugerencias-puesto-1-${partido.id}"></div>
            </div>
            <div class="marcador">
                <input type="number" min="0" id="goles-1-puesto-${partido.id}" placeholder="0">
                <span class="separador">-</span>
                <input type="number" min="0" id="goles-2-puesto-${partido.id}" placeholder="0">
            </div>
            <div class="buscador-equipo">
                <div class="input-contenedor">
                    <span class="bandera-fija" id="bandera-puesto-2-${partido.id}"></span>
                    <input type="text" class="input-pais e" data-target="puesto-2-${partido.id}" placeholder="A definir">
                </div>
                <div class="sugerencias-desplegable" id="sugerencias-puesto-2-${partido.id}"></div>
            </div>
        </div>
    `;
    contenedorPuesto.appendChild(tarjetaPartido);
});


// --- FINAL ---
const contenedorFinal = document.getElementById("final-container");

partidosFinal.forEach(partido => {
    const tarjetaPartido = document.createElement("div");
    tarjetaPartido.classList.add("partido-eliminatoria-card");
    tarjetaPartido.innerHTML = `
        <div class="partido-info-header"> ${partido.fecha} - ${partido.hora}</div>
        <div class="partido-content">
            <div class="buscador-equipo">
                <div class="input-contenedor">
                    <span class="bandera-fija" id="bandera-final-1-${partido.id}"></span>
                    <input type="text" class="input-pais e" data-target="final-1-${partido.id}" placeholder="A definir">
                </div>
                <div class="sugerencias-desplegable" id="sugerencias-final-1-${partido.id}"></div>
            </div>
            <div class="marcador">
                <input type="number" min="0" id="goles-1-final-${partido.id}" placeholder="0">
                <span class="separador">-</span>
                <input type="number" min="0" id="goles-2-final-${partido.id}" placeholder="0">
            </div>
            <div class="buscador-equipo">
                <div class="input-contenedor">
                    <span class="bandera-fija" id="bandera-final-2-${partido.id}"></span>
                    <input type="text" class="input-pais e" data-target="final-2-${partido.id}" placeholder="A definir">
                </div>
                <div class="sugerencias-desplegable" id="sugerencias-final-2-${partido.id}"></div>
            </div>
        </div>
    `;
    contenedorFinal.appendChild(tarjetaPartido);
});


// BUSCADOR GLOBAL (DELEGACIÓN DE EVENTOS)
document.addEventListener('input', function(e) {
    if (e.target.classList.contains('input-pais')) {
        const input = e.target;
        const targetID = input.getAttribute('data-target');
        const disponible = document.getElementById(`sugerencias-${targetID}`);
        const contenedorBandera = document.getElementById(`bandera-${targetID}`);
        
        const tarjetaPadre = input.closest('.partido-eliminatoria-card');

        const texto = input.value.toLowerCase().trim();

        if (texto === "") {
            if (disponible) {
                disponible.classList.remove('activo');
                disponible.innerHTML = "";
            }
            if (tarjetaPadre) tarjetaPadre.classList.remove('tarjeta-enfocada');
            return;
        }

        const filtrados = paises.filter(p => p.nombre.toLowerCase().includes(texto));

        if (filtrados.length > 0 && disponible) {
            disponible.innerHTML = "";
            disponible.classList.add('activo');
            
            if (tarjetaPadre) tarjetaPadre.classList.add('tarjeta-enfocada');

            filtrados.forEach(pais => {
                const opcion = document.createElement('div');
                opcion.classList.add('sugerencia-opcion');
                opcion.innerHTML = `
                    <img src="https://flagcdn.com/${pais.codigo}.svg" width="20">
                    <span>${pais.nombre}</span>
                `;

                opcion.addEventListener('click', () => {
                    input.value = pais.nombre;
                    if (contenedorBandera) {
                        contenedorBandera.innerHTML = `<img src="https://flagcdn.com/${pais.codigo}.svg" width="22">`;
                    }
                    disponible.classList.remove('activo');
                    disponible.innerHTML = "";
                    
                    if (tarjetaPadre) tarjetaPadre.classList.remove('tarjeta-enfocada');
                    
                    if (typeof guardarFixtureEnStorage === 'function') {
                        guardarFixtureEnStorage();
                    }
                });

                disponible.appendChild(opcion);
            });
        } else if (disponible) {
            disponible.classList.remove('activo');
            if (tarjetaPadre) tarjetaPadre.classList.remove('tarjeta-enfocada');
        }
    }
});

document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('input-pais')) {
        document.querySelectorAll('.sugerencias-desplegable').forEach(d => {
            d.classList.remove('activo');
        });
        
        document.querySelectorAll('.partido-eliminatoria-card').forEach(t => {
            t.classList.remove('tarjeta-enfocada');
        });
    }
});


// FUNCIÓN PARA GUARDAR EL FIXTURE
function guardarFixtureEnStorage() {
    const datosFixture = {
        equipos: {}, 
        goles: {}   
    };

    document.querySelectorAll('.input-pais').forEach(input => {
        const targetID = input.getAttribute('data-target');
        if (input.value.trim() !== "") {
            datosFixture.equipos[targetID] = input.value;
        }
    });

    document.querySelectorAll('input[type="number"]').forEach(input => {
        if (input.value !== "") {
            datosFixture.goles[input.id] = input.value;
        }
    });

    localStorage.setItem('mundial_fixture_data', JSON.stringify(datosFixture));
}

document.addEventListener('change', function(e) {
    if (e.target.classList.contains('input-pais') || e.target.type === 'number') {
        guardarFixtureEnStorage();
    }
});

function cargarFixtureDesdeStorage() {
    const datosGuardados = localStorage.getItem('mundial_fixture_data');
    
    if (!datosGuardados) return;

    const datos = JSON.parse(datosGuardados);

    if (datos.equipos) {
        Object.keys(datos.equipos).forEach(targetID => {
            const input = document.querySelector(`input[data-target="${targetID}"]`);
            
            if (input) {
                const nombrePais = datos.equipos[targetID];
                input.value = nombrePais;

                const contenedorBandera = document.getElementById(`bandera-${targetID}`);
                if (contenedorBandera && typeof paises !== 'undefined') {
                    const paisEncontrado = paises.find(p => p.nombre.toLowerCase() === nombrePais.toLowerCase());
                    if (paisEncontrado) {
                        contenedorBandera.innerHTML = `<img src="https://flagcdn.com/${paisEncontrado.codigo}.svg" width="22">`;
                    }
                }
            }
        });
    }

    if (datos.goles) {
        Object.keys(datos.goles).forEach(idInputGol => {
            const inputGol = document.getElementById(idInputGol);
            if (inputGol) {
                inputGol.value = datos.goles[idInputGol];
            }
        });
    }
}

cargarFixtureDesdeStorage();