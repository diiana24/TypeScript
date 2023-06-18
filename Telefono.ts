export class Telefono {
  tipo: string;
  numero: number;

  constructor(tipo: string, numero: number) {
    this.tipo = tipo;
    this.numero = numero;
  }

 
  getTipo(): string {
    return this.tipo;
  }
  setTipo(tipo: string) {
    this.tipo = tipo;
}
  getNumero(): number {
      return this.numero;
  }
  setNumero(numero: number) {
    this.numero = numero;
}
 
}