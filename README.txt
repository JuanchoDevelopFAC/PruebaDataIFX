APP WEB:
    La app web está diseñada con Angular versión: 9.0.7
    Para correr la aplicación web abrir el proyecto en consola y ejecutar lo siguiente:
    
    1. En consola dirijirse a la ruta Prueba/HogwartsSchoolApp/src y ejecutar npm install
    2. Cuando termine la instalación de dependencias ejecutar desde consola ng serve -o 
    3. Probar la app

SERVIDOR:
    El servidor está diseñado con EntityFramework Core 3.1 y Visual Studio 19 
    Para correr el servidor hacer lo siguiente:
    
    1. Abrir el proyecto HogwartsServer en Visual Studio y correr ISS Express
    2. Para ejecutar el proyecto se recomienda recompilar la solución y darle a ISS Express (botón Play verde)
    3. Abrir POSTMAN y probar los siguientes EndPoints:
        * Ver todos los estudiantes: https://localhost:44325/api/Students (GET)
        * Crear estudiante: https://localhost:44325/api/Students (POST) y desde body crear el siguiente JSON:
            - {
                "Id": 1,
                "Nombre": "Nombre",
                "Apellido": "Apellidos",
                "Edad": 25,
                "Casa": "Slythering"
              }
        * Actualizar estudiante: https://localhost:44325/api/Students/{id} (PUT) y desde body crear el siguiente JSON:
            - {
                "Id": 1,
                "Nombre": "Juan",
                "Apellido": "Alvarez Carvajal",
                "Edad": 25,
                "Casa": "Gryffindor"
              }

        * Eliminar estudiante: https://localhost:44325/api/Students/{id} (DELETE).