
import { Telefono } from "./Telefono";
import { Direccion } from "./direccion";
import { Mail } from "./mail";


export class Persona{
  nombre:string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanos: Date;
  colorFavorito: string;
  sexo: string;
  direcciones: Direccion[];
  mails: Mail[];
  telefonos: Telefono[];
  notas: string[];

  constructor(
    nombre: string, 
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanos: Date,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string[]
    ) 
  {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni; 
    this.cumpleanos = cumpleanos; 
    this.colorFavorito = colorFavorito; 
    this.sexo = sexo; 
    this.direcciones = direcciones; 
    this.mails = mails; 
    this.telefonos = telefonos; 
    this.notas = notas;
  }

  getNombre(): string {
    return this.nombre;
  }
  setNombre(nombre: string) {
    this.nombre = nombre;
}
  getApellidos(): string {
      return this.apellidos;
  }
  
  setApellidos(apellidos: string) {
    this.apellidos = apellidos;
}

  getEdad(): number {
      return this.edad;
  }
  setEdad(edad: number) {
    this.edad = edad;
}
  getDni(): string {
      return this.dni;
  }
  setDni(dni: string) {
    this.dni = dni;
}

  getCumpleanos(): Date {
      return this.cumpleanos;
  }
  setCumpleanos(cumpleanos: Date) {
    this.cumpleanos = cumpleanos;
}
  getColorFavorito(): string {
      return this.colorFavorito;
  }
  setColorFavorito(colorFavorito: string) {
    this.colorFavorito = colorFavorito;
}
  getSexo(): string {
      return this.sexo;
  }
  setSexo(sexo: string) {
    this.sexo = sexo;
}
  getDirecciones(): Direccion[] {
      return this.direcciones;
  }
  setDirecciones(direcciones: Direccion[]) {
    this.direcciones = direcciones;
}
  getMails(): Mail[] {
      return this.mails;
  }
  setMails(mails: Mail[]) {
    this.mails = mails;
}
  getTelefonos(): Telefono[] {
      return this.telefonos;
  }
  setTelefonos(telefonos: Telefono[]) {
    this.telefonos = telefonos;
}
  getNotas(): string[] {
      return this.notas;
  }
  setNotas(notas: string[]) {
    this.notas = notas;
    }
}