---
tipo: estado
estado: provisional
creado: 2026-10-29
actualizado: 2026-10-29
tags: [landing, estado]
fuentes: [package.json, README.md, AGENTS.md]
---
# Estado del proyecto

## Código y ejecución
- Confirmado: landing existente en React 19, TypeScript y Vite 8; estructura modular en `src/`.
- Confirmado: Node v24.22.1, npm 11.19.1 y Git 2.56.0.windows.2 disponibles al arranque.
- Confirmado: scripts declarados: `npm run dev` (puerto 3000), `npm run build`, `npm run preview`, `npm run lint` (`tsc --noEmit`).
- Confirmado: no se localizó ZIP; el código ya extraído en esta carpeta sirve como base. Se generaron `package-lock.json` y `node_modules/` con npm.
- Confirmado: la instalación inicial reveló que `vite@8` requiere `esbuild ^0.27 || ^0.28`, mientras el proyecto fijaba `^0.25`; se ajustó `package.json` a `^0.28.0` y `npm install` completó (180 paquetes; auditoría reportó 0 vulnerabilidades).
- Confirmado: `npm run build` compila con éxito. `npm run lint` (`tsc --noEmit`) termina sin errores. Build muestra aviso de Vite sobre `__dirname` en `vite.config.ts` y `configLoader: 'native'`.
- Confirmado: Git se inicializó localmente; `Docs/` está excluida. Identidad local configurada a solicitud del usuario: `LuisRuiz35 <ing.ruiznavarroluis@gmail.com>`. Primer commit local creado: `17c9957`.

## Publicación y comprobaciones
- Publicación: pendiente; no hay evidencia de destino o sitio público verificado.
- Compila: sí. Revisado visualmente en navegador: sí, escritorio a 1234 × 712; encabezado, hero y composición legibles. Probado funcionalmente: apertura del formulario desde el botón principal, sí; envío y recepción real, no. Revisión en móvil: pendiente. Publicado: no.
- Sí se inspeccionó visualmente `Docs/PORTADA.jpeg` (fotografía grupal real en la fachada) y `Docs/LOGO EMPRESA.png` (logo azul y amarillo); se extrajo texto de los dos DOCX.

## Siguiente paso
Confirmar una mejora pequeña a la landing, por ejemplo sustituir por la foto real `PORTADA.jpeg` la imagen externa actual de la parte superior, una vez validado el permiso de imagen. Para arrancar: `npm run dev -- --host 127.0.0.1` (el script existente configura un host más amplio; esta opción lo limita a esta computadora).
