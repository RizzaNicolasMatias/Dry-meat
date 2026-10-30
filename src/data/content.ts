export interface NutritionHexagonItem {
  id: string;
  label: string;
  numericValue: number;
  decimals: number;
  unit: string;
  displayValue: string;
  isPrimary?: boolean;
}

export interface ProductPose {
  /** Desplazamiento horizontal en vw (-30 = izquierda, 0 = centro, 26 = derecha) */
  x: number;
  /** Desplazamiento vertical en vh */
  y: number;
  /** Rotación en grados (±12°) */
  rotate: number;
  /** Escala del PNG (1 = 74vh en desktop / 62vh en mobile) */
  scale: number;
  /** Leve inclinación de perspectiva X (grados) */
  rotateX: number;
  /** Leve inclinación de perspectiva Y (grados) */
  rotateY: number;
}

export interface SectionProductPath {
  sectionNumber: number;
  id: string;
  name: string;
  desktop: ProductPose;
  mobile: ProductPose;
}

export interface DetailCalloutConfig {
  id: string;
  sectionNumber: number;
  /** Coordenada X (%) sobre el PNG donde nace el punto de la línea */
  anchorX: number;
  /** Coordenada Y (%) sobre el PNG donde nace el punto de la línea */
  anchorY: number;
  /** Coordenada X (%) hacia donde se extiende el rótulo técnico */
  labelX: number;
  /** Coordenada Y (%) hacia donde se extiende el rótulo técnico */
  labelY: number;
  code: string;
  label: string;
}

export interface StoreBranch {
  id: string;
  /** Dirección limpia (sin paréntesis ni comillas) para Google Maps */
  address: string;
  /** Barrio o referencia opcional para mostrar en pantalla */
  neighborhood?: string;
  zone: string;
  cityProvince: string;
  verifyNote?: string;
}

export interface PartnerStore {
  id: string;
  name: string;
  category:
    | "Gimnasio"
    | "Almacén Gourmet"
    | "Drugstore"
    | "Dietética / Nutrición"
    | "Comercio Aliado";
  categoryNeedsVerify?: boolean;
  logoFilename: string;
  branches: StoreBranch[];
}

/* ============================================================================
   1. INTERRUPTORES MAESTROS
   ============================================================================ */
export const SITE_SETTINGS = {
  /** Oculta todos los [verificar] y [COMPLETAR] cuando pasa a false */
  showVerifyTags: true,
  /** "notes" (90 kcal, 16g, 0g, 1,95g) | "photo" (99 kcal, 17g, 0g, 3,5g) */
  activeNutritionSet: "notes" as "notes" | "photo",
  nutritionNeedsVerification: true,
  /** Índice de la frase gancho activa del Hero (0, 1 o 2) */
  activeHeroHookIndex: 0,
  /**
   * Proporción ANCHO / ALTO de pack-cutout.png (ej. 1000x1500 px => "2 / 3").
   * Si no coincide con tu PNG, las líneas de detalle quedan desalineadas.
   */
  packAspect: "731 / 1080",
  /**
   * URL pública del sitio (para Open Graph y datos estructurados).
   * Cuando publiques, ponla en Vercel como variable NEXT_PUBLIC_SITE_URL.
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

/* ============================================================================
   2. LAS 3 FRASES GANCHO PROPUESTAS PARA EL HERO (SOLO CLAIMS DE LA MARCA)
   ============================================================================ */
export const HERO_HOOK_OPTIONS = [
  {
    id: "opcion-1",
    text: "SNACK PROTEICO DE CARNE VACUNA · SABOR CLÁSICO · 30 G",
  },
  {
    id: "opcion-2",
    text: "100% CARNE VACUNA · 50% PROTEÍNA · BOLSA DE 30 G",
  },
  {
    id: "opcion-3",
    text: "100% CARNE VACUNA · 50% PROTEÍNA · 0% TACC · HECHO EN ARGENTINA",
  },
];

/* ============================================================================
   3. DATOS DE LA MARCA Y PALETA CERRADA (6 COLORES EXCLUSIVOS)
   ============================================================================ */
export const BRAND_CONTENT = {
  name: "DRY•MEAT",
  subtitle: "SNACK PROTEICO DE CARNE VACUNA",
  flavor: "SABOR CLÁSICO",
  netWeight: "30 G",
  instagramHandle: "@drymeat.arg",
  instagramUrl: "https://www.instagram.com/drymeat.arg/",
  whatsappNumber: "[COMPLETAR]",
  whatsappDisplay: "[COMPLETAR]",
  priceDisplay: "[COMPLETAR]",
  whatsappPrefilledMessage:
    "¡Hola DRY•MEAT! Quiero consultar por el Snack Proteico de Carne Vacuna Sabor Clásico (30 g).",
  assets: {
    logo: "/images/logo.png",
    packCutout: "/images/pack-cutout.png",
    packHeroReference: "/images/pack-hero.png",
  },
  palette: {
    obsidian: "#120808",
    terracotta: "#BC5442",
    cream: "#F7EFE2",
    charcoal: "#1B1B19",
    gold: "#C9A24A",
    argentina: "#75AADB",
  },
};

/* ============================================================================
   4. POSES DE LA BOLSA POR SECCIÓN (PRODUCT_PATH)
   ============================================================================
   Controladas por el timeline maestro de GSAP ScrollTrigger con scrub.
   Ajustables en vivo desde el Panel de Calibración en desarrollo.
   ============================================================================ */
export const PRODUCT_PATH: Record<string, SectionProductPath> = {
  section1_hero: {
    sectionNumber: 1,
    id: "section1_hero",
    name: "01. HERO (Aterrizaje Central)",
    desktop: { x: 0, y: 3, rotate: -2, scale: 1.0, rotateX: 4, rotateY: -4 },
    mobile: { x: 0, y: 4, rotate: -2, scale: 0.95, rotateX: 0, rotateY: 0 },
  },
  section2_beef: {
    sectionNumber: 2,
    id: "section2_beef",
    name: "02. 100% CARNE VACUNA (Derecha Inclinada)",
    desktop: { x: 22, y: 2, rotate: -9, scale: 1.06, rotateX: 5, rotateY: -10 },
    mobile: { x: 0, y: 10, rotate: -6, scale: 0.92, rotateX: 0, rotateY: 0 },
  },
  section3_protein: {
    sectionNumber: 3,
    id: "section3_protein",
    name: "03. 50% PROTEÍNA (Solapando el 50)",
    desktop: { x: -16, y: 0, rotate: 8, scale: 1.05, rotateX: -3, rotateY: 8 },
    mobile: { x: 0, y: 8, rotate: 5, scale: 0.92, rotateX: 0, rotateY: 0 },
  },
  section4_numbers: {
    sectionNumber: 4,
    id: "section4_numbers",
    name: "04. LOS NÚMEROS (Centro con Hexágonos)",
    desktop: { x: 0, y: 0, rotate: 0, scale: 0.98, rotateX: 2, rotateY: 0 },
    mobile: { x: 0, y: 6, rotate: 0, scale: 0.88, rotateX: 0, rotateY: 0 },
  },
  section5_tacc: {
    sectionNumber: 5,
    id: "section5_tacc",
    name: "05. 0% TACC (Inclinada Izquierda)",
    desktop: { x: -22, y: 2, rotate: 11, scale: 1.04, rotateX: 4, rotateY: 9 },
    mobile: { x: 0, y: 10, rotate: 7, scale: 0.9, rotateX: 0, rotateY: 0 },
  },
  section6_bcaa: {
    sectionNumber: 6,
    id: "section6_bcaa",
    name: "06. BCAA (Detrás de Banda Dorada)",
    desktop: { x: 18, y: 0, rotate: -7, scale: 1.04, rotateX: 3, rotateY: -7 },
    mobile: { x: 0, y: 8, rotate: -5, scale: 0.9, rotateX: 0, rotateY: 0 },
  },
  section7_argentina: {
    sectionNumber: 7,
    id: "section7_argentina",
    name: "07. HECHO EN ARGENTINA",
    desktop: { x: -18, y: 2, rotate: 6, scale: 1.03, rotateX: 3, rotateY: 6 },
    mobile: { x: 0, y: 8, rotate: 4, scale: 0.9, rotateX: 0, rotateY: 0 },
  },
  section8_30g: {
    sectionNumber: 8,
    id: "section8_30g",
    name: "08. 30 G (Escala Bolsillo)",
    desktop: { x: 20, y: 6, rotate: -8, scale: 0.52, rotateX: 2, rotateY: -5 },
    mobile: { x: 0, y: 8, rotate: -5, scale: 0.55, rotateX: 0, rotateY: 0 },
  },
  section9_stores: {
    sectionNumber: 9,
    id: "section9_stores",
    name: "09. DÓNDE COMPRAR (Retirada Superior)",
    desktop: { x: 36, y: -32, rotate: 12, scale: 0.45, rotateX: 0, rotateY: 0 },
    mobile: { x: 0, y: -42, rotate: 6, scale: 0.4, rotateX: 0, rotateY: 0 },
  },
  section10_close: {
    sectionNumber: 10,
    id: "section10_close",
    name: "10. CIERRE (Primer Plano Final)",
    desktop: { x: 22, y: 4, rotate: -6, scale: 1.12, rotateX: 4, rotateY: -8 },
    mobile: { x: 0, y: 10, rotate: -4, scale: 0.95, rotateX: 0, rotateY: 0 },
  },
};

/* ============================================================================
   5. LÍNEAS TÉCNICAS DE DETALLE SOBRE EL PNG (EN PORCENTAJES)
   ============================================================================ */
export const DETAIL_CALLOUTS: Record<string, DetailCalloutConfig> = {
  callout_bull: {
    id: "callout_bull",
    sectionNumber: 2,
    anchorX: 38,
    anchorY: 31,
    labelX: -18,
    labelY: 22,
    code: "REF · 01",
    label: "EMBLEMA TORO · 100% CARNE VACUNA",
  },
  callout_protein: {
    id: "callout_protein",
    sectionNumber: 3,
    anchorX: 45,
    anchorY: 61,
    labelX: 112,
    labelY: 54,
    code: "REF · 02",
    label: "50% PROTEÍNA · POR BOLSA",
  },
  callout_tacc: {
    id: "callout_tacc",
    sectionNumber: 5,
    anchorX: 77,
    anchorY: 80,
    labelX: 115,
    labelY: 76,
    code: "REF · 03",
    label: "0% TACC",
  },
  callout_argentina: {
    id: "callout_argentina",
    sectionNumber: 7,
    anchorX: 32,
    anchorY: 88,
    labelX: -16,
    labelY: 86,
    code: "REF · 04",
    label: "HECHO EN ARGENTINA",
  },
};

/* ============================================================================
   6. DATOS NUTRICIONALES CON INTERRUPTOR
   ============================================================================ */
export const NUTRITION_SETS: Record<"notes" | "photo", NutritionHexagonItem[]> = {
  notes: [
    { id: "kcal", label: "KCAL", numericValue: 90, decimals: 0, unit: "", displayValue: "90" },
    {
      id: "proteina",
      label: "PROTEÍNA",
      numericValue: 16,
      decimals: 0,
      unit: "G",
      displayValue: "16G",
      isPrimary: true,
    },
    { id: "carbs", label: "CARBOHIDRATOS", numericValue: 0, decimals: 0, unit: "G", displayValue: "0G" },
    { id: "grasas", label: "GRASAS", numericValue: 1.95, decimals: 2, unit: "G", displayValue: "1,95G" },
  ],
  photo: [
    { id: "kcal", label: "KCAL", numericValue: 99, decimals: 0, unit: "", displayValue: "99" },
    {
      id: "proteina",
      label: "PROTEÍNA",
      numericValue: 17,
      decimals: 0,
      unit: "G",
      displayValue: "17G",
      isPrimary: true,
    },
    { id: "carbs", label: "CARBS", numericValue: 0, decimals: 0, unit: "G", displayValue: "0G" },
    { id: "grasas", label: "GRASAS", numericValue: 3.5, decimals: 1, unit: "G", displayValue: "3,5G" },
  ],
};

export function getActiveNutrition(): NutritionHexagonItem[] {
  return NUTRITION_SETS[SITE_SETTINGS.activeNutritionSet];
}

/* ============================================================================
   7. TEXTOS DE SECCIONES (ESTRICTAMENTE CLAIMS DEL MATERIAL DE LA MARCA)
   ============================================================================ */
export const CHAPTERS_COPY = {
  section1: {
    code: "CAP · 01 // PRESENTACIÓN",
    behindWordTop: "DRY",
    behindWordBottom: "MEAT",
    scrollLabel: "SCROLL PARA CORTAR LA ESCENA",
  },
  section2: {
    code: "CAP · 02 // ORIGEN",
    giantNumber: "100%",
    titleMain: "CARNE",
    titleItalic: "VACUNA",
    metaLine: "SNACK PROTEICO DE CARNE VACUNA · SABOR CLÁSICO · 30 G",
  },
  section3: {
    code: "CAP · 03 // PROTEÍNA",
    giantNumber: "50",
    unit: "%",
    titleMain: "PROTEÍNA",
    metaLine: "CONT. NETO: 30 G · SABOR CLÁSICO",
  },
  section4: {
    code: "CAP · 04 // DATOS DEL PACK",
    titleMain: "LOS",
    titleItalic: "NÚMEROS",
    verifyBadge: "[verificar con la marca]",
    // [verificar con la marca] Debe coincidir EXACTAMENTE con el envase real antes de mostrarse.
    notice: "UNA VEZ ABIERTO, CONSUMIR DENTRO DE LAS SIGUIENTES 24 HS.",
  },
  section5: {
    code: "CAP · 05 // SELLO",
    headline: "0% TACC",
  },
  section6: {
    code: "CAP · 06 // AMINOÁCIDOS",
    bandText: "FUENTE DE BCAA Y AMINOÁCIDOS ESENCIALES · ",
    headline: "FUENTE DE BCAA Y AMINOÁCIDOS ESENCIALES",
  },
  section7: {
    code: "CAP · 07 // ORIGEN NACIONAL",
    titleMain: "HECHO EN",
    titleItalic: "ARGENTINA",
  },
  section8: {
    code: "CAP · 08 // FORMATO",
    giantWeight: "30 G",
    subtitle: "EN TU BOLSILLO",
    moments: [
      { id: "gym", label: "GIMNASIO" },
      { id: "ruta", label: "RUTA" },
      { id: "camping", label: "CAMPING" },
      { id: "oficina", label: "OFICINA" },
    ],
  },
  section9: {
    code: "CAP · 09 // COMERCIOS ALIADOS",
    titleMain: "ENCONTRALO",
    titleItalic: "EN TU GYM",
    subtitle:
      "Conseguí DRY•MEAT en gimnasios, centros de entrenamiento, almacenes gourmet y tiendas aliadas.",
    availabilityNote: "Consultá disponibilidad en cada local",
  },
  section10: {
    code: "CAP · 10 // CONTACTO DIRECTO",
    titleMain: "PEDILO POR",
    titleItalic: "WHATSAPP",
    subtitle: "SNACK PROTEICO DE CARNE VACUNA · SABOR CLÁSICO · 30 G",
  },
};

/* ============================================================================
   8. PUNTOS DE VENTA (DIRECCIONES LIMPIAS SIN PARÉNTESIS NI COMILLAS)
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
        address: "9 de Julio 373",
        neighborhood: "Barrio Sur",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
      {
        id: "octaviano-5",
        address: "Santa Fe 481",
        neighborhood: "Barrio Norte",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
      {
        id: "octaviano-6",
        address: "San Martín 605",
        neighborhood: "Barrio Norte",
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
        address: "Av. Soldati 380",
        neighborhood: "Hotel Catalinas",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
      {
        id: "jockey-5",
        address: "San Martín 451",
        neighborhood: "Microcentro",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
      {
        id: "jockey-6",
        address: "Muñecas 692",
        neighborhood: "Barrio Norte",
        zone: "San Miguel de Tucumán",
        cityProvince: "San Miguel de Tucumán, Tucumán",
      },
      {
        id: "jockey-7",
        address: "Buenos Aires 632",
        neighborhood: "Barrio Sur",
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
        address: "Av. Perón 1900",
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
        cityProvince: "Santiago del Estero, Santiago del Estero",
        verifyNote:
          "verificar si es la provincia de Santiago del Estero o San Miguel de Tucumán",
      },
    ],
  },
];