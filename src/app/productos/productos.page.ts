import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto, ResultadoProducto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos:Producto[]=[];
  constructor( private productosServic: ProductosService) { }

  ngOnInit() {
    this.productos=this.productosServic.cargar_todos();
  }

}
