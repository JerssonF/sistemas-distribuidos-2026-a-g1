***** EXplicar DDD - Ejemplo funcional.
ADR
All project [dev, qa, main]=> By Module

Entidad
	Seguridad
	Venta
	Inventario
Repositorio
	Seguridad
	Venta
	Inventario
Servicio
	Seguridad
	Venta
	Inventario
Controlador
	Seguridad
	Venta
	Inventario
Utils
	validations
	jwt
	
	*****************Cohesión acoplamiento *** escenarios
	Entidad
		Seguridad
	Repositorio
		Seguridad
	Servicio
		Seguridad
	Controlador
		Seguridad
	Utils
		validations
		jwt
		
	Entidad
		Venta
	Repositorio
		Venta
	Servicio
		Venta
	Controlador
		Venta
	Utils
		validations
		
	Entidad
		Inventario
	Repositorio
		Inventario
	Servicio
		Inventario
	Controlador
		Inventario
	Utils
		validations

	
By Module

	Seguridad
		Entidad
		Repositorio
		Servicio
		Controlador
		Utils	
			jwt
	Venta
		Entidad
		Repositorio
		Servicio
		Controlador
	Inventario
		Entidad
		Repositorio
		Servicio
		Controlador
	Utils
		validations
		
	*****************Cohesión acoplamiento *** escenarios
	**escenario 1** => new git
	Seguridad
		Entidad
		Repositorio
		Servicio
		Controlador
		Utils	
			jwt
	
	**escenario 2** => new git
	Venta
		Entidad
		Repositorio
		Servicio
		Controlador
	
	**escenario 3** => new git
	Inventario
		Entidad
		Repositorio
		Servicio
		Controlador
	Utils
		validations
		
*************************************************
Cada repo tiene [develop, qa, main]
repo: base-dato
repo: micro-1 - micro-2 - micro-3 [back]
repo: front

repo: base-dato [5432:main][5433:qa][5434:dev]
repo: 
	micro-1{spring boot} => [8080:main][8081:qa][8082:dev]
	micro-2{node} 		 => [9000:main][9001:qa][9002:dev]
	micro-3{python}		 => [8888:main][8889:qa][8890:dev]
	
	***-> api getway => [8000:main][8001:qa][8002:dev]
	
repo: front 			 => [80:main][81:qa][82:dev]

*************************************************
kubernetes


