# Demo de DDD, ADR y Arquitectura por Escenarios

Esta sesion construye una demo pedagogica, no una API funcional.

## Que contiene

- Una landing principal con tabs separados para `DDD`, `ADR`, `All Project`, `By Module`, `Microservicios`, `API Gateway`, `Puertos` y `Kubernetes`.
- Contenedores visuales por puerto para que al abrir `localhost:<puerto>` se vea claramente que servicio, repo y ambiente estas visitando.
- Un `docker-compose.yml` con los puertos solicitados:
  - `front`: `80`, `81`, `82`
  - `api-gateway`: `8000`, `8001`, `8002`
  - `micro-1`: `8080`, `8081`, `8082`
  - `micro-2`: `9000`, `9001`, `9002`
  - `micro-3`: `8888`, `8889`, `8890`
  - `base-dato`: `5432`, `5433`, `5434`

## Como validarlo

1. Revisar la configuracion:

```powershell
docker compose config
```

2. Levantar la demo completa:

```powershell
docker compose up -d --build
```

3. Ver los servicios activos:

```powershell
docker compose ps
```

4. Bajar la demo:

```powershell
docker compose down
```

## Accesos principales

- Front main: [http://localhost:80](http://localhost:80)
- Front qa: [http://localhost:81](http://localhost:81)
- Front dev: [http://localhost:82](http://localhost:82)
- Gateway main: [http://localhost:8000](http://localhost:8000)
- Gateway qa: [http://localhost:8001](http://localhost:8001)
- Gateway dev: [http://localhost:8002](http://localhost:8002)

## Restriccion detectada en esta maquina

El puerto `5434` ya esta ocupado por el contenedor `silin-postgres`.

Si quieres levantar tambien `base-dato-dev`, primero debes detener temporalmente ese contenedor:

```powershell
docker stop silin-postgres
```

Luego puedes iniciar la demo y despues volver a levantarlo:

```powershell
docker start silin-postgres
```

## Idea pedagogica del proyecto

- `All Project`: muestra una sola base de codigo organizada por capas globales.
- `By Module`: reagrupa el sistema alrededor de `Seguridad`, `Venta` e `Inventario`.
- `Microservicios`: separa cada modulo en su propio repo y runtime.
- `API Gateway`: enseña la puerta de entrada unica.
- `Kubernetes`: conecta el mapa de puertos con namespaces, deployments, services e ingress.
