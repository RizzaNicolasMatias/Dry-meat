export interface NutritionHexagonItem {
  id: string;
  label: string;
  numericValue: number;
  decimals: number;
  unit: string;
  displayValue: string;
  isPrimary?: boolean;
}

export interface CameraTransform {
  /** Factor de zoom (1 = tamaño original). Limitado automáticamente por CAMERA_CONFIG.maxScaleLimit */
  scale: number;
  /** Punto de anclaje del zoom sobre la foto (ej. "50% 28%" enfoca el logo superior del pack) */
  origin: string;
  /** Desplazamiento horizontal en porcentaje del contenedor (-25 mueve a la izquierda, 25 a la derecha) */
  xPercent: number;
  /** Desplazamiento vertical en porcentaje del contenedor */
  yPercent: number;
  /** Inclinación sutil 2.5D en eje X (grados) */
  rotateX: number;
  /** Inclinación sutil 2.5D en eje Y (grados) */
  rotateY: number;
}

export interface ChapterCameraConfig {
  id: string;
  chapterNumber: number;
  comment: string;
  bgColor: string;
  glowColor: string;
  desktop: CameraTransform;
  mobile: CameraTransform;
}

export interface StoreBranch {
  id: string;
  address: string;
  zone: string;
  /** Ciudad/Provincia para armar el query preciso hacia Google Maps */
  cityProvince: string;
  verifyNote?: string;
}

export interface PartnerStore {
  id: string;
  name: string;
  /** Categoría unificada ("Gimnasio" incluye gimnasios y centros de entrenamiento) */
  category: "Gimnasio" | "Almacén Gourmet" | "Drugstore" | "Dietética / Nutrición" | "Comercio Aliado";
  categoryNeedsVerify?: boolean;
  logoFilename: string;
  branches: StoreBranch[];
}

/* ============================================================================
   1. CONFIGURACIÓN GENERAL E INTERRUPTORES MAESTROS
   ============================================================================ */
export const SITE_SETTINGS = {
  /**
   * INTERRUPTOR DE ETIQUETAS DE VERIFICACIÓN:
   * - true: Muestra los avisos [verificar] y [verificar con la marca] en la web.
   * - false: Oculta automáticamente todos los avisos [verificar] para publicar en producción.
   */
  showVerifyTags: true,

  /**
   * INTERRUPTOR DE DATOS NUTRICIONALES DEL PACK:
   * - "notes": Usa los valores de tus notas (90 kcal, 16 g proteína, 0 g carbohidratos, 1,95 g grasas).
   * - "photo": Usa los valores leídos en la foto adjunta (99 kcal, 17 g proteína, 0 g carbs, 3,5 g grasas).
   */
  activeNutritionSet: "notes" as "notes" | "photo",

  /**
   * Indica si los datos nutricionales aún requieren confirmación de la marca.
   * Si showVerifyTags es true y nutritionNeedsVerification es true, muestra "[verificar con la marca]".
   */
  nutritionNeedsVerification: true,

  /**
   * Si más adelante consigues el PNG recortado sin fondo (/public/images/pack-cutout.png),
   * cambia esto a true para usar el recorte transparente.
   */
  useCutoutImage: false,

  /**
   * Técnica B preparada: cambia a true cuando tengas los frames en /public/frames/frame_0001.webp
   */
  useCanvasSequence: false,
  canvasFrameCount: 72,
};

/* ============================================================================
   2. DATOS DE MARCA, CONTACTO Y PRODUCTO ÚNICO
   ============================================================================ */
export const BRAND_CONTENT = {
  name: "DRY•MEAT",
  legalOrSubtitle: "Snack Proteico de Carne Vacuna",
  flavor: "Sabor Clásico",
  netWeight: "30 g",
  instagramHandle: "@drymeat.arg",
  instagramUrl: "https://www.instagram.com/drymeat.arg/",
  whatsappNumber: "[COMPLETAR]",
  whatsappDisplay: "[COMPLETAR: +54 9 381 ...]",
  priceDisplay: "[COMPLETAR: $ Precio]",
  whatsappPrefilledMessage:
    "¡Hola DRY•MEAT! Vi la presentación web del Snack Proteico Sabor Clásico (30 g) y quiero consultar precio y puntos de venta / pedido directo.",
  assets: {
    logo: "/images/logo.png",
    packHero: "/images/pack-hero.png",
    packCutout: "/images/pack-cutout.png",
  },
  palette: {
    obsidian: "#120808",
    crimsonGlow: "#3D0C0A",
    terracotta: "#BC5442",
    cream: "#F7EFE2",
    charcoal: "#1B1B19",
    gold: "#C9A24A",
    argentinaBlue: "#75AADB",
  },
};

/* ============================================================================
   3. LOS DOS JUEGOS DE VALORES NUTRICIONALES (CON INTERRUPTOR)
   ============================================================================ */
export const NUTRITION_SETS: Record<"notes" | "photo", NutritionHexagonItem[]> = {
  // Juego 1: Valores indicados en las notas del proyecto
  notes: [
    {
      id: "kcal",
      label: "kcal",
      numericValue: 90,
      decimals: 0,
      unit: "",
      displayValue: "90",
    },
    {
      id: "proteina",
      label: "PROTEÍNA",
      numericValue: 16,
      decimals: 0,
      unit: "g",
      displayValue: "16g",
      isPrimary: true,
    },
    {
      id: "carbs",
      label: "carbohidratos",
      numericValue: 0,
      decimals: 0,
      unit: "g",
      displayValue: "0g",
    },
    {
      id: "grasas",
      label: "grasas",
      numericValue: 1.95,
      decimals: 2,
      unit: "g",
      displayValue: "1,95g",
    },
  ],

  // Juego 2: Valores impresos en la foto adjunta pack-hero.png
  photo: [
    {
      id: "kcal",
      label: "kcal",
      numericValue: 99,
      decimals: 0,
      unit: "",
      displayValue: "99",
    },
    {
      id: "proteina",
      label: "PROTEÍNA",
      numericValue: 17,
      decimals: 0,
      unit: "g",
      displayValue: "17g",
      isPrimary: true,
    },
    {
      id: "carbs",
      label: "carbs",
      numericValue: 0,
      decimals: 0,
      unit: "g",
      displayValue: "0g",
    },
    {
      id: "grasas",
      label: "grasas",
      numericValue: 3.5,
      decimals: 1,
      unit: "g",
      displayValue: "3,5g",
    },
  ],
};

export function getActiveNutrition(): NutritionHexagonItem[] {
  return NUTRITION_SETS[SITE_SETTINGS.activeNutritionSet];
}

/* ============================================================================
   4. POSICIÓN DE LOS HEXÁGONOS DENTRO DEL CONTENEDOR DE LA FOTO
   ============================================================================
   Al ser hijos del mismo contenedor transformado que pack-hero.png, estas
   coordenadas porcentuales (top, left, width, height) quedan clavadas sobre
   la zona de los hexágonos del pack sin importar el zoom o tamaño de pantalla.
   ============================================================================ */
export const HEXAGON_OVERLAY_BOX = {
  /** Distancia desde el borde superior de la foto pack-hero.png (en %) */
  topPercent: 56.5,
  /** Distancia desde el borde izquierdo de la foto pack-hero.png (en %) */
  leftPercent: 22.5,
  /** Ancho total que ocupa la fila de los 4 hexágonos sobre la foto (en %) */
  widthPercent: 55.0,
  /** Alto de la fila de hexágonos sobre la foto (en %) */
  heightPercent: 10.5,
};

/* ============================================================================
   5. CONFIGURACIÓN ÚNICA DE CÁMARA VIRTUAL (ZOOM, ORIGIN, X, Y POR CAPÍTULO)
   ============================================================================
   Aquí puedes ajustar cómo encuadra la cámara la foto pack-hero.png en cada
   capítulo viendo el resultado en el navegador.
   ============================================================================ */
export const CAMERA_CONFIG = {
  /**
   * Límite máximo de zoom permitido.
   * - Con una imagen de 1200x1800 px o más, déjalo en 2.3.
   * - Si tu imagen pack-hero.png es pequeña y se pixela en los zooms cercanos,
   *   bájalo a 1.65 o 1.5 y todos los capítulos respetarán ese tope automáticamente.
   */
  maxScaleLimit: 2.3,
};

export const CAMERA_KEYFRAMES: Record<string, ChapterCameraConfig> = {
  // CAPÍTULO 1 — HERO: Plano entero central del envase emergiendo de la oscuridad
  chapter1_hero: {
    id: "chapter1_hero",
    chapterNumber: 1,
    comment: "Cap 1 (Hero): Plano general centrado de toda la bolsa negra",
    bgColor: "#120808",
    glowColor: "rgba(188, 84, 66, 0.28)",
    desktop: { scale: 1.0, origin: "50% 50%", xPercent: 0, yPercent: 2, rotateX: 2, rotateY: 0 },
    mobile: { scale: 0.96, origin: "50% 50%", xPercent: 0, yPercent: -10, rotateX: 0, rotateY: 0 },
  },

  // CAPÍTULO 2 — "100% CARNE VACUNA": Zoom al marco superior del pack (Toro + DRY MEAT)
  chapter2_beef: {
    id: "chapter2_beef",
    chapterNumber: 2,
    comment: "Cap 2 (100% Carne Vacuna): Zoom hacia el toro rojo y el título DRY MEAT del envase",
    bgColor: "#1B0706",
    glowColor: "rgba(188, 84, 66, 0.52)",
    desktop: { scale: 1.65, origin: "50% 30%", xPercent: 20, yPercent: 4, rotateX: 3, rotateY: -5 },
    mobile: { scale: 1.42, origin: "50% 30%", xPercent: 0, yPercent: -16, rotateX: 0, rotateY: 0 },
  },

  // CAPÍTULO 3 — "50% PROTEÍNA": Encuadre a la zona media ("SNACK PROTÉICO / SABOR CLÁSICO")
  chapter3_protein: {
    id: "chapter3_protein",
    chapterNumber: 3,
    comment: "Cap 3 (50% Proteína): Encuadre al centro de la bolsa mientras sube el contador 0-50%",
    bgColor: "#120808",
    glowColor: "rgba(188, 84, 66, 0.42)",
    desktop: { scale: 1.75, origin: "50% 47%", xPercent: -22, yPercent: 0, rotateX: -2, rotateY: 5 },
    mobile: { scale: 1.48, origin: "50% 47%", xPercent: 0, yPercent: -18, rotateX: 0, rotateY: 0 },
  },

  // CAPÍTULO 4 — LOS NÚMEROS: Macro a la fila de los 4 hexágonos nutricionales
  chapter4_hexagons: {
    id: "chapter4_hexagons",
    chapterNumber: 4,
    comment: "Cap 4 (Los Números): Zoom directo a la fila de los 4 hexágonos rojos del pack",
    bgColor: "#140909",
    glowColor: "rgba(201, 162, 74, 0.35)",
    desktop: { scale: 2.1, origin: "50% 61%", xPercent: 18, yPercent: -4, rotateX: 2, rotateY: -3 },
    mobile: { scale: 1.68, origin: "50% 61%", xPercent: 0, yPercent: -18, rotateX: 0, rotateY: 0 },
  },

  // CAPÍTULO 5 — "0% TACC": Corte brusco a Modo Crema (#F7EFE2) y zoom al sello inferior derecho
  chapter5_tacc: {
    id: "chapter5_tacc",
    chapterNumber: 5,
    comment: "Cap 5 (0% TACC): Modo Crema y foco sobre el sello inferior derecho del pack",
    bgColor: "#F7EFE2",
    glowColor: "rgba(188, 84, 66, 0.22)",
    desktop: { scale: 2.2, origin: "75% 80%", xPercent: -20, yPercent: -6, rotateX: 0, rotateY: 4 },
    mobile: { scale: 1.65, origin: "72% 80%", xPercent: 0, yPercent: -18, rotateX: 0, rotateY: 0 },
  },

  // CAPÍTULO 6 — BCAA Y AMINOÁCIDOS: Zoom a la franja plateada/dorada de BCAA
  chapter6_bcaa: {
    id: "chapter6_bcaa",
    chapterNumber: 6,
    comment: "Cap 6 (BCAA): Encuadre sobre la franja horizontal 'FUENTE DE BCAA Y AMINOÁCIDOS ESENCIALES'",
    bgColor: "#120808",
    glowColor: "rgba(201, 162, 74, 0.45)",
    desktop: { scale: 2.05, origin: "50% 71%", xPercent: 20, yPercent: -4, rotateX: 3, rotateY: -4 },
    mobile: { scale: 1.62, origin: "50% 71%", xPercent: 0, yPercent: -18, rotateX: 0, rotateY: 0 },
  },

  // CAPÍTULO 7 — HECHO EN ARGENTINA: Zoom a la franja inferior izquierda con la bandera
  chapter7_argentina: {
    id: "chapter7_argentina",
    chapterNumber: 7,
    comment: "Cap 7 (Hecho en Argentina): Zoom al pie izquierdo con la bandera argentina",
    bgColor: "#0E1318",
    glowColor: "rgba(117, 170, 219, 0.36)",
    desktop: { scale: 2.25, origin: "32% 88%", xPercent: -18, yPercent: -8, rotateX: 2, rotateY: 4 },
    mobile: { scale: 1.72, origin: "35% 88%", xPercent: 0, yPercent: -18, rotateX: 0, rotateY: 0 },
  },

  // CAPÍTULO 8 — "30 G EN TU BOLSILLO": Foco en CONT. NETO 30G y plano completo de portabilidad
  chapter8_pocket: {
    id: "chapter8_pocket",
    chapterNumber: 8,
    comment: "Cap 8 (30 g en tu bolsillo): Muestra el peso 30G y la escala compacta de la bolsa",
    bgColor: "#120808",
    glowColor: "rgba(188, 84, 66, 0.32)",
    desktop: { scale: 1.12, origin: "30% 78%", xPercent: -24, yPercent: 0, rotateX: 2, rotateY: 5 },
    mobile: { scale: 0.92, origin: "50% 50%", xPercent: 0, yPercent: -22, rotateX: 0, rotateY: 0 },
  },
};

/* ============================================================================
   6. TEXTOS DE LOS CAPÍTULOS (FIELES AL MATERIAL DE LA MARCA)
   ============================================================================ */
export const CHAPTERS_COPY = {
  chapter1: {
    eyebrow: "PRESENTACIÓN OFICIAL · @DRYMEAT.ARG",
    h1Title: "SNACK PROTEICO DE CARNE VACUNA",
    subtitle: "Sabor Clásico · Bolsa de 30 g",
    scrollHint: "Hacé scroll para explorar el pack",
  },
  chapter2: {
    tag: "CAPÍTULO 01 · ORIGEN",
    headline: "100% CARNE VACUNA",
    description:
      "Elaborado exclusivamente con carne vacuna seleccionada. Sabor Clásico en formato de 30 g listo para consumir.",
  },
  chapter3: {
    tag: "CAPÍTULO 02 · DENSIDAD NUTRICIONAL",
    counterTarget: 50,
    counterSuffix: "%",
    headline: "PROTEÍNA",
    description:
      "Concentración proteica real en cada bolsa de 30 g de carne vacuna deshidratada.",
  },
  chapter4: {
    tag: "CAPÍTULO 03 · DATOS DEL PACK (POR 30 G)",
    headline: "LOS NÚMEROS",
    verifyBadgeText: "[verificar con la marca]",
    conservationNotice: "UNA VEZ ABIERTO, CONSUMIR DENTRO DE LAS SIGUIENTES 24 HS.",
  },
  chapter5: {
    tag: "CAPÍTULO 04 · SELLO DEL ENVASE",
    /** Ajuste 2: SOLO "0% TACC", sin añadir "libre de gluten" ni otras leyendas extra */
    headline: "0% TACC",
  },
  chapter6: {
    tag: "CAPÍTULO 05 · PERFIL DE AMINOÁCIDOS",
    headline: "FUENTE DE BCAA Y AMINOÁCIDOS ESENCIALES",
    marqueeText: "FUENTE DE BCAA · AMINOÁCIDOS ESENCIALES · 100% CARNE VACUNA · SABOR CLÁSICO · ",
    description:
      "Aporte natural de aminoácidos de cadena ramificada (BCAA) y aminoácidos esenciales propios de la proteína vacuna.",
  },
  chapter7: {
    tag: "CAPÍTULO 06 · PRODUCCIÓN NACIONAL",
    headline: "HECHO EN ARGENTINA",
    description:
      "Tradición vacuna argentina llevada a un empaque técnico, compacto y diseñado para acompañarte todos los días.",
  },
  chapter8: {
    tag: "CAPÍTULO 07 · PORTABILIDAD",
    headline: "30 G EN TU BOLSILLO",
    description: "Un envase liviano y resistente que cabe en cualquier bolsillo o mochila.",
    moments: [
      {
        id: "gym",
        title: "Gimnasio",
        caption: "En tu bolso de entrenamiento, listo al terminar tu sesión.",
      },
      {
        id: "ruta",
        title: "Ruta",
        caption: "Formato práctico de 30 g para viajes largos en auto o moto.",
      },
      {
        id: "camping",
        title: "Camping",
        caption: "Mínimo peso y espacio en tu mochila de montaña o aire libre.",
      },
      {
        id: "oficina",
        title: "Oficina",
        caption: "Pausa práctica entre jornadas de trabajo o estudio.",
      },
    ],
  },
  chapter9: {
    tag: "CAPÍTULO 08 · PUNTOS DE VENTA OFICIALES",
    headline: "ENCONTRALO EN TU GYM",
    subtitle:
      "Conseguí DRY•MEAT en gimnasios, centros de entrenamiento, almacenes gourmet y tiendas aliadas.",
    availabilityNote: "Consultá disponibilidad en cada local",
  },
  chapter10: {
    tag: "CAPÍTULO FINAL · CONTACTO DIRECTO",
    headline: "PEDILO POR WHATSAPP",
    subtitle: "Snack Proteico de Carne Vacuna · Sabor Clásico · 30 g",
  },
};

/* ============================================================================
   7. PUNTOS DE VENTA OFICIALES (12 COMERCIOS ALIADOS / 24 SUCURSALES)
   ============================================================================
   Nota: "Gimnasio" y "Gimnasio/Entrenamiento" están unidos bajo "Gimnasio".
   ============================================================================ */
export const PARTNER_STORES: PartnerStore[] = [
  {
    id: "octaviano",
    name: "Octaviano",
    category: "Gimnasio",
    logoFilename: "/images/stores/octaviano.png",
    branches: [
      {
        id: "octaviano-1",
        address: "Pringles 1650",
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
      },
      {
        id: "octaviano-2",
        address: "Rubén Darío 492",
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
      },
      {
        id: "octaviano-3",
        address: "Higueritas 2099",
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
      },
      {
        id: "octaviano-4",
        address: "9 de Julio 373 (Barrio Sur)",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
      {
        id: "octaviano-5",
        address: "Santa Fe 481 (Barrio Norte)",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
      {
        id: "octaviano-6",
        address: "San Martín 605 (Barrio Norte)",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
    ],
  },
  {
    id: "jockey-gym",
    name: "Jockey Gym",
    category: "Gimnasio",
    logoFilename: "/images/stores/jockey-gym.png",
    branches: [
      {
        id: "jockey-1",
        address: "Av. Perón 1790",
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
      },
      {
        id: "jockey-2",
        address: "Shopping Solar del Cerro",
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
      },
      {
        id: "jockey-3",
        address: "Av. Belgrano 4500",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
      {
        id: "jockey-4",
        address: "Av. Soldati 380, Hotel Catalinas",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
      {
        id: "jockey-5",
        address: "San Martín 451 (Microcentro)",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
      {
        id: "jockey-6",
        address: "Muñecas 692 (Barrio Norte)",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
      {
        id: "jockey-7",
        address: "Buenos Aires 632 (Barrio Sur)",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
    ],
  },
  {
    id: "la-salumeria",
    name: "La Salumería",
    category: "Almacén Gourmet",
    categoryNeedsVerify: true,
    logoFilename: "/images/stores/la-salumeria.png",
    branches: [
      {
        id: "salumeria-1",
        address: "Frías Silva 778",
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
      },
      {
        id: "salumeria-2",
        address: "Lamadrid 1121",
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
      },
    ],
  },
  {
    id: "hammer",
    name: "Hammer",
    category: "Gimnasio",
    logoFilename: "/images/stores/hammer.png",
    branches: [
      {
        id: "hammer-1",
        address: "Av. Aconquija 2044",
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
      },
    ],
  },
  {
    id: "vitali",
    name: "Vitali",
    category: "Gimnasio",
    categoryNeedsVerify: true,
    logoFilename: "/images/stores/vitali.png",
    branches: [
      {
        id: "vitali-1",
        address: "Santiago del Estero 815",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
    ],
  },
  {
    id: "rc-gym",
    name: "RC Gym",
    category: "Gimnasio",
    logoFilename: "/images/stores/rc-gym.png",
    branches: [
      {
        id: "rc-gym-1",
        address: "Av. Aconquija 2122",
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
      },
    ],
  },
  {
    id: "sofia-madrid",
    name: "Sofía Madrid",
    category: "Comercio Aliado",
    categoryNeedsVerify: true,
    logoFilename: "/images/stores/sofia-madrid.png",
    branches: [
      {
        id: "sofia-madrid-1",
        address: "Salas y Valdés 1790",
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
      },
    ],
  },
  {
    id: "tmr-training-center",
    name: "TMR Training Center",
    category: "Gimnasio",
    logoFilename: "/images/stores/tmr-training-center.png",
    branches: [
      {
        id: "tmr-1",
        address: "Juan Fanzolato 400",
        zone: "Cevil Redondo",
        cityProvince: "Cevil Redondo, Tucumán",
      },
    ],
  },
  {
    id: "allegra-open-drugstore",
    name: "Allegra Open Drugstore",
    category: "Drugstore",
    logoFilename: "/images/stores/allegra-open-drugstore.png",
    branches: [
      {
        id: "allegra-1",
        address: "Av. Perón 1600",
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
      },
    ],
  },
  {
    id: "tuluka",
    name: "Tuluka",
    category: "Gimnasio",
    categoryNeedsVerify: true,
    logoFilename: "/images/stores/tuluka.png",
    branches: [
      {
        id: "tuluka-1",
        address: "Av. Perón 1710",
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
      },
    ],
  },
  {
    id: "nutriendo-raices",
    name: "Nutriendo Raíces",
    category: "Dietética / Nutrición",
    categoryNeedsVerify: true,
    logoFilename: "/images/stores/nutriendo-raices.png",
    branches: [
      {
        id: "nutriendo-1",
        address: 'Av. Perón 1900, "SINAG 1323"',
        zone: "Yerba Buena",
        cityProvince: "Yerba Buena, Tucumán",
        verifyNote: 'verificar qué significa "SINAG 1323"',
      },
    ],
  },
  {
    id: "el-almacen-gourmet",
    name: "El Almacén Gourmet",
    category: "Almacén Gourmet",
    categoryNeedsVerify: true,
    logoFilename: "/images/stores/el-almacen-gourmet.png",
    branches: [
      {
        id: "almacen-gourmet-1",
        address: "Jujuy 494",
        zone: "Santiago del Estero",
        cityProvince: "Santiago del Estero, Argentina",
        verifyNote:
          "verificar si es la provincia de Santiago del Estero o San Miguel de Tucumán",
      },
    ],
  },
];