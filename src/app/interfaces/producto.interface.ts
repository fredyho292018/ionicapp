export class Producto {
    codigo: string;
    producto: string;
    linea: string;
    linea_id: number;
    proveedor: string;
    descripcion: string;
    precio_compra: Float32Array;
}
export class ResultadoProducto {
    error: boolean;
    productos: Producto[];
}
