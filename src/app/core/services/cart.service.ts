import { Injectable } from '@angular/core';
import { ProductoCarrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //constructor() { }

  carrito: ProductoCarrito[]  = [];
  totalCarrito: number = 0;
 
  constructor(){
    const guardado = localStorage.getItem("carrito");
    if(guardado){
      this.carrito = JSON.parse(guardado);
      this.calcularTotal()
    }

  } 
  
  //array, this. cuando estpoy adentro de una clase 

  agregarAlCarrito(producto:Producto,cantidad:number){
   //reviso si el producto eciste en el carrito 
   const index = this.carrito.findIndex(item => item.producto.nombre === producto.nombre)
   if(index === -1){ 
    const productoActual:ProductoCarrito = {
      cantidad: cantidad,
      producto: producto
    }
    this.carrito.push(productoActual);
    
   }else{
    this.carrito[index].cantidad = this.carrito[index].cantidad + cantidad; 
   }
   
    
    console.log(this.carrito)
    this.guardarLocalStorage()
    this. calcularTotal()
  }
  
  eliminarProducto(nombre: string){
    this.carrito= this.carrito.filter(item => item.producto.nombre !== nombre);
    this.guardarLocalStorage()
    this. calcularTotal()
  }

  vaciarAlCarrito(){

    this.carrito = [];
    this.guardarLocalStorage()
    this. calcularTotal()
  }

  cambiarCantidad(){
    this.guardarLocalStorage()
    this. calcularTotal()
  }

  guardarLocalStorage(){
    localStorage.setItem("carrito",JSON.stringify(this.carrito))//json transforma el objeto en un string ya que no se puede guardar en local storage tipo de datos objetos 
  }
  calcularTotal(){
    let subtotal = 0; 
    this.carrito.forEach(item => {
      subtotal = subtotal + item.cantidad * item.producto.precio
    })
    this.totalCarrito = subtotal;
  }
   

}
