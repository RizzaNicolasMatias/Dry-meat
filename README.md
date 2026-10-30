<div align="center">

# 🐂 DRY•MEAT

### Un producto. Una escena. Un corte a la vez.

Web cinematográfica de **un solo producto**: a medida que hacés scroll, la bolsa viaja por la pantalla, el fondo se corta en diagonal y los textos gigantes pasan por detrás y por delante del producto.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Hecho en Tucumán](https://img.shields.io/badge/Hecho_en-Tucumán_🇦🇷-BC5442?style=for-the-badge)

</div>

---

## 🎬 La idea

DRY•MEAT es un snack proteico de carne vacuna en bolsa de 30 g que se vende en gimnasios y comercios aliados de Tucumán. Como la marca gira alrededor de **un único producto**, la web lo trata como protagonista absoluto:

- **Una sola capa de producto** (la bolsa recortada) que acompaña todo el recorrido.
- **Texto gigante** en Bodoni Moda que pasa por detrás y por delante de la bolsa.
- **"El corte"** como lenguaje visual: transiciones con cortes diagonales y facetas angulares inspiradas en el toro del logo.
- **Paleta cerrada** de seis colores, tomada del logo y del packaging.

## 🧭 Estado del proyecto

| Capítulo | Estado |
|---|---|
| Preloader con cortina angular | ✅ Listo |
| 01 · Hero | ✅ Listo |
| 02 · 100% carne vacuna (corte diagonal) | ✅ Listo |
| 03 · 50% proteína | 🔜 Pendiente |
| 04 · Los números del pack | 🔜 Pendiente |
| 05 · 0% TACC | 🔜 Pendiente |
| 06 · BCAA y aminoácidos | 🔜 Pendiente |
| 07 · Hecho en Argentina | 🔜 Pendiente |
| 08 · 30 g en tu bolsillo | 🔜 Pendiente |
| 09 · Dónde comprar (componente creado, falta integrarlo) | 🛠️ En curso |
| 10 · Cierre con WhatsApp | 🔜 Pendiente |

## 🧰 Tecnologías

- **[Next.js](https://nextjs.org/)** (App Router) + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com/)**
- **[GSAP](https://gsap.com/) + ScrollTrigger**: línea de tiempo ligada al scroll y fijado de pantalla (*pin*)
- **[Lenis](https://lenis.darkroom.engineering/)**: scroll suave
- **[Motion](https://motion.dev/)**: filtros animados de la sección de puntos de venta
- **[Lucide](https://lucide.dev/)**: iconos
- Tipografías con `next/font`: **Bodoni Moda** (títulos) y **Space Grotesk** (datos y textos chicos)

## 🚀 Probalo en tu compu

Necesitás [Node.js](https://nodejs.org/) (versión LTS).

```bash
git clone https://github.com/RizzaNicolasMatias/Dry-meat.git
cd Dry-meat
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000). Si el puerto está ocupado, Next te avisa en la terminal cuál usa.

> En Windows, si PowerShell bloquea `npm`, ejecutá una vez:
> `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`

## 🖼️ Imágenes que necesita el proyecto

Guardalas en `public/images/` con **estos nombres exactos**:

| Archivo | Qué es |
|---|---|
| `logo.png` | Logo de la marca (toro + DRY•MEAT) |
| `pack-cutout.png` | La bolsa **recortada, con fondo transparente** (es la que se anima) |
| `pack-hero.png` | Foto original del pack, solo como referencia y para Open Graph |
| `stores/<nombre>.png` | Logos de los puntos de venta (ver abajo) |

Logos de los puntos de venta, en `public/images/stores/`:

`octaviano.png` · `jockey-gym.png` · `la-salumeria.png` · `hammer.png` · `vitali.png` · `rc-gym.png` · `sofia-madrid.png` · `tmr-training-center.png` · `allegra-open-drugstore.png` · `tuluka.png` · `nutriendo-raices.png` · `el-almacen-gourmet.png`

> Si falta algún logo, la web muestra el nombre del comercio en texto en lugar de una imagen rota.
> Si no existe `pack-cutout.png`, en modo desarrollo aparece una silueta con un aviso.

## ✏️ Cómo cambiar contenido

**Todo el contenido vive en `src/data/content.ts`.** No hace falta tocar el diseño.

| Qué querés cambiar | Dónde |
|---|---|
| Textos de cada capítulo | `CHAPTERS_COPY` |
| Frase gancho del Hero (3 opciones) | `HERO_HOOK_OPTIONS` y `SITE_SETTINGS.activeHeroHookIndex` |
| WhatsApp, precio, Instagram | `BRAND_CONTENT` |
| Datos nutricionales (dos juegos) | `NUTRITION_SETS` y `SITE_SETTINGS.activeNutritionSet` |
| Puntos de venta y sucursales | `PARTNER_STORES` |
| Posición de la bolsa en cada capítulo | `PRODUCT_PATH` |
| Líneas de detalle sobre el pack | `DETAIL_CALLOUTS` |
| Ocultar los avisos `[verificar]` y `[COMPLETAR]` | `SITE_SETTINGS.showVerifyTags = false` |
| Proporción ancho/alto del PNG de la bolsa | `SITE_SETTINGS.packAspect` |

### 🎯 Calibrador de poses (solo en desarrollo)

Con `npm run dev` aparece abajo a la izquierda el botón **CALIBRAR POSES [DEV]**. Permite mover la bolsa y las líneas de detalle con deslizadores, probar escritorio y móvil, elegir la frase gancho y **copiar el objeto listo** para pegarlo en `content.ts`. En producción no se muestra.

## 🗂️ Estructura

```
src/
├── app/
│   ├── layout.tsx                  # Fuentes, metadata, Open Graph y datos estructurados
│   ├── page.tsx                    # Página principal
│   └── globals.css                 # Paleta, reglas de Lenis y animaciones base
├── components/
│   ├── CortePremiumExperience.tsx  # Escena principal y línea de tiempo del scroll
│   ├── PersistentPackLayer.tsx     # La bolsa, su sombra y las líneas de detalle
│   ├── BullLogoAssembly.tsx        # Toro facetado, facetas y preloader
│   ├── CalibrationPanel.tsx        # Calibrador (solo desarrollo)
│   ├── WhereToBuySection.tsx       # Marquee y buscador de sucursales
│   └── PortabilityIcons.tsx        # Íconos de momentos de consumo
├── data/
│   └── content.ts                  # Textos, datos y puntos de venta
└── lib/
    └── utils.ts                    # Enlaces a Google Maps y WhatsApp
```

## 🎨 Paleta

| Color | Hex | Uso |
|---|---|---|
| Negro rojizo | `#120808` | Fondo oscuro cinematográfico |
| Terracota | `#BC5442` | Color del toro y capítulos de impacto |
| Crema | `#F7EFE2` | Fondo editorial y textos sobre oscuro |
| Carbón | `#1B1B19` | Textos sobre crema y planos geométricos |
| Dorado | `#C9A24A` | Detalles (franja de BCAA, rótulos) |
| Celeste | `#75AADB` | Solo un detalle sutil en "Hecho en Argentina" |

## ♿ Accesibilidad y rendimiento

- Respeta `prefers-reduced-motion`: sin animación, con cambio directo entre capítulos.
- El scroll queda bloqueado mientras carga el preloader (máximo 6 segundos).
- Un solo `h1`, textos alternativos descriptivos y navegación por teclado.
- Solo se animan `transform`, `opacity` y `clip-path`.

## 🌍 Publicarlo en Vercel

1. Subí el proyecto a GitHub.
2. En [vercel.com](https://vercel.com/) elegí **Add New → Project** e importá el repositorio.
3. Agregá la variable de entorno `NEXT_PUBLIC_SITE_URL` con la URL final del sitio (para Open Graph y datos estructurados).
4. Pulsá **Deploy**.

> Si la web es para un cliente, revisá los términos de Vercel sobre uso comercial del plan gratuito.

## ⚠️ Antes de publicar

- Los **datos nutricionales** y el **aviso de conservación** deben coincidir exactamente con el envase real. Hoy están marcados `[verificar con la marca]`.
- Completá el **WhatsApp**, el **precio** y confirmá las **direcciones** de los puntos de venta (hay categorías y una dirección marcadas `[verificar]`).
- La marca, el logo, las fotos y los logos de los comercios pertenecen a sus respectivos dueños. Confirmá que podés usarlos.

## 🗺️ Próximos pasos

- [ ] Capítulos 03 a 08 con el mismo sistema de capas
- [ ] Integrar y restilizar "Dónde comprar"
- [ ] Cierre con botón de WhatsApp
- [ ] Versión móvil afinada en un celular real
- [ ] Bolsa en más ángulos o secuencia de video

## 👤 Autor

Hecho con 🐂 por **[Nicolás Rizza](https://github.com/RizzaNicolasMatias)** en San Miguel de Tucumán.

---

<div align="center">

*Un solo producto. Todo el foco.*

</div>
