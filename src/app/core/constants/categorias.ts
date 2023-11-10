import { Categoria } from "../interfaces/categorias";

export const CATEGORIAS : Categoria[] = [
    {nombre:'Hamburguesas',
    id:1,
    fotoUrl:"https://clarin.com/img//2021/06/17/LC25eDtCT_1200x630__1.jpg",
    productos: [{
        nombre:'CESAR',
        precio: 3000,
        descripcion: '2 Medallones, cheddar americano, un havarti, incluso un queso raclette ',
        imagen:'https://www.reasonwhy.es/media/library/the_king_bacon.jpg',


      },
      {
        nombre:'KING',
        precio: 3400,
        descripcion: 'Burger, cheedar, lechuga, cebolla picada y salsa de la casa',
        imagen:'https://img.freepik.com/fotos-premium/hamburguesa-lechuga-tomate-queso-cheddar-cebolla-roja-aislado-sobre-fondo-blanco_465253-2.jpg',


      } ]
  
    },
    {
      nombre:'Pizzas',
      id:2,
      fotoUrl:"https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-m.jpg",
      productos: [{
        nombre:'LEONARDO',
        precio: 5000,
        descripcion: 'Queso provolone, queso sardo, queso mozzarella, queso azul y salsa casera estilo italiano',
        imagen:'https://previews.123rf.com/images/foodandmore/foodandmore1508/foodandmore150800046/44417047-vista-de-arriba-aislado-en-blanco-de-un-todo-delicioso-cuatro-quesos-pizza-italiana-reci%C3%A9n-horneado.jpg',

      },{
        nombre:'RAFAELLO',
        precio: 5350,
        descripcion: 'Pepperoni, queso mozzarella y salsa estilo italiano',
        imagen:'https://st.depositphotos.com/1049680/53889/i/450/depositphotos_538899484-stock-photo-single-pepperoni-italian-pizza-isolated.jpg',
      
    }]
    },
    {
      nombre:'Postres',
      id:3,
      fotoUrl:"https://gullon.es/wp-content/uploads/GULLON_2020.01_ARTICLE_postres-italianos-web.jpg",
      productos: [{
        nombre:'FRANUI',
        precio: 2000,
        descripcion: 'Frambuesas bañadas en una cobertura de chocolate blanco y chocolate con leche ',
        imagen:'https://masonlineprod.vtexassets.com/arquivos/ids/185691/Frambuesas-Ba%C3%B1adas-En-Chocolate-Franui-150g-3-469005.jpg?v=637841634828570000',

      },{
        nombre:'BROWNIE NUTELLA ',
        precio: 2500,
        descripcion: 'Brownie con nutella, ddl, crema chantilly y virutas de chocolate',
        imagen:'https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/DRNCQ624CBGQHBOOXXKVQT5JY4.jpg',
      
    }]
    },
    {
      nombre:'Bebidas',
      id:4,
      fotoUrl:"https://www.cocacolaep.com/assets/Spain/Blog-Rojo-y-en-Botella/2021/TENDENCIAS-SIN-AZUCAR/RyB_TENDENCIAS-SIN-AZUCAR_G_900x550__FocusFillWzEyMTAsMTA4MCwieCIsMjc4XQ.jpg",
      productos:[{
        nombre:'COCA COLA',
        precio: 1200,
        descripcion: 'Coca cola refrescante',
        imagen:'https://png.pngtree.com/thumb_back/fh260/background/20220915/pngtree-coca-cola-drink-from-russia-on-white-background-photo-image_39191746.jpg',

      },{
        nombre:'CERVEZA',
        precio: 1500,
        descripcion: 'birra fresca',
        imagen:'https://thumbs.dreamstime.com/b/londres-reino-unido-de-marzo-botellas-corona-extra-beer-con-la-rebanada-cal-en-blanco-es-cerveza-importada-m%C3%A1s-popular-del-th-111829714.jpg',
      
    } ]

    }
  ]