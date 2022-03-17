# react-portals

## ¿Del porqué usar Portals en React JS?

La tarea principal de React, es **escribir en el DOM los cambios que retornan sus componentes**, por su naturaleza hay elementos que al momento de hacer el building de la app, no se encuentran el DOM, ejemplo modal, tooltip, algún div resultante de un evento mouseover.

**Controlar efectivamente la aparición de dichos elementos con respecto al solapamiento de
las capas ya existentes y el maquetado existente no es cosa sencilla ni puede tomarse a la ligera**. Para ello React a partir de su versión 16 introduce los **Portals**. Mecanismo por **medio del cual, es enviado un elemento a una capa que no será solapada con ninguna otra**, puede ser un div fijo en el index.html, o crear dinámicamente dicho div, como se planteará en esta prueba.

Este pequeña introducción quiere demostrar el efecto que puede encontrarse al trabajar
con modales usando Portals y no usándolos.

[Documentación Oficial](https://reactjs.org/docs/portals.html)

[Documentación de apoyo](https://blog.bitsrc.io/understanding-react-portals-ab79827732c7)

[Página de la prueba](https://pedroot.github.io/react-portals/)

## ¿Cómo publicar en github pages?

1. install en dev gh-pages
2. Agregar la siguiente línea a package.json inercambiando los valores que correspondan: "homepage":"https://_your-username_.github.io/_repository-name_"
3. Agregar lo siguiente a la sección de scripts:
   1. "predeploy": "npm run build",
   2. "deploy": "gh-pages -d build",

A la hora de querer publicar una actualización de la app, hacer el predeploy y luego deploy.

**Para conocer la dirección de la pagina creada**, visitar: https://github.com/*usuario*/*nombre-repositorio*/settings/pages
