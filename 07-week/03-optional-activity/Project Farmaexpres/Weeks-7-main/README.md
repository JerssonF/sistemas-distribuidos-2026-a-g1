# Weeks-7

## Tabla de contenido

- [Separación de Microservicios](#separación-de-microservicios)
  - [Descripción](#descripción)
- [Historias de Usuario (HU)](#historias-de-usuario-hu)
- [Objetivo](#objetivo)
- [¿Qué se hizo?](#qué-se-hizo)
- [¿Qué no se logró?](#qué-no-se-logró)
- [¿Qué se va a hacer?](#qué-se-va-a-hacer)

  
## Separación de Microservicios

### Descripción

Se trabajará en la separación del sistema a través de repositorios por cada **microservicio**, con el fin de mejorar la escalabilidad, mantenibilidad y organización del proyecto FarmaExpres.

Además, se definió una nueva **Historia de Usuario (HU)** enfocada en la estandarización del sistema, donde cada microservicio deberá ser renombrado y documentado en **inglés**, ya que anteriormente estaban definidos en español.

De forma paralela, se avanzó en la **definición y estructuración del frontend del sistema**, alineando las funcionalidades con los microservicios definidos en el backend. Esto permitió establecer una base clara para la comunicación entre servicios y la construcción de la interfaz de usuario.

---

## Historias de Usuario (HU)

### Backend
- **HU-MCI - Migración del Backend de Español a Inglés**  
- **HU-doc - Documentación técnica de microservicios backend**
- HU-BE-11 Historia de Usuario
- HU-BE-12 Agregar campo stock mínimo al producto


🔗 [Ver todos los Issues](../../issues)

### Frontend
Se definieron las historias de usuario correspondientes al frontend del sistema FarmaExpres:

- HU-FE-01 – Gestión de Usuarios (Creación)  
- HU-FE-02 – Autenticación (Inicio de Sesión)  
- HU-FE-03 – Gestión de Usuarios (Cambio de Contraseña)  
- HU-FE-04 – Gestión de Medicamentos (Registro)  
- HU-FE-05 – Gestión de Medicamentos (Actualización)  
- HU-FE-06 – Gestión de Medicamentos (Eliminación Lógica)  
- HU-FE-07 – Movimientos (Historial)  
- HU-FE-08 – Inventario (Control Inteligente de Stock)  
- HU-FE-09 – Inventario (Productos Agotados)  
- HU-FE-10 – Auditoría (Gestión de Movimientos)

🔗 [Ver todos los Issues](../../issues)

Estas historias permiten cubrir la interacción del usuario con el sistema, asegurando coherencia entre la lógica del backend y la interfaz del frontend.

---

## Objetivo

Implementar la división del sistema en microservicios independientes por repositorios y establecer una nomenclatura estándar en inglés para cada uno de ellos, facilitando así la comprensión técnica, la interoperabilidad y futuras integraciones.

Adicionalmente, se busca estructurar el frontend del sistema basado en historias de usuario claras, permitiendo:

- Una mejor organización del desarrollo  
- Coherencia entre backend y frontend  
- Escalabilidad del sistema  
- Una experiencia de usuario clara y funcional  

---

## ¿Qué se hizo?

- Se implementaron los **4 HU correspondientes al backend** dentro de la planificación de la Week 6.
- Se realizó la documentación de los HU backend en el repositorio correspondiente.
- Se trabajó en la actualización y estandarización de los microservicios del backend.
- Se documentaron los microservicios `auth-service` e `inventory-service` mediante sus respectivos archivos `README.md`.
- Se implementó la migración de nombres y componentes del backend de español a inglés para mejorar la consistencia técnica del proyecto.
- Se desarrollaron cambios funcionales en `auth-service`, incluyendo gestión de usuarios, actualización de roles y nuevos permisos.
- Se incorporó el nuevo rol **auditor** y se ajustaron permisos en `auth-service` e `inventory-service`.
- Se renombró el rol **empleado** a **farmacéutico** para alinearlo con el dominio del sistema.
- Se habilitaron permisos de consulta específicos para el rol auditor en el microservicio de inventario.


- Se estructuró el frontend con enfoque modular por dominio, separando componentes, páginas y servicios.
- Se realizó la maquetación base de la aplicación (layout) por módulos y por roles.
- Se diseñó y publicó la demo visual del sistema en Canva para referencia funcional/UI.
- Se implementaron y documentaron las siguientes historias de usuario frontend:
  - **HU-FE-01**: Gestión de usuarios (crear, listar, editar y activar/desactivar).
  - **HU-FE-03**: Cambio de contraseña de usuarios desde administración.
  - **HU-FE-04**: Registro de medicamentos.
  - **HU-FE-05**: Actualización de medicamentos.
  - **HU-FE-06**: Eliminación lógica de medicamentos.
- Se consolidó documentación QA por HU en la carpeta `doc/` con evidencias visuales en `doc/images/`.
- Se alineó la base visual y funcional del frontend con el documento de layout del sistema.

### Enlaces del DEMO

- Demo visual del sistema (Canva): [FarmaExpres Demo](https://temenico.my.canva.site/farmaexpres)

## ¿Qué no se logró?

- Aún quedan pendientes validaciones completas de integración entre servicios después de algunos cambios de roles y permisos.
- Queda pendiente seguir fortaleciendo la documentación técnica de otros microservicios que no hicieron parte directa de los 4 HU implementados.

- No se implementó aún la **HU-FE-02** (autenticación de inicio de sesión) como flujo formal completo en frontend.
- No se completaron las historias de usuario de módulos pendientes:
  - **HU-FE-07**: Movimientos (historial).
  - **HU-FE-08**: Inventario (control inteligente de stock).
  - **HU-FE-09**: Inventario (productos agotados).
  - **HU-FE-10**: Auditoría (gestión de movimientos).
- En algunos módulos todavía queda pendiente la validación integral de permisos por rol una vez se cierre completamente el flujo de autenticación.
- Para el alcance de esta semana, **HU-FE-09** y **HU-FE-10** quedan programadas como pendientes para una fase posterior.

## ¿Qué se va a hacer?

- Finalizar las pruebas de integración y validación funcional de los HU implementados en backend.
- Completar la revisión y ajuste de la documentación técnica restante del backend.
- Dar seguimiento a la separación y consolidación de microservicios dentro de la arquitectura del proyecto.
- Corregir posibles inconsistencias detectadas en pruebas posteriores relacionadas con autenticación, autorización y consultas de inventario.

- Implementar la **HU-FE-02 (Autenticación - Inicio de Sesión)**:
  - Construir el flujo completo de login.
  - Gestionar sesión/token de acceso.
  - Aplicar control de acceso por rol desde el frontend.
- Implementar la **HU-FE-07 (Movimientos - Historial)**:
  - Mostrar historial de entradas y salidas.
  - Incorporar filtros por tipo, fecha y usuario.
  - Presentar trazabilidad clara de los registros.
- Implementar la **HU-FE-08 (Inventario - Control Inteligente de Stock)**:
  - Visualizar estado de stock por niveles.
  - Identificar productos críticos.
  - Mostrar apoyo para priorización de reposición.
- **HU-FE-09** y **HU-FE-10** se mantienen fuera del alcance de esta semana y se ejecutarán en la siguiente etapa.
- Mantener el esquema de trabajo por HU: implementación funcional, validaciones, manejo de errores y documentación QA con evidencias por cada entrega.
- Asegurar consistencia entre lo definido en layout, las reglas funcionales del frontend y los endpoints disponibles en backend.
