# Controles y Política

La empresa SuperMax debe establecer un marco de políticas de seguridad orientadas a la protección de sus activos de información y a la reducción de riesgos derivados de ataques de inyección (SQL, XSS y comandos). Las principales medidas incluyen:

## Políticas de prevención:

Implementar consultas preparadas y ORM seguros en todas las interacciones con bases de datos.

Definir lineamientos de validación y sanitización de entradas en aplicaciones web y móviles.

Aplicar el principio de mínimos privilegios en cuentas de bases de datos y servicios críticos.

Establecer una política de uso seguro de cookies (HttpOnly, Secure) y cabeceras de seguridad como Content Security Policy.

Prohibir la ejecución directa de comandos del sistema cuando existan APIs equivalentes.

Segmentar la red para aislar servicios críticos y reducir la superficie de ataque.

## Controles de mitigación:

Implementación de firewalls de aplicaciones web (WAF) para filtrar tráfico malicioso.

Uso de monitoreo continuo y detección de anomalías en infraestructura tecnológica.

Ejecución de servicios en contenedores o entornos aislados, limitando el impacto de una explotación.

Programar revisiones de código y pruebas de penetración periódicas, asegurando la detección temprana de vulnerabilidades.

Establecer un plan de respuesta a incidentes que defina roles, responsabilidades y tiempos de reacción.