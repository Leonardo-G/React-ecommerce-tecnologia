export interface ProductDoc {
  descripcion: string;
  especificaciones: Record<string, string>;
  almacenamiento: string;
  bateria: string;
  camaraFrontal: string;
  camaraTrasera: string;
  conectividad: string;
  dimensionesPeso: string;
  otros: string;
  pantalla: string;
  procesador: string;
  ram: string;
  sistemaOperativo: string;
  imgs: string[];
  marca: string;
  modelo: string;
  precio: string;
  stock: number;
  stripe_price_id: string;
  tipo: string;
}

export interface Product extends ProductDoc {
  id: string;
}