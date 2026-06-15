## IPSS-evaluacion-modulos-2
Clon-e-commerce-Paris-Mundial , desarrollado con HTML5, CSS , JavaScript y JavaScript Syntax Extension. React, node.js y Npm.

## Nombre del grupo
EVALUACION 1 DIPLOMADOS IPSS

## Integrantes
Sergio Casapia Churata

## Descripción
Sitio desarrollado como clon visual ecommerce Paris. El objetivo es replicar el ecommerce usando los conocimientos de las clases y material complementario.

## Demo
Sitio desplegado: https://sergiocasapia.github.io/e-commerceClonParisMundial/

## Capturas de pantallas del resultado final
Header
NavBar
Cardlist
Footer

## Cómo correr localmente
Ejecutar : cdm
ir a ruta : my-clone-paris-mundial
Ejecutar : git clone https://github.com/sergiocasapia/e-commerceClonParisMundial
Ejecutar : npm run dev
Acceder : http://localhost:5173/
Ejecutar acceso a vsc : code .

## Tecnologias usadas
Framework React
Node.js Entorno Js
NPM Gestor de Paquetes de Node
Render
Props
Componentes
operadores ternarios anidados
Archivos json de datos
reutilizacion de Componentes

## Componentes Creados (listas)
(*) : Cabe indicar que ninguno de lo botones, tiene aun fucionalidad asociadas, ya que quedara para completar en fase 2.
/src/components/HeaderComponent/Header.jsx --> Se utiliza 2 veces el componente Button.jsx para registrarse o carro (*)
/src/components/NavBarComponent/NavBar.jsx --> utiliza el mock NavBarCategorias.js para desplegar menu de categorias (*)
/src/components/ProductListComponent/ProductList.jsx --> utiliza el mock articulos.js de productos con el funcion map para recorrer el objeto articulo invocando el componente ProductCard.jsx.
/src/components/ProductCardComponent/ProductCard.jsx --> este componente revise como props el objeto articulo y despligar la informacion con su imagen y opcional despacho gratis, donde cuyo objeto atributo isSuperDespach=true. Adicional se utiliza el componente Button para agregar al carro.(*)
/src/components/FooterComponent/Footer.jsx --> utiliza el componente Button.jsx y mock enlacesfooter.js para desplegar menu de opciones complementarias (*) 
/src/components/ButtonComponent/Button.jsx --> utiliza operacion ternaria anidada para soporte uso de componentes Header.jsx y Footer.jsx
