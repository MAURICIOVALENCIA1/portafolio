const usuarioGitHub = "MAURICIOVALENCIA1";
const capturaPendiente = "/images/proyectos/captura-pendiente.svg";

export const proyectos = [
  {
    id: "volscan",
    titulo: "VolScan",
    descripcion:
      "Analizador de seguridad web con backend REST para analizar sitios mediante HTTP/HTTPS y revisar certificados SSL/TLS.",
    tecnologias: [
      "Python",
      "FastAPI",
      "Uvicorn",
      "HTTP/HTTPS",
      "SSL/TLS",
      "Git/GitHub",
      "Render",
      "VS Code",
    ],
    repositorio: `https://github.com/${usuarioGitHub}/VolScan`,
    sitio: "",
    imagen: capturaPendiente,
    alt: "Captura de ejemplo para VolScan; reemplazar por una captura propia",
    destacado: true,
  },
  {
    id: "analisis-logistico-ventas",
    titulo: "Análisis KPI de Inventario y Logística",
    descripcion:
      "Análisis de datos logísticos enfocado en control de inventario, alertas de desabastecimiento y tiempos de entrega (lead time).",
    tecnologias: ["Python", "SQL", "Jupyter Notebook", "Git/GitHub"],
    repositorio: `https://github.com/${usuarioGitHub}/analisis-kpi-inventario-logistica`,
    sitio: "",
    imagen: capturaPendiente,
    alt: "Captura de ejemplo para Análisis KPI de Inventario y Logística; reemplazar por una captura propia",
    destacado: false,
  },
  {
    id: "inventario-muflas",
    titulo: "Inventario de muflas",
    descripcion:
      "Prototipo para gestionar un inventario georreferenciado de muflas (cierres de empalme de fibra óptica), con códigos QR y mapa web para técnicos en campo.",
    tecnologias: ["Python", "Folium", "GeoJSON", "KML", "QR"],
    repositorio: `https://github.com/${usuarioGitHub}/inventario-muflas`,
    sitio: "",
    imagen: capturaPendiente,
    alt: "Captura de ejemplo para Inventario de muflas; reemplazar por una captura propia",
    destacado: true,
  },
  {
    id: "pantalla",
    titulo: "Interfaz multimedia Toyota",
    descripcion:
      "Prototipo interactivo de interfaz multimedia para vehículo, con módulos de radio, música, Bluetooth, navegación, teléfono, archivos y ajustes. Las conexiones externas se presentan como demostración.",
    tecnologias: [
      "React",
      "JavaScript",
      "Vite",
      "CSS3",
      "Lucide React",
      "Framer Motion",
    ],
    repositorio: `https://github.com/${usuarioGitHub}/pantalla`,
    sitio: "",
    imagen: capturaPendiente,
    alt: "Captura de ejemplo para Interfaz multimedia Toyota; reemplazar por una captura propia",
    destacado: false,
  },
  {
    id: "penalty-masters",
    titulo: "Penalty Masters",
    descripcion:
      "Prototipo 3D jugable de cinco penaltis contra un portero controlado por la computadora. La escena requiere WebGL.",
    tecnologias: ["React", "Vite", "Three.js", "WebGL"],
    repositorio: `https://github.com/${usuarioGitHub}/penalty-masters`,
    sitio: "",
    imagen: capturaPendiente,
    alt: "Captura de ejemplo para Penalty Masters; reemplazar por una captura propia",
    destacado: false,
  },
  {
    id: "lista-tareas",
    titulo: "Lista de tareas",
    descripcion:
      "[PENDIENTE] Describe las funciones de la lista de tareas y las tecnologías utilizadas.",
    tecnologias: ["[PENDIENTE: confirmar tecnologías]"],
    repositorio: `https://github.com/${usuarioGitHub}/-lista-tareas`,
    sitio: "",
    imagen: capturaPendiente,
    alt: "Captura de ejemplo para Lista de tareas; reemplazar por una captura propia",
    destacado: false,
  },
];
