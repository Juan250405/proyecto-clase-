import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { Categoria } from 'src/app/core/interfaces/categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  //conectar las diferentes paginas , console.log=sirve para q se muestre en la consola 
 
 
  categoria:Categoria | undefined; 

  constructor( 
    private activateRoute : ActivatedRoute
  ) { 
    activateRoute.params.subscribe(params =>{
      //llama a productos de arriba
      this.categoria = CATEGORIAS.find(categoria => categoria.nombre === params['nombre'])//metodo para encontrar c/u de las categorias


     
     })
  }



  ngOnInit() {
  }
  
}
