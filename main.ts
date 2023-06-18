import { Persona } from "./Persona";
import { Telefono } from "./Telefono";
import { Direccion } from "./direccion";
import { Mail } from "./mail";

const direccion1 = new Direccion(
  'Calle Esperanza',
  1,
  1,
  'A',
  50007,
  'Zaragoza',
  'Zaragoza'
  );

const direccion2 = new Direccion(
  'Calle Federico',
  2,
  9,
  'B',
  50008,
  'Zaragoza',
  'Zaragoza'
);

const direccion3 = new Direccion(
  'Calle Jose',
  3,
  10,
  'C',
  50009,
  'Zaragoza',
  'Zaragoza'
);

// Mails
const mail1 = new Mail(
  'a',
  'pepito@gmail.com'
);
const mail2 = new Mail(
  'b',
  'fulanito@outlook.es'
);

const mail3 = new Mail(
  'c',
  'esperanza@gamil.com'
);

// Teléfonos
const telefono1 = new Telefono(
  'a',
  659191556
);
const telefono2 = new Telefono(
  'b',
  632598665
);
const telefono3 = new Telefono(
  'c',
  717160352
);

// Personas
const persona1 = new Persona(
  "Diana",
  "Pérez",
  25,
  "87654321X",
  new Date(1998, 2, 24),
  "azul",
  "mujer",
  [direccion1],
  [mail1],
  [telefono1],
  ["nota1", "nota2"]
);

const persona2 = new Persona(
  "Ana",
  "Alarcon",
  40,
  "23856589W",
  new Date(1985, 6, 15),
  "marillo",
  "mujer",
  [direccion2],
  [mail2],
  [telefono2],
  ["nota1"]
);

const persona3 = new Persona(
  "Alberto",
  "Torrez",
  18,
  "33567890Z",
  new Date(2000, 10, 23),
  "rojo",
  "hombre",
  [direccion3],
  [mail3],
  [telefono3],
  ["nota1", "nota2", "nota3"]
);


// Mostrar personas
function mostrarPersona(persona: Persona) {
  console.log("Nombre:", persona.getNombre());
  console.log("Apellidos:", persona.getApellidos());
  console.log("Edad:", persona.getEdad());
  console.log("DNI:", persona.getDni());
  console.log("Cumpleaños:", persona.getCumpleanos());
  console.log("Color favorito:", persona.getColorFavorito());
  console.log("Sexo:", persona.getSexo());
}

console.log("Persona 1:");
mostrarPersona(persona1);
console.log("Persona 2:");
mostrarPersona(persona2);
console.log("Persona 3:");
mostrarPersona(persona3);



// Ejercicio 2
// Función para buscar una persona por DNI
function buscarPersonaPorDNI(personas: Persona[], dni: string): Persona | null {
  for (const persona of personas) {
    if (persona.getDni() === dni) {
      return persona;
    }
  }
  return null;
}

// Función para añadir una dirección, mail y teléfono a una persona
function modificarPersona(
  persona: Persona, 
  nuevaDireccion: Direccion, 
  nuevoMail: Mail, 
  nuevoTelefono: Telefono
  ) {
  const direcciones = persona.getDirecciones();
  direcciones.push(nuevaDireccion);
  persona.setDirecciones(direcciones);

  const mails = persona.getMails();
  mails.push(nuevoMail);
  persona.setMails(mails);

  const telefonos = persona.getTelefonos();
  telefonos.push(nuevoTelefono);
  persona.setTelefonos(telefonos);
}
// Buscar persona por DNI
const dni = "87654321X";
const personaEncontrada = buscarPersonaPorDNI([persona1, persona2, persona3], dni);

if (personaEncontrada) {
  const nuevaDireccion = new Direccion(
    'Calle buñuel',
    33,
    4,
    'K',
    50010,
    'Teruel',
    'Zaragoza'
  );
  const nuevoMail = new Mail('d', 'bueñuel@gmail.com');
  const nuevoTelefono = new Telefono('a', 659191886);

  // modificar
  modificarPersona(personaEncontrada, nuevaDireccion, nuevoMail, nuevoTelefono);

  console.log("Persona modificada:");
  mostrarPersona(personaEncontrada);
} else {
  console.log("No se encontró una persona con el DNI proporcionado.");
}