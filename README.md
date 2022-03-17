# react-portals
¿Del porqué usar Portals en React JS?

La tarea principal de React, es escribir en el DOM los cambios que retornan sus componentes, por su naturaleza hay elementos que al momento de hacer el building de la app, no en la aplicación sino que son condicionados, ejemplo modal, tooltip, algún div resultante de un evento mouseover.

Controlar efectivamente la aparición de dichos elementos cn respecto al solapamiento de
las capas ya existentes no es cosa sencilla ni puede tomarse al vuelo. Para ello React a partir de su versión 16 introduce los Portals. Mecanismo por medio del cual, es enviado un elemento a una capa que no será solapada con ninguna otra.

Este pequeña introducción quiere demostrar el efecto que puede encontrarse al trabajar
con modales usando Portals y no usándolos.

[Documentación Oficial](https://reactjs.org/docs/portals.html)

[Documentación de apoyo](https://blog.bitsrc.io/understanding-react-portals-ab79827732c7)

