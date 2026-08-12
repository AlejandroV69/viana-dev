import chocoImg from '../assets/choco_inventory.png';
import tamanacoImg from '../assets/tamanaco.jpg';
import manosDeVueltaImg from '../assets/manos_de_vuelta.png';
import thorgurtImg from '../assets/thorgurt_admin.png';
import humanitasErpImg from '../assets/humanitas_erp_modal.png';
import robotArmImg from '../assets/robot_arm.png';

export const projectsData = [
  {
    id: 'robot-arm-simulator',
    title: 'Simulador de Brazo Robótico 2D (3DOF)',
    description: 'Simulador interactivo de brazo robótico con tres grados de libertad desarrollado con HTML5 Canvas y matemáticas trigonométricas para cinemática directa. Incluye controles de precisión y alternancia de temas claro/oscuro.',
    category: 'Interactive / Physics Math',
    tags: ['HTML5 Canvas', 'JavaScript (ES6+)', 'Trigonometría', 'Formulas Matemáticas', 'Responsive UI'],
    image: robotArmImg,
    featured: true,
    github: 'https://github.com/AlejandroV69',
    liveUrl: 'https://brazo-robot-three.vercel.app/',
    metrics: ['Cinemática Directa (3DOF)', 'Matemáticas Vectoriales']
  },
  {
    id: 'humanitas-erp',
    title: 'Humanitas ERP - Módulo de Registro de Proveedores',
    description: 'Módulo Full-Stack para el sistema ERP empresarial de Humanitas. Incluye modales dinámicas de registro con formularios complejos, validaciones por tipo de persona/cédula, estatus y gestión de datos.',
    category: 'Fullstack / Enterprise ERP',
    tags: ['Full-Stack', 'ERP Enterprise', 'React / Form UX', 'Modal Architecture', 'SQL / REST'],
    image: humanitasErpImg,
    featured: true,
    github: 'https://github.com/AlejandroV69',
    liveUrl: 'https://github.com/AlejandroV69',
    metrics: ['Sistema ERP Empresarial', 'Formularios Complejos & Modales']
  },
  {
    id: 'thorgurt-admin',
    title: 'Thörgurt Admin - Panel de Control & Gestión de Stock',
    description: 'Sistema administrativo integral para Thörgurt. Permite el control de inventario de sabores en tiempo real, verificación manual de pagos, estadísticas de ventas históricas y copia rápida de disponibilidad.',
    category: 'Fullstack / Admin Dashboard',
    tags: ['React', 'Tailwind CSS', 'Supabase', 'Dashboard UI', 'Stock Management'],
    image: thorgurtImg,
    featured: true,
    github: 'https://github.com/AlejandroV69',
    liveUrl: 'https://smart-yogu.vercel.app/',
    metrics: ['Gestión de Stock en Tiempo Real', 'Control de Ventas & Pagos']
  },
  {
    id: 'tamanaco-satisfaccion',
    title: 'Hotel Tamanaco - Sistema de Satisfacción',
    description: 'Sistema premium de encuestas e inteligencia de servicio para clientes con dashboard administrativo, selector telefónico internacional y autenticación segura con Supabase.',
    category: 'Fullstack / Enterprise',
    tags: ['React 18', 'Vite', 'Tailwind CSS', 'Supabase Auth', 'React Router DOM v6'],
    image: tamanacoImg,
    featured: true,
    github: 'https://github.com/AlejandroV69/sistema-satisfaccion-tamanaco',
    liveUrl: 'https://sistema-satisfaccion-tamanaco-edua09fe3.vercel.app/',
    metrics: ['En Vivo', 'Selector Global Telefónico', 'Panel Admin']
  },
  {
    id: 'manos-de-vuelta',
    title: 'Manos de Vuelta - Plataforma Solidaria',
    description: 'Plataforma comunitaria en Venezuela para solicitar y donar insumos médicos y alimentos. Conexión directa por API de WhatsApp y backend en tiempo real.',
    category: 'Fullstack / Social',
    tags: ['React', 'Supabase Realtime', 'Tailwind CSS', 'WhatsApp API'],
    image: manosDeVueltaImg,
    featured: true,
    github: 'https://github.com/AlejandroV69/Manos_de_Vuelta',
    liveUrl: 'https://manos-de-vuelta.vercel.app',
    metrics: ['Impacto Social', 'WhatsApp Direct', 'Supabase DB']
  },
  {
    id: 'choco-inventory',
    title: 'ChocoInventory - Gestión & Predicción',
    description: 'Sistema inteligente de inventarios diseñado para PYMEs. Permite control de stock en tiempo real, alertas automáticas y algoritmos simples para predecir la demanda futura.',
    category: 'Frontend / Algorithms',
    tags: ['JavaScript (ES6+)', 'Chart.js', 'CSS3 Moderno', 'LocalStorage'],
    image: chocoImg,
    featured: false,
    github: 'https://github.com/AlejandroV69/PROTOTIPO-DE-SISTEMA-INTELIGENTE-DE-GESTI-N-Y-PREDICCI-N-DE-INVESTARIOS',
    liveUrl: 'https://prototipo-de-sistema-inteligente-de.vercel.app/',
    metrics: ['Gráficos Interactivos', 'Algoritmo de Predicción']
  }
];

export const categoriesData = ['Todos', 'Interactive / Physics Math', 'Fullstack / Enterprise ERP', 'Fullstack / Admin Dashboard', 'Fullstack / Enterprise', 'Fullstack / Social', 'Frontend / Algorithms'];
