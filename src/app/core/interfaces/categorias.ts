import { Producto} from "./producto"
export interface Categoria{ //tipo de dato objeto 
    id:number
    nombre:string
    fotoUrl:string
    productos: Producto[ ] //array=lista de cosas 
}