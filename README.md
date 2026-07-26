# Mi calendario

App web personal para organizar tu tiempo en cinco secciones: **Agenda** (lo que se
viene), **Rutina** (tu tracker mensual de hábitos), **Pendientes** (tus listas por tema,
como notas que te mandas a ti mismo), **Recuerdos** (lo que ya viviste, con fotos y un
globo) y **Diario** (entradas de texto). Incluye tema claro/oscuro, diseño responsive y
sincronización opcional con Google Drive.

Son archivos estáticos (`index.html` + `frases.js`), sin backend y sin instalación.

## Archivos del proyecto

- **`index.html`** — la app completa. Súbelo siempre.
- **`frases.js`** — la lista de frases inspiradoras (editable, ver más abajo). Súbelo junto al index.
- **`README.md`** — esta guía (opcional).

## Dónde se guardan tus datos

Todo vive **en tu navegador** (localStorage para los datos, IndexedDB para las fotos).
Nada se sube a internet ni queda en el repositorio, salvo que actives la sincronización
con Drive (ver más abajo). Por eso:

- El repositorio solo contiene el **código**, nunca tus eventos, recuerdos ni fotos.
- Puedes tener el repo **público** sin exponer nada personal.
- Los datos son por navegador/dispositivo. Para pasarlos a otro equipo usa el respaldo
  `.json` (ícono ↧) o la sincronización con Drive.

### Los tres botones del menú de datos (ícono ↧)

- **Descargar respaldo (.json):** baja *todo* (agenda, rutina, recuerdos, diario y fotos)
  como un archivo. Es tu copia de seguridad manual.
- **Cargar archivo .json:** restaura un respaldo, reemplazando lo que haya en la app.
- **Cargar eventos (.csv):** solo *agrega* eventos a la Agenda desde la hoja "Eventos" de
  la planilla de Excel. No reemplaza nada.

## Las cinco secciones

- **Agenda:** vista de mes con colores según cuántas cosas hay cada día. Toca un día para
  ver el detalle ordenado por hora (los de "todo el día" primero). Botón "Ver el año" con
  las 12 miniaturas. Los eventos pueden durar varios días (fecha fin) o ser de todo el día.
- **Rutina:** tu tracker mensual. Marca hábitos con ✕ por día, anota una línea de lo que te
  dejó cada día, sigue cantidades (pasos, sueño…) con gráfico automático, y mira tu % de
  cumplimiento del mes. Tiene un "espacio libre" para subir un dibujo o demostración, y
  notas para próximos meses. Los botones "Hábitos" y "Métricas" gestionan lo que sigues:
  desde ahí puedes **editar** cada hábito o métrica (nombre, emoji, frecuencia, unidad,
  color) sin tener que borrarlo, y **reordenarlos** libremente con las flechas ↑/↓.
- **Pendientes:** tus listas por tema, al estilo de esos grupos de WhatsApp que te mandas a
  ti mismo. Crea "grupos" (Trabajo, Casa, Personal… los que quieras, con su emoji y color) y
  dentro de cada uno anota lo que tengas que hacer. Marca cada pendiente como hecho, edítalo
  tocándolo, bórralo, limpia los completados de una vez, y reordena los grupos con ↑/↓.
- **Recuerdos:** lo que ya pasó, por categoría y color, con fotos. La sub-pestaña "Globo"
  muestra tus recuerdos como puntos sobre la Tierra (necesitan coordenadas).
- **Diario:** entradas de texto con fecha, ánimo y título opcional.

## Subirlo a GitHub Pages

1. Crea un repositorio en GitHub (público está bien).
2. Sube `index.html` y `frases.js` a la raíz del repo.
3. En el repo: **Settings → Pages**.
4. En *Source* elige la rama `main` y la carpeta `/ (root)`. Guarda.
5. Espera ~1 minuto. Tu app queda en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.

Ábrela en el teléfono y guárdala en la pantalla de inicio para usarla como una app más.
Tras cada cambio, GitHub Pages tarda 1–3 minutos en actualizar; si ves la versión vieja,
recarga con Ctrl+F5 o prueba en una ventana de incógnito.

### Actualizar por consola

Desde la carpeta del repo:

    git add .
    git commit -m "descripción del cambio"
    git push

## Sincronización con Google Drive (opcional)

La app puede guardar una copia de tus datos en tu propio Google Drive y mantenerla igual
entre tus dispositivos. Abre el menú de datos (↧) → **Conectar con Google**.

- Usa el permiso `drive.file`: la app **solo ve el archivo que ella misma crea**
  (`mi-calendario-datos.json`), nada más de tu Drive.
- Es **gratis** y no requiere tarjeta. El **Client ID** de Google va escrito en `index.html`
  (constante `GOOGLE_CLIENT_ID`); no es secreto, puede estar en el repo. Si lo regeneras,
  cámbialo ahí.
- Requiere que tu dirección de GitHub Pages esté en los "Orígenes de JavaScript" autorizados
  de tu credencial, y que tu correo esté como "usuario de prueba" en la pantalla de consentimiento.
- El acceso dura ~1 hora: cada vez que abres la app y quieres sincronizar, pulsa **Conectar**
  una vez. Mientras la sesión está activa, los cambios se suben solos.
- Solo funciona en la app **publicada** (GitHub Pages o abierta localmente), no en vistas previas.

Consejo: aunque uses Drive, baja un respaldo `.json` de vez en cuando y guárdalo aparte.
La regla mental: el navegador es tu día a día, Drive es la sincronización, el `.json` es tu seguro.

## Las frases inspiradoras

Viven en el archivo aparte **`frases.js`**, no dentro de `index.html`. Ábrelo con cualquier
editor de texto y agrega las que quieras siguiendo el formato de cada línea:

    ["El texto de la frase.", "Autor"],

La app elige una distinta cada día y el botón ↻ muestra otra al azar. **Sube siempre
`frases.js` junto a `index.html`**; si falta, la app usa un pequeño respaldo interno y sigue
funcionando.

## Notas

- Las fotos e imágenes se reducen automáticamente al guardarlas para no llenar el espacio
  del navegador.
- Los datos de ejemplo (eventos, hábitos, métricas, recuerdos y una entrada de diario) se
  pueden borrar cuando quieras.
- Coordenadas del globo: en Google Maps, clic derecho sobre el lugar copia `latitud, longitud`.
  Pégalas en los campos Latitud y Longitud del recuerdo.
- Funciona sin conexión una vez cargada; las frases y tus datos no dependen de internet
  (la sincronización con Drive sí la necesita).
