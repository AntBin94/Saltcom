# Consentimiento de Cookies

### descargamos el repositorio desde https://github.com/saltcorn/cookieconsent

- importamos repositorio y de momento esta como privado - https://github.com/AntBin94/CookieConsent.git

-  en el package.json modificamos nombre a consentimientocookies, acutalizamos versión a 0.1.1, la descripción a Esp, el autor y dirección repositorio, 

- en index.js actualizamos las rutas para que coincida con package.json y acutalización del plugin_name

- Cambios clave en index.js:

Inyeccion de scripts por categoria Ads: index.js:32-38
Config de categorias (agrega ads): index.js:62-75
Seccion Ads en el modal de preferencias: index.js:111-173
Campos Ads en el formulario de configuracion: index.js:269-357
