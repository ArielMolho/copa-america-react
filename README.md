# Proyecto Copa America: CORRUPBOL

El nombre del proyecto es Corrubol y está apuntando al tipo de público que busca información deportiva en portales similares a Promiedos.

## Tech
Para el proyecto se ha usado [React](https://es.reactjs.org/), [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) para el front, [Express](http://expressjs.com/) para la API y [pgAdmin](https://www.pgadmin.org/download/) para la base de datos.

### Incialización
- Dentro de la carpeta Api debemos hacer `npm start` para inicializar Express en [http://localhost:3000](http://localhost:3000).
- Dentro de la carpeta Raiz debemos hacer `npm start` para inicializar el proyecto en react y esto abrirá el primer puerto disponible. Posiblemente [http://localhost:3001](http://localhost:3001).
- La base de datos está construida dentro de pgAdmin por lo que dicho programa debe estar operando y está seteado en [http://localhost:5432](http://localhost:5432).

## Recursos

Se ha obtenido información y recursos de:
- [Flaticon](https://www.flaticon.com/)
- [Sitio Oficial Copa América](https://copaamerica.com/)

## Funcionalidad
- La sección de zonas contiene un mix de usar card group, cards y accordion para usabilidad. Al clickear cada escudo asociación se mostrarán sus partidos de zona.
- La sección calendario es un modal del calendario completo de la Copa América, con un botón que linkea para descargarlo.
- La sección comentarios sirve para que los usuarios den feedback.