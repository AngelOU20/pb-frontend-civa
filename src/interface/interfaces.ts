export interface Futbolista {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: Date;
  caracteristicas: string;
  posicion: Posicion;
}

export interface Posicion {
  id: number;
  nombre: "Delantero" | "Mediocampista" | "Defensa" | "Arquero";
}