import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { Producto } from 'src/app/core/interfaces/producto';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.page.html',
  styleUrls: ['./detalles-producto.page.scss'],
})
export class DetallesProductoPage  {
cartService: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public carritoService:CartService
    ) { 
    activatedRoute.params.subscribe(params =>{
      console.log(params)
      this.buscarProducto(params['nombre']);
     
    })
  }
 
  cantidad = 1;

  buscarProducto(nombreProductoABuscar:string){
     for (let i = 0; i < CATEGORIAS.length; i++) {
      const categoriaActual = CATEGORIAS[i];
      for (let j = 0; j < categoriaActual.productos.length; j++) {
        const productoActual = categoriaActual.productos [j];
        if(productoActual.nombre === nombreProductoABuscar ){
          this.producto=productoActual; //asignamos el valor a la variable 
        }
        
      }
    }
  }
  
  producto:Producto ={
    imagen: 'jajajajaj',
    nombre: 'jajajajaj',
    descripcion: 'Descripcion',
    precio: 500
  }
}
