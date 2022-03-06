# typescript_mongo
Crud con express, mongoose basado en typescript.
Preparado para desplegar en Heroku.

PASOS A SEGUIR

1. npm i 
2. npm run build
3. npm start

También la podemos hacer correr como desarrollador.

npm run dev

Debemos crear un fichero de variables de entorno (.env) que contenga el puerto y la base de datos.
PORT = 

MONGO_URI=

Los campos de la base de datos son los siguientes:
titulo, descripcion, hecho, este último es de tipo boolean.

Las rutas son las siguientes:

GET '/api'

'/api:id'
    
POST '/api'

PUT '/api:id'

DELETE '/api:id'


Documentacion
https://www.scribd.com/document/558038952/Crud-Mongodb-Typescript
