# ADR 0001: Organizacion del core por modulo antes de separar microservicios

- Estado: Aceptado
- Fecha: 2026-03-18

## Contexto

El sistema se quiere explicar con tres dominios principales:

- Seguridad
- Venta
- Inventario

En una estructura completamente global por capas, el negocio se reparte entre carpetas como `Entidad`, `Repositorio`, `Servicio` y `Controlador`. Esa forma sirve para arrancar, pero empieza a generar confusion cuando el dominio crece y cada modulo necesita evolucionar por separado.

Ademas, la arquitectura esperada del curso incluye tres ambientes por repo (`develop`, `qa`, `main`), un `api-gateway`, varios microservicios y despliegue posterior en Kubernetes.

## Decision

Se decide organizar primero el core por modulo dentro de una sola base de codigo y, cuando el dominio o el equipo lo justifiquen, separar esos modulos en repos independientes.

La evolucion sugerida es:

1. Entender el negocio con DDD.
2. Agrupar el codigo por modulo.
3. Mantener una zona comun minima para utilidades compartidas.
4. Separar `Seguridad`, `Venta` e `Inventario` a microservicios cuando el despliegue independiente sea necesario.

## Opciones consideradas

### Opcion A: All Project por capas globales

Ventajas:

- Es directa para comenzar.
- Facilita onboarding tecnico inicial.

Desventajas:

- Mezcla el dominio entre carpetas tecnicas.
- Aumenta el acoplamiento.
- Hace mas dificil mover un modulo a otro repo.

### Opcion B: By Module en un solo repo

Ventajas:

- Aumenta la cohesion.
- Mejora la lectura del dominio.
- Prepara mejor la separacion futura.

Desventajas:

- Requiere disciplina para no volver a meter logica en utils globales.
- Obliga a definir mejor ownership de cada modulo.

### Opcion C: Separacion inmediata a microservicios

Ventajas:

- Ownership y despliegue independientes desde el inicio.
- Libertad tecnologica por dominio.

Desventajas:

- Sube de inmediato la complejidad operativa.
- Obliga a tener gateway, observabilidad y automatizacion desde muy temprano.

## Consecuencias

- Se mejora la comprension del sistema para estudiantes y equipo.
- Se reduce la confusion entre Seguridad, Venta e Inventario.
- El salto a microservicios se vuelve mas controlado.
- Se conserva una narrativa clara para explicar `API Gateway`, `dev/qa/main` y `Kubernetes`.
