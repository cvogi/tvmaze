# Carlos Vázquez Ordóñez - MazeTv (¡¡¡incompleta!!!)

Proyecto de angular e ionic de gestión de TvMaze.

## Prerrequisitos

### Versiones mínimas

- `Nodejs` version mínima necesaria `20.11.0`
- `npm` version mínima necesaria `10.13.0`
- `Angular` version mínima necesaria `17.0.10`

- Información adicional en el package.json

### Instalar aplicación desde consola de comandos

Clonar el proyecto a la ubicación deseada:
`git clone https://github.com/cvogi/tvmaze.git`

Acceder al directorio de la aplicación e instalar las dependencias
`npm install`

### Lanzar aplicación

Lanzar la aplicación desde la consola del proyecto
`npm start`

Se podrá visualizar la aplicación desde el navegador (chrome recomendado) en la siguiente url [http://localhost:4200/](http://localhost:4200/) por defecto (o la que se indique por consola en caso de tener ocupado el puerto)

Se podrá visualizar la aplicación en modo responsive desde las herramientas de desarrollo del navegador

Ejemplo con Chrome:
Pulsar `f12` para acceder a las herramientas o botón derecho en la pantalla `inspeccionar` -> aparecerá el panel de herramientas en el que se podrá pulsar en el segundo icono de la parte superior izquierda, para acceder a las opciones responsive.

Cerrar aplicación desde la consola del proyecto
`Ctrl + C`

### Generar y visualizar tests

Generar tests
`npm test`

Visualizar tests dentro de la raiz del proyecto
`tvmaze/coverage/tvmaze/index.html`

## Detalles de aquitectura

- Se ha optado por usar una estructura de componentes standalone dada su alta reusabilidad.

- Se ha ampliado el script `npm test` para que genere la cobertura de código y sus correspondientes ficheros locales para su cómoda interpretación.

- Para el manejo de textos y futura posible implementación de multiidioma se usará desde el principio la librería standar @ngx-translate/core (dado que el sistema multiidioma nativo de angular está bastante obsoleto).

- TODO: Aplicación y documentación incompletas

## Autor

Carlos Vázquez Ordóñez
`carlos.vazquez2@soprasteria.com`
