export interface UserProfile {
    first_name: string;
    last_name: string;
    phone: string;
    direction: string;
    email: string;
    username: string;
}

export interface Pet {
    photo: any;
    imagen: string | undefined;
    direccion: ReactNode;
    id: number;
    nombre: string;
    descripcion: string;
    raza: string;
    edad: string;
    ubicacion: string;
    contacto: string;
  }
  