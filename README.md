# Presupuesto de una Casa

**Autor:**

- Kevin Johan Jimenez Delgado

## Pasos para la correcta instalación de node usando Linux

- En primer lugar se debe saber si se tiene instalado node, colocando la siguiente instrucción en el terminal de la computadora o visual studio code `node --version`, en caso de que salga error o salga una versión menos que la 18, se coloca la siguiente instrucción para instalar node en una versión correcta de funcionamiento `nvm install 18.18.0`, luego en visual studio code, en el fichero donde se vaya a trabajar, se va a la terminal y se coloca `npm i`

## Primera configuración en Node para tu proyecto

- Colocar la siguiente instrucción para introducir node en la ruta donde vas a trabajar, `npm init -y`  
- Luego en la consola saldrá lo siguiente, muy parecido pero no saldrá igual, igual este se vera en un archivo llamado "package.json" en tu fichero
```
{
  "name": "presupuestocasaennode",
  "version": "1.0.0",
  "description": "**Autor:**",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
Edita los campos en la parte de autor por tu nombre y asegurate que tengas el AUTOGUARDADO, adicional agrega una linea la del type, entonces se debería ver el archivo "package.json" de la siguiente forma. 
```
{
  "name": "presupuestocasaennode",
  "version": "1.0.0",
  "description": "**Autor:**",
  "main": "main.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Kevin JJ",
  "license": "ISC"
}
```

- Coloca la siguiente instrucción para ya añadir node a tu fichero local `npm -E -D install json-server`, ahí empieza una instalación y esta isntrucción es para hacer una versión estable (NOTA: NO tocar las carpetas de node.modules ni "package-lock.son" que se crean): 

- Crear un archivo en el fichero llamado "db.json", con la siguiente linea de código:
```
 {
    "libros":[],
    "casa":[],
    "papeles":[]
}
```
como notaras en el archivo "package.json", este ha cambiado, le vamos a editar la parte de scripts y dejarlo parecido a este:
```
{
  "name": "presupuestocasaennode",
  "version": "1.0.0",
  "description": "**Autor:**",
  "main": "main.js",
  "type": "module",
  "scripts": {
    "dev": "json-server --watch db.json"
  },
  "keywords": [],
  "author": "Kevin JJ",
  "license": "ISC",
  "devDependencies": {
    "json-server": "0.17.3"
  }
}
```
Por ultimo colocar la siguiente línea de comando `npm run dev`, y debería verse lo de que aparece en db.json, en la parte de resources aparece un link que al final aparece libros, casa, papeles y lo que se edite en vivo con el "db.json" se podrá evidenciar en esos links. Para salir del en vivo con CTRL+C en la terminal

- Con npm corriendo, podemos usar node en otra terminal y colocar el comando `node main.js` para ver los resultados en consola desde Visual Studio Code y desde ahí poder trabajar

## Descripción del Proyecto

Este proyecto permite administrar un presupuesto de una casa a través de la capacidad de consumir una API mediante MockApi. Las principales funcionalidades incluyen la búsqueda, creación, edición, eliminación y actualización de registros por medio de una ID. Además, se muestra el total de los ingresos y egresos.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- MockApi
- Métodos como PUSH, DELETE, POST
- Eventos de escucha como addEventListener

## Instrucciones de Uso

1. Abre el archivo `index.html` en tu navegador para visualizar el proyecto.

2. Para realizar acciones en el presupuesto de la casa, utiliza las siguientes funcionalidades:

   - **Buscar ID:** Ingresa una ID en el formulario de búsqueda y haz clic en "Buscar ID" para encontrar registros existentes.

   - **Crear Registro:** Completa el formulario con un monto, selecciona el tipo (Ingreso o Egreso) y haz clic en "Calcular" para agregar un nuevo registro.

   - **Editar Registro:** En el formulario de edición, ingresa la ID que deseas editar y el nuevo valor (monto). Luego, haz clic en "Editar" para actualizar la ID con el nuevo valor.

   - **Eliminar Registro:** En el formulario de eliminación, ingresa la ID que deseas eliminar y haz clic en "Eliminar" para eliminar el registro correspondiente.

   - **Actualizar Valores:** Utiliza el botón "Actualizar Valores" para reflejar los cambios en la página después de realizar acciones de creación, edición o eliminación de registros.

## NOTA

- **Actualizar Valores:** Utiliza el botón "Actualizar Valores" para reflejar los cambios en la página después de realizar acciones de creación, edición o eliminación de registros.

- **Ver proyecto:** Abrir con ver en vivo u open with live server