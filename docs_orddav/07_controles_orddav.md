# Controles y Política

La empresa SuperMax debe establecer un marco de políticas de seguridad orientadas a la protección de sus activos de información y a la reducción de riesgos derivados de ataques de inyección (SQL, XSS y comandos). Las principales medidas incluyen:

## Políticas de prevención:

Implementar consultas preparadas y ORM seguros en todas las interacciones con bases de datos.{Uso de sentencias parametrizadas y frameworks de acceso a datos que evitan la ejecución de código malicioso en bases de datos.}

Definir lineamientos de validación y sanitización de entradas en aplicaciones web y móviles.{Uso de sentencias parametrizadas y frameworks de acceso a datos que evitan la ejecución de código malicioso en bases de datos.}

Aplicar el principio de mínimos privilegios en cuentas de bases de datos y servicios críticos.{Asignación de permisos estrictamente necesarios a cuentas y servicios, reduciendo el impacto de una posible intrusión.}

Establecer una política de uso seguro de cookies (HttpOnly, Secure) y cabeceras de seguridad como Content Security Policy.{Configuración de cookies con atributos de seguridad y aplicación de políticas de contenido que limitan la ejecución de scripts no autorizados.}

Prohibir la ejecución directa de comandos del sistema cuando existan APIs equivalentes.{Sustitución de llamadas al sistema operativo por APIs seguras que cumplen la misma función sin exponer vulnerabilidades.}

Segmentar la red para aislar servicios críticos y reducir la superficie de ataque.{División de la infraestructura en zonas aisladas para contener ataques y proteger servicios críticos.}

## Controles de mitigación:

Implementación de firewalls de aplicaciones web (WAF) para filtrar tráfico malicioso.{Sistemas que filtran y bloquean tráfico malicioso dirigido a aplicaciones web.}

Uso de monitoreo continuo y detección de anomalías en infraestructura tecnológica.{Supervisión constante de la infraestructura para identificar comportamientos sospechosos en tiempo real.}

Contenedores y entornos aislados.{Ejecución de servicios en espacios controlados que limitan el alcance de un ataque exitoso.}

Programar revisiones de código y pruebas de penetración periódicas, asegurando la detección temprana de vulnerabilidades.{Evaluaciones periódicas que permiten detectar y corregir vulnerabilidades antes de que sean explotadas.}

Establecer un plan de respuesta a incidentes que defina roles, responsabilidades y tiempos de reacción.{Procedimiento formal que define acciones, responsables y tiempos de reacción ante un evento de seguridad.}