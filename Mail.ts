export class Mail {
    tipo: string;
    direccion: string;
    constructor(tipo: string, direccion: string) {
      this.tipo = tipo;
      this.direccion = direccion;
    }
  
    //tipo
    getTipo(): string {
      return this.tipo;
    }
    setTipo(tipo: string) {
        this.tipo = tipo;
    }

    //direccion
    getDireccion(): string {
        return this.direccion;
    }
    setDireccion(direccion: string) {
        this.direccion = direccion;
    }
  }