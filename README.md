# Frontline Latam — Sitio web

## Qué hay en esta carpeta
- `index.html` — página de inicio (una sola página fluida: hero, nosotros, por qué elegirnos, servicios, contacto)
- `catalogo.html` — catálogo extendido de servicios, con filtros
- `css/style.css` — estilos del sitio
- `js/main.js` — menú móvil, animaciones, formulario de contacto, filtros
- `assets/` — logo, ícono y favicons ya generados desde tu logo original

No hay backend, base de datos, ni build tool. Es HTML/CSS/JS puro: se puede alojar en cualquier hosting estático gratuito.

---

## Opción recomendada: Cloudflare Pages (gratis, rápido, con HTTPS automático)

1. Crea una cuenta gratuita en https://pages.cloudflare.com
2. "Create a project" → "Upload assets" (o conecta un repo de GitHub si prefieres control de versiones)
3. Sube el contenido de esta carpeta completa (todo lo que está dentro de `site/`, no la carpeta en sí)
4. Cloudflare te da una URL gratuita tipo `frontlinelatam.pages.dev` — pruébala ahí primero
5. Cuando esté bien, conecta tu dominio (ver sección siguiente)

### Alternativas igual de válidas (todas gratis)
- **GitHub Pages** — ideal si ya usas o quieres usar Git
- **Netlify** — arrastrar y soltar la carpeta, similar a Cloudflare Pages

---

## Conectar tu dominio de Namecheap (frontlinelatam.com)

Tu dominio se queda en Namecheap — solo cambias hacia dónde apunta (DNS). No necesitas mover el dominio ni pagar hosting nuevo.

### Si usas Cloudflare Pages:
1. En el proyecto de Cloudflare Pages → "Custom domains" → añade `frontlinelatam.com` y `www.frontlinelatam.com`
2. Cloudflare te dará registros DNS (generalmente un `CNAME`)
3. Entra a Namecheap → Domain List → tu dominio → "Manage" → "Advanced DNS"
4. Agrega los registros que te indicó Cloudflare (borra los que apunten al Canva actual)
5. Espera de 10 minutos a unas horas para que se propague

### Si usas GitHub Pages o Netlify:
El proceso es igual en espíritu: el proveedor te da un registro CNAME o unas IPs, y las agregas en "Advanced DNS" de Namecheap. Cada proveedor tiene una guía paso a paso propia (búscala como "conectar dominio personalizado" dentro de su panel).

---

## Reemplazar contenido más adelante

- **Fotos reales**: cuando tengas fotos de operaciones/equipos, reemplaza los bloques SVG decorativos (identificables en `index.html` dentro de `.split-visual`) por una etiqueta `<img>` apuntando a `assets/nombre-de-tu-foto.jpg`
- **Más ítems de catálogo**: cada bloque en `catalogo.html` dentro de `.catalogue-grid` es independiente — puedes copiar un `.cat-item` y cambiar el texto
- **WhatsApp**: el número está en dos lugares — `js/main.js` (variable `waNumber`) y varios `href="https://wa.me/593999288710"` en ambos HTML. Si cambia el número, hay que actualizarlo en todos.
- **Correo**: aparece como `comercial@frontlinelatam.com` en ambos HTML.

---

## Formulario de contacto

El formulario no usa backend: arma el mensaje y abre WhatsApp Web/App con el texto ya escrito, listo para enviar. Es la forma más simple y confiable de recibir leads sin pagar por un servicio de formularios. Si más adelante quieres que también llegue por correo automáticamente, se puede integrar un servicio como Formspree (tiene plan gratuito).
