## Datos del proyecto

Postulante: Ignacio Cava  
Deploy: 

Jira: https://kimchechallenge.atlassian.net/jira/software/projects/KC/boards/1  
Figma: https://www.figma.com/file/IVJfStLkgL8f64lvIm5oYw/Kimche-Challenge

## Pregunta abierta

*La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari).*  

*¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc.*

**Propuesta:**  

Si la consigna verdaderamente refiere a una tabla en la cual se guarda la información de un unico niño, estaríamos frente a un problema de eficiencia de uso de espacio, ya que imposible que se hayan creado 90 millones de filas.

De todas formas, debemos tener en cuenta que (según encontré en internet) Chile cuenta con cerca de 6 millones de estudiantes entre primaria, secundaria y universidad, además de 250 mil docentes. Con esto, encontramos que requeriríamos almacenar aprox. medio billón de filas, y procesar una cantidad desconocida de peticiones a nuestros servidores que tranquilamente nos puede suponer una inversión enorme en cuanto a poder de procesamiento.

Esto nos da a entender que el actual modelo de negocio de la empresa es no solo inescalable sino que rápidamente se volverá inmanejable, lo que causará bajas de servicio constantes y un posible éxodo de usuarios los cuales considerarán que el servicio no es provechoso.

Aun así, que nos podamos permitir medir el tiempo de servicio en latencia p95 significa que no se detectaron bajas constantes que vuelvan inútil a esta medición, lo que nos da tiempo para actuar. En principio, propondía cinco cambios:

* Repartir los datos de los alumnos entre diferentes bases de datos. En caso que dichas BD estén ubicadas en edificios propios de la empresa, las mismas deberían ser repartidas equitativamente entre los puntos de mayor densidad habitacional a modo de reducir la latencia entre el docente y el servidor, que puede llegar a los ~70ms en caso que un docente se comunique con el servidor desde la otra punta del país.
* Sumado a lo anterior, implementar un load balancer entre las nuevas BD para acelerar el tránsito de peticiones.
* Implementar Optimistic UI, a modo que cuando un docente quiera actualizar las asistencias de un alumnos, este cambio se vea reflejado inmediatamente en el state local de la aplicación (ya sea que se esté usando Redux, React Context, etc), por más que la BD no haya terminado de procesar el pedido. Desde un punto de vista UX, esto reduciría al mínimo el tiempo de respuesta de todos los pedidos de actualización con información que se esté mostrando en la página.
* Implementar un sistema de renderizado progresivo, donde la página cargue el contenido únicamente cuando el docente scrollee hacia él (o haga click en él, en caso que toda la información se presente ya dentro de la pantalla), lo cual reduciría enormentente la cantidad de peticiones realizadas.
* Dividir las rutas del backend para que cada una haga tareas específicas, en lugar de tener un solo PATCH que se encargue de actualizar toda la tabla del alumno. Combinando con el punto anterior, se pueden crear rutas que devuelvan únicamente la información que la página en cuestión necesite presentar de forma inmediata.

Pero, volviendo al punto principal, la respuesta es simple: el docente solo está intentando marcar la asistencia del alumno. Si el tiempo de respuesta es de 10 segundos, es porque nuestra ruta está haciendo cosas que no necesita hacer. Solo debemos implementar una rápida verificación del lado del back para asegurarnos que la petición es válida, y si lo es, immediantemente devolver un status 200 sin esperar a que la lógica de actualización termine, ya que si la verificación es lo suficientemente robusta y está testeada, es imposible que nos devuelva un error. Esto reduciría el tiempo de respueta a unos pocos milisegundos, más la latencia entre el usuario y el servidor, la cuál ya redujimos anteriormente.
