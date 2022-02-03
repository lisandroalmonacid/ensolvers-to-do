Dependencias necesarias para correr la página web:

-Node js: 16.13.2
-NPM: 8.1.2
-Vue js: 4.5.15
-Nest js: 8.2.0

El archivo run-app.sh debería encargarse de instalar todas las dependencias.

Para montar la página web, ir al directorio principal del proyecto y correr los siguientes comandos:

chmod u+x ./run-app.sh
./run-app.sh

Se abrirá una ventana en el navegador con la página frontend. Quizás haya que esperar unos segundos y recargar porque hay que esperar a que compile la página.
En caso de obtener un error al correr el .sh, seguir los siguientes pasos:

Abrir una terminal en el directorio principal del proyecto, y correr estas líneas para instalar las dependencias (saltear si fueron instaladas con éxito):

sudo apt install nodejs
sudo apt install npm
npm install -g @vue/cli
npm install -g @nestjs/cli


En una nueva terminal:

cd todo-backend
npm install
npm run start

En otra terminal:
cd frontend/ensolvers-to-do-frontend
npm run serve

Luego, ingresar en el navegador a la url: http://localhost:8080
