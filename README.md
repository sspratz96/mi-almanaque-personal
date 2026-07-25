# Mi calendario

App personal de calendario con tres secciones: **Agenda** (lo que se viene),
**Rutina** (hábitos tickeables) y **Recuerdos** (lo que ya viviste, con fotos y globo).
Es un solo archivo `index.html`, sin backend y sin instalación.

## Dónde se guardan tus datos

Todo vive **en tu navegador** (localStorage para los datos, IndexedDB para las fotos).
Nada se sube a internet ni queda en el repositorio. Por eso:

- El repositorio solo contiene el **código** (`index.html`), nunca tus eventos ni fotos.
- Puedes tener el repo **público** sin exponer nada personal.
- Los datos son por navegador/dispositivo. Para pasarlos a otro equipo, usa el botón
  de respaldo (ícono ↧ arriba a la derecha) → *Descargar respaldo (.json)* y luego
  *Restaurar respaldo* en el otro dispositivo.

## Subirlo a GitHub Pages

1. Crea un repositorio nuevo en GitHub (público está bien).
2. Sube el archivo `index.html` a la raíz del repo.
3. En el repo: **Settings → Pages**.
4. En *Source* elige la rama `main` y la carpeta `/ (root)`. Guarda.
5. Espera ~1 minuto. Tu app queda en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.

Ábrela en el teléfono y guárdala en la pantalla de inicio (en el menú del navegador,
"Agregar a pantalla de inicio") para usarla como una app más.

> ¿Quieres el repo privado? GitHub Pages funciona con repos privados solo en planes
> de pago. Como el código no tiene datos personales, dejarlo público es lo más simple.

## Probarlo sin GitHub

Abre `index.html` directo en tu navegador (doble clic). Funciona igual y guarda los
datos en ese navegador.

## Traer tus eventos desde la planilla

En Excel/Sheets: guarda la hoja **Eventos** como `.csv`. En la app, botón ↧ →
*Importar desde la planilla* → carga el CSV. Lee las columnas Fecha inicio, Fecha fin,
Hora, Evento, Categoría, Lugar, Notas y Estado.

## Notas

- Las fotos se reducen a 1280 px al guardarlas para no llenar el espacio del navegador.
- Los datos de ejemplo (dentista, vacaciones, dos recuerdos) se pueden borrar tocándolos.
- Coordenadas del globo: en Google Maps, clic derecho sobre el lugar copia
  `latitud, longitud`. Pégalas en los campos Latitud y Longitud del recuerdo.

## Sincronización con Google Drive (opcional)

La app puede guardar una copia de tus datos en tu propio Google Drive y mantenerla
igual entre tus dispositivos. Abre el menú de datos (ícono ↧) → **Conectar con Google**.

- Usa el permiso `drive.file`: la app **solo ve el archivo que ella misma crea**
  (`mi-calendario-datos.json`), nada más de tu Drive.
- El **Client ID** de Google va escrito en `index.html` (constante `GOOGLE_CLIENT_ID`).
  No es secreto, puede estar en el repo. Si lo regeneras, cámbialo ahí.
- Requiere que tu dirección de GitHub Pages esté en los "Orígenes de JavaScript"
  autorizados de tu credencial, y que tu correo esté como "usuario de prueba".
- El acceso dura ~1 hora: cada vez que abres la app y quieres sincronizar, pulsa
  **Conectar** una vez. Mientras la sesión está activa, los cambios se suben solos.
- Solo funciona en la app **publicada** (GitHub Pages o local), no en vistas previas.

## Las frases inspiradoras

Viven en el archivo aparte **`frases.js`**, no dentro de `index.html`. Ábrelo con
cualquier editor de texto y agrega las que quieras siguiendo el formato de cada línea:

    ["El texto de la frase.", "Autor"],

La app elige una distinta cada día y el botón ↻ muestra otra al azar. **Sube siempre
`frases.js` junto a `index.html`** al repo; si falta, la app usa un pequeño respaldo
interno y sigue funcionando.

