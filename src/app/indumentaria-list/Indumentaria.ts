export interface Indumentaria{
    image: string;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    sale: boolean;
    cantidad:number;
    maxAlcanzado?: boolean;
    descuento?:number; //% de descuento si el producto sale=true
}

