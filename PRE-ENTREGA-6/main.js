class Persona {
    constructor(id, nombre, añoNacimiento, relacion) {
        this.id = id;
        this.nombre = nombre;
        this.añoNacimiento = añoNacimiento;
        this.relacion = relacion;
    }

    calcularEdad(añoActual) {
        return añoActual - this.añoNacimiento;
    }
}

const añoActual = Number(prompt("¿En qué año estamos?"));

const personaUno = new Persona(1, "Alex", 1998, "amigo/a");
const personaDos = new Persona(2, "Sam", 2005, "familiar");
const personaTres = new Persona(3, "Taylor", 2000, "compañero/a");
const personaCuatro = new Persona(4, "Cami", 2002, "usuario");

const personas = [personaUno, personaDos, personaTres, personaCuatro];

if (isNaN(añoActual) || añoActual <= 0) {
    alert("Ingresaste un año inválido.");
} else {
    const idBuscado = Number(prompt("Ingresa el número de ID de la persona que quieres buscar:"));

    const personaEncontrada = personas.find((persona) => persona.id === idBuscado);

    if (personaEncontrada) {
        const edad = personaEncontrada.calcularEdad(añoActual);
        console.log(`Persona encontrada: ${personaEncontrada.nombre}, aproximadamente ${edad} años.`);
    } else {
        console.log("No se encontró una persona con ese ID.");
    }

    const personasMayores = personas.filter((persona) => {
        return persona.calcularEdad(añoActual) >= 18;
    });

    console.log("Personas que tienen 18 años o más:");

    if (personasMayores.length > 0) {
        for (const persona of personasMayores) {
            console.log(`${persona.nombre}: aproximadamente ${persona.calcularEdad(añoActual)} años.`);
        }
    } else {
        console.log("No hay personas de 18 años o más.");
    }

    const edadesCalculadas = personas.map((persona) => {
        return {
            nombre: persona.nombre,
            edad: persona.calcularEdad(añoActual),
            relacion: persona.relacion
        };
    });

    console.log("Lista de personas con sus edades:");
    console.log(edadesCalculadas);

    const nombreBuscado = prompt("Ingresa un nombre para buscar en la lista:");

    const personasConEseNombre = personas.filter((persona) => {
        return persona.nombre.toLowerCase() === nombreBuscado.toLowerCase();
    });

    if (personasConEseNombre.length > 0) {
        console.log(`Se encontraron ${personasConEseNombre.length} resultado(s) para ${nombreBuscado}:`);

        for (const persona of personasConEseNombre) {
            console.log(`${persona.nombre}, relación: ${persona.relacion}.`);
        }
    } else {
        console.log(`No se encontró a ${nombreBuscado} en la lista.`);
    }

    alert("El simulador terminó. Revisa la consola para ver los resultados.");
}