# Luis G. Tech Group Web

Landing oficial de Luis G. Tech Group.

## Flujo de trabajo

Este proyecto usa GitHub como repositorio de código y cPanel Git™ Version Control como puente de despliegue hacia el hosting de Directnic.

```text
GitHub
  ↓
cPanel Git™ Version Control
  ↓
/home/lstocks3/luisgtechgroup.com/
  ↓
https://www.luisgtechgroup.com/
```

## Estructura

```text
/
├── .cpanel.yml
├── index.html
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        ├── favicon.png
        └── logo_web.jpg
```

## Contacto

```text
hola@luisgtechgroup.com
WhatsApp: +34647551192
```

## Redes

```text
YouTube: @luisgtechgroup
Instagram: @luisgtechgroup
Facebook: @luisgtechgroup
TikTok: @luisgtechgroup
```

## Despliegue en cPanel

1. Entrar en cPanel → Git™ Version Control.
2. Usar Update from Remote para traer cambios.
3. Usar Deploy HEAD Commit para publicar al document root.
