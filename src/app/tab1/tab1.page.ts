import { Component } from '@angular/core';
import { Categoria } from '../core/interfaces/categorias';
import { CATEGORIAS } from '../core/constants/categorias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {//entre comillas se convierte en string

  categorias:Categoria[] = CATEGORIAS
} 
