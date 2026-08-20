export const problems = [
  ['01', 'Procesos manuales que consumen horas', 'Automatizamos el trabajo repetitivo para que el equipo se concentre en decisiones.'],
  ['02', 'Información dispersa entre sistemas', 'Conectamos fuentes, herramientas y equipos en un flujo claro.'],
  ['03', 'Reportes construidos manualmente', 'Convertimos datos operativos en información disponible y confiable.'],
  ['04', 'Productos difíciles de usar', 'Diseñamos experiencias que reducen fricción y aceleran adopción.'],
  ['05', 'Datos que no guían decisiones', 'Construimos modelos, tableros y señales que sí se pueden accionar.'],
  ['06', 'Tecnología que no escala', 'Diseñamos una arquitectura que puede evolucionar con el negocio.'],
]

export const capabilities = [
  { number: '01', signature: 'map', name: 'Estrategia y producto', description: 'Convertimos una necesidad de negocio en una ruta clara, viable y medible.', items: ['Descubrimiento', 'Estrategia digital', 'Arquitectura de solución', 'Roadmaps', 'Validación de producto', 'Prototipado'] },
  { number: '02', signature: 'frames', name: 'UX/UI y motion', description: 'Diseñamos experiencias claras, distintivas y construidas para usarse.', items: ['Investigación', 'Diseño UX', 'Diseño UI', 'Sistemas de diseño', 'Prototipos interactivos', 'Motion UI', 'Animaciones web'] },
  { number: '03', signature: 'layers', name: 'Ingeniería de software', description: 'Construimos productos estables que conectan frontend, backend, datos y operación.', items: ['Frontend', 'Backend', 'Full stack', 'APIs', 'Microservicios', 'Plataformas internas', 'Portales empresariales', 'Arquitectura escalable'] },
  { number: '04', signature: 'bars', name: 'Datos e inteligencia', description: 'Convertimos información dispersa en estructuras confiables, indicadores y decisiones.', items: ['Data Analytics', 'Business Intelligence', 'Dashboards', 'Data Engineering', 'Data Science', 'ETL', 'Pipelines', 'Calidad de datos'] },
  { number: '05', signature: 'nodes', name: 'IA y automatización', description: 'Aplicamos inteligencia artificial y automatización donde generan valor operativo real.', items: ['Agentes de IA', 'RAG', 'Bases vectoriales', 'Asistentes internos', 'Automatización', 'Workflows', 'Clasificación documental', 'Extracción de información'] },
  { number: '06', signature: 'docs', name: 'Soluciones especializadas', description: 'Construimos sistemas adaptados a operaciones que no caben en una solución genérica.', items: ['Fábricas de PDF', 'Motores de reglas', 'Reportes automatizados', 'Procesamiento documental', 'Integraciones', 'Generación masiva', 'Herramientas operativas'] },
]

export const process = [
  { id:'01', name:'Descubrimiento', objective:'Entendemos el negocio, los usuarios y el problema real.', deliverables:['Contexto','Prioridades','Riesgos'], visual:'radar' },
  { id:'02', name:'Estrategia', objective:'Definimos qué construir, cómo hacerlo y en qué orden.', deliverables:['Roadmap','Arquitectura','Alcance'], visual:'route' },
  { id:'03', name:'Diseño', objective:'Convertimos la estrategia en flujos, interfaces y prototipos.', deliverables:['UX','UI','Prototipo'], visual:'frames' },
  { id:'04', name:'Desarrollo', objective:'Construimos con iteraciones visibles y arquitectura limpia.', deliverables:['Frontend','Backend','Integraciones'], visual:'layers' },
  { id:'05', name:'Lanzamiento', objective:'Desplegamos, validamos y acompañamos la adopción.', deliverables:['Deploy','Monitoreo','Documentación'], visual:'launch' },
  { id:'06', name:'Evolución', objective:'Medimos, optimizamos y agregamos nuevas capacidades.', deliverables:['Analítica','Automatización','Escalamiento'], visual:'growth' },
]

export const projects = [
  {
    id: '01',
    title: 'Desarrollo de plataformas',
    description: 'Plataformas internas, portales para clientes, dashboards, backoffices y herramientas operativas diseñadas alrededor de los procesos reales de cada empresa.',
    services: ['PRODUCT DESIGN', 'FULL STACK', 'ARCHITECTURE'],
    outcome: 'Operaciones centralizadas en una herramienta construida para el negocio.',
  },
  {
    id: '02',
    title: 'ETLs y procesamiento de datos',
    description: 'Flujos para extraer, limpiar, transformar, validar, consolidar y cargar información desde archivos, bases de datos, APIs y sistemas externos.',
    services: ['DATA ENGINEERING', 'ETL', 'INTEGRATIONS'],
    outcome: 'Información consistente, disponible y lista para operar o analizar.',
  },
  {
    id: '03',
    title: 'Fábricas de PDF personalizadas',
    description: 'Generación masiva de documentos con datos dinámicos, diseño personalizado, validaciones y reglas para fichas técnicas, contratos, reportes, certificados o expedientes.',
    services: ['DOCUMENT SYSTEMS', 'RULE ENGINES', 'BACKEND'],
    outcome: 'Documentos confiables y homogéneos, producidos con menor intervención manual.',
  },
  {
    id: '04',
    title: 'Sitios web y experiencias digitales',
    description: 'Landing pages, sitios corporativos, portales y experiencias web con UX/UI, frontend, animación, rendimiento y optimización responsive.',
    services: ['UX/UI', 'FRONTEND', 'MOTION'],
    outcome: 'Una presencia digital clara, rápida y alineada con la calidad de la empresa.',
  },
  {
    id: '05',
    title: 'Automatización de procesos',
    description: 'Sistemas que eliminan tareas repetitivas, conectan herramientas, generan reportes, ejecutan validaciones y notifican eventos automáticamente.',
    services: ['WORKFLOWS', 'APIS', 'AUTOMATION'],
    outcome: 'Procesos más rápidos, trazables y menos dependientes de tareas manuales.',
  },
  {
    id: '06',
    title: 'Inteligencia Artificial aplicada',
    description: 'Agentes, asistentes documentales, RAG, extracción, clasificación, búsqueda inteligente y automatización mediante modelos de inteligencia artificial.',
    services: ['AI AGENTS', 'RAG', 'LLM INTEGRATION'],
    outcome: 'IA conectada con un caso de uso práctico y con la operación existente.',
  },
  {
    id: '07',
    title: 'Business Intelligence y analítica',
    description: 'Dashboards, KPIs, Power BI, reportes ejecutivos, integración de fuentes y modelos de información para apoyar decisiones.',
    services: ['ANALYTICS', 'POWER BI', 'DATA MODELING'],
    outcome: 'Decisiones respaldadas por indicadores claros y una sola versión de los datos.',
  },
]

export const products = [
  { id:'01', visual:'data', status:'EN DESARROLLO', title:'Plataforma de inteligencia y datos', category:'DATA PRODUCT', version:'v0.4', description:'Información operativa conectada, explorada y convertida en decisiones.', skills:['Dashboards','Fuentes conectadas','Analítica'] },
  { id:'02', visual:'documents', status:'EN DESARROLLO', title:'Automatización documental y reglas', category:'DOCUMENT AUTOMATION', version:'v0.2', description:'Documentos dinámicos generados mediante datos, validaciones y reglas.', skills:['Fábrica de PDF','Motor de reglas','Validación'] },
  { id:'03', visual:'agents', status:'EXPLORACIÓN', title:'Agentes inteligentes para operaciones', category:'APPLIED AI', version:'lab', description:'Agentes que colaboran con herramientas y ejecutan tareas operativas.', skills:['Agentes','RAG','Tool calling'] },
]
