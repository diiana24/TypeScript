export class Direccion {
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigoPostal: number;
    poblacion: string;
    provincia: string;
  
    constructor(
      calle: string, 
      numero: number,
      piso: number,
      letra: string,
      codigoPostal: number,
      poblacion: string,
      provincia: string
    ) {
      this.calle = calle;
      this.numero = numero;
      this.piso = piso;
      this.letra = letra;
      this.codigoPostal = codigoPostal;
      this.poblacion = poblacion;
      this.provincia = provincia;
    }
  
    //calle
    getCalle(): string {
      return this.calle;
    }
    setCalle(calle: string) {
        this.calle = calle;
    }
    //numero
    getNumero(): number {
        return this.numero;
    }
    setNumero(numero: number) {
        this.numero = numero;
    }
    //piso
    getPiso(): number {
        return this.piso;
    }
    setPiso(piso: number) {
        this.piso = piso;
    }
    //letra
    getLetra(): string {
        return this.letra;
    }
    setLetra(letra: string) {
        this.letra = letra;
    }
    //codigo postal
    getCodigoPostal(): number {
        return this.codigoPostal;
    }
    setCodigoPostal(codigoPostal: number) {
        this.codigoPostal = codigoPostal;
    }
  //poblacion
    getPoblacion(): string {
        return this.poblacion;
    }
    setPoblacion(poblacion: string) {
        this.poblacion = poblacion;
    }
    getProvincia(): string {
        return this.provincia;
    }
    setProvincia(provincia: string) {
        this.provincia = provincia;
    }
  }