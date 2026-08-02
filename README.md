# Mi almanaque

App web personal para organizar tu tiempo en cinco secciones: **Agenda** (lo que se
viene), **Rutina** (tu tracker mensual de hábitos), **Pendientes** (tus listas por tema,
como notas que te mandas a ti mismo), **Recuerdos** (lo que ya viviste, con fotos y un
globo con mapa mundi) y **Diario** (entradas de texto). La Agenda y los Recuerdos están
conectados, para no escribir la misma salida dos veces. Incluye tema claro/oscuro, diseño
responsive y sincronización opcional con Google Drive.

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
  Lo que ya pasó tiene un botón ★ para **guardarlo como recuerdo sin escribirlo de nuevo**
  (ver más abajo).
- **Rutina:** tu tracker mensual. Marca hábitos con ✕ por día, anota una línea de lo que te
  dejó cada día, sigue cantidades (pasos, sueño…) con gráfico automático, y mira tu % de
  cumplimiento del mes. Tiene un "espacio libre" para subir un dibujo o demostración, y
  notas para próximos meses. **Cada mes sigue sus propias cosas** (ver más abajo). Los
  botones "Hábitos" y "Métricas" gestionan lo del mes que estés viendo: desde ahí puedes
  **editar** cada hábito o métrica (nombre, emoji, frecuencia, unidad, color) sin tener que
  borrarlo, y **reordenarlos** libremente con las flechas ↑/↓.
- **Pendientes:** tus listas por tema, al estilo de esos grupos de WhatsApp que te mandas a
  ti mismo. Crea "grupos" (Trabajo, Casa, Personal… los que quieras, con su emoji y color) y
  dentro de cada uno anota lo que tengas que hacer. Marca cada pendiente como hecho, edítalo
  tocándolo, bórralo, limpia los completados de una vez, y reordena los grupos con ↑/↓.
- **Recuerdos:** lo que ya pasó, por categoría y color, con fotos. Botón "Ver el año" con
  las 12 miniaturas del año (y flechas para saltar a años anteriores). Los días con algo
  pendiente de rescatar desde tu agenda salen marcados con un recuadro punteado 📅. La
  sub-pestaña "Globo" muestra tus recuerdos como puntos sobre el mapa mundi (necesitan
  coordenadas).
- **Diario:** entradas de texto con fecha, ánimo y título opcional.

## De la Agenda a los Recuerdos (sin escribir dos veces)

Antes había que anotar una misma salida dos veces: una en Agenda cuando la planeabas y otra
en Recuerdos cuando ya había pasado. Ahora las dos secciones están conectadas.

- En **Agenda**, cualquier evento cuya fecha ya llegó muestra una **estrella ★** al lado de
  los botones de editar y borrar. Al tocarla se abre el formulario de recuerdo ya lleno con
  el título, la fecha, el lugar y las notas del evento. Solo revisas, le agregas fotos o
  coordenadas si quieres, y guardas.
- En **Recuerdos**, al abrir un día aparece abajo el bloque *"Ese día en tu agenda"* con lo
  que tenías anotado y todavía no pasas a recuerdos. Cada uno con su ★ para convertirlo.
- En el calendario de Recuerdos, esos días se marcan con un **chip de borde punteado 📅**,
  así ves de una mirada qué te falta por rescatar.
- Una vez convertido, el evento queda con la **estrella rellena** (que te lleva al recuerdo)
  y desaparece de la lista de pendientes por convertir: no se ofrece dos veces.
- La categoría se traduce sola (un evento de "Viaje" llega como recuerdo de "Viaje", uno de
  "Cumpleaños" como "Familia"…). Puedes cambiarla antes de guardar.
- Si borras el recuerdo, el evento se desvincula y vuelve a ofrecerse. Si borras el evento,
  el recuerdo se queda: lo vivido no se pierde.

Los eventos **futuros** no aparecen en Recuerdos, solo los que ya pasaron.

## Cada mes puede seguir cosas distintas

En Rutina, los hábitos y métricas ya no son los mismos para siempre: **cada mes tiene su
propia lista**, con su propio orden. Puedes seguir "Ir al gym" en marzo, dejarlo en abril y
retomarlo en mayo, sin perder nada de lo marcado.

- Un **mes nuevo empieza en blanco** y te ofrece un botón **"Importar de \<mes anterior\>"**,
  que copia los hábitos y métricas del último mes que tuviera algo. También está siempre
  disponible arriba, junto a "Hábitos" y "Métricas".
- Importar **agrega** lo que falte; nunca duplica ni borra lo que ya pusiste ese mes.
- En el gestor de Hábitos (o de Métricas), el título te recuerda qué mes estás editando. El
  botón de basurero **quita del mes**, no borra: **las marcas de los meses anteriores se
  conservan** y el hábito baja a una fila de fichas *"Ya los has usado antes"* desde donde lo
  puedes volver a sumar de un toque. El ✕ de cada ficha sí lo borra definitivamente de todos
  los meses, y avisa antes.
- El nombre y el emoji sí son compartidos: si renombras un hábito, cambia en todos los meses
  donde lo uses.
- El % de cumplimiento y los gráficos de cada mes se calculan solo con lo que ese mes seguía.

**Si ya venías usando la app:** todos los meses en los que tengas algo marcado reciben
automáticamente tu lista de hábitos y métricas actual, así que los ves exactamente igual que
antes. El cambio solo se nota de aquí en adelante, en los meses nuevos.

## El globo

El globo de Recuerdos dibuja la Tierra con continentes y fronteras, y pone tus recuerdos como
puntos de color (el de su categoría) sobre el lugar donde ocurrieron. Arrastra para girarlo y
toca un punto para ver de qué recuerdo se trata.

El mapa va **dentro de `index.html`**: son los contornos de Natural Earth (escala 1:110m,
dominio público) simplificados y comprimidos a unos 20 KB. Por eso el globo se ve completo
**sin conexión** y sin depender de ninguna imagen externa. Se redibuja solo al cambiar entre
tema claro y oscuro.

Recuerda que un recuerdo solo aparece en el globo si tiene **latitud y longitud**.

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

### Qué pasa cuando los dos lados tienen datos distintos

La app **nunca decide sola** cuál versión sobrevive. Al sincronizar puede pasar:

- **Drive vacío** o **este dispositivo sin datos propios** → se copia en la dirección obvia,
  sin preguntar.
- **Drive no cambió** desde la última vez que este dispositivo lo vio → se suben los cambios
  locales tranquilamente.
- **Drive cambió y aquí también hay cambios sin subir** → aparece una pantalla con el resumen
  de cada lado (cuántos eventos, recuerdos, entradas de diario…) y tres opciones:
  **Combinar** (recomendado), **Dejar lo de Drive** o **Dejar lo de este dispositivo**.

Combinar junta eventos, recuerdos, diario, hábitos, métricas y pendientes de ambos lados;
si algo existe en los dos, se queda la versión más reciente. Lo único que combinar no
propaga son los **borrados**: si eliminaste algo en un dispositivo y el otro todavía lo
tenía, puede reaparecer. Es a propósito — es preferible que vuelva algo de más a que
desaparezca algo que querías.

### La red de seguridad

Antes de reemplazar el archivo de Drive, la app guarda el contenido anterior en
`mi-calendario-datos-anterior.json`, en tu mismo Drive. Si algo sale mal, ese archivo tiene
la versión previa. Además Google Drive guarda su propio historial de versiones: clic derecho
sobre el archivo → **Gestionar versiones**.

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
- Funciona sin conexión una vez cargada; las frases, el mapa del globo y tus datos no
  dependen de internet (la sincronización con Drive sí la necesita).
- El mapa del globo usa datos de [Natural Earth](https://www.naturalearthdata.com/), de
  dominio público. Están embebidos y simplificados dentro de `index.html`.
