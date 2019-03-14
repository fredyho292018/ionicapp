import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto, ResultadoProducto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  
  constructor( private productosServic: ProductosService) { }

  ngOnInit() {
  }

}
