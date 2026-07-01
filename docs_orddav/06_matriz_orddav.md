# Matriz de Riesgo

| Activo / Riesgo | Probabilidad | Impacto | Nivel de Riesgo |
| --- | --- | --- | --- |
| **Información de Clientes** – Robo de datos personales | Alta | Alto | Crítico |
| **Información de Clientes** – Multas legales | Media | Alto | Alto |
| **Sistemas de Venta (POS)** – Manipulación de precios | Media | Medio | Medio |
| **Sistemas de Venta (POS)** – Interrupción de ventas | Alta | Alto | Crítico |
| **Base de Datos Corporativa** – Fuga masiva de datos | Alta | Alto | Crítico |
| **Base de Datos Corporativa** – Alteración de registros | Media | Alto | Alto |
| **Portal Web/App Móvil** – Robo de sesiones (XSS) | Alta | Alto | Crítico |
| **Portal Web/App Móvil** – Redirección a sitios fraudulentos | Media | Alto | Alto |
| **Inventario y Logística** – Quiebres de stock | Media | Medio | Medio |
| **Infraestructura Tecnológica** – Ransomware | Alta | Alto | Crítico |
| **Infraestructura Tecnológica** – Ejecución remota de comandos | Alta | Alto | Crítico |

# Mapa de Calor

Ejes:

X: Probabilidad (Baja – Media – Alta)

Y: Impacto (Bajo – Medio – Alto)

Distribución:

Zona Crítica (Alta probabilidad + Alto impacto):

Robo de datos personales (Clientes)

Interrupción de ventas (POS)

Fuga masiva de datos (BD)

Robo de sesiones XSS (Portal Web)

Ransomware / Ejecución remota de comandos (Infraestructura)

Zona Alta (Media probabilidad + Alto impacto):

Multas legales (Clientes)

Alteración de registros (BD)

Redirección a sitios fraudulentos (Portal Web)

Zona Media (Media probabilidad + Impacto medio):

Manipulación de precios (POS)

Quiebres de stock (Inventario)

Zona Baja (Baja probabilidad o impacto bajo):

Errores menores en distribución o inventarios (Inventario)

Las vulnerabilidades de inyección SQL y XSS se ubican en la zona crítica, ya que combinan alta probabilidad de explotación con un impacto severo en confidencialidad, integridad y disponibilidad. La inyección de comandos también se clasifica como crítica por su potencial de comprometer la infraestructura completa.