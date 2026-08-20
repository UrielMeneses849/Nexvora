import SectionReveal from './SectionReveal'
import { motion } from 'framer-motion'
import { capabilities, problems, products, projects } from '../data/siteData'
import ProductSystem from './ProductSystem'
import ProcessSystem from './ProcessSystem'
import LabVisual from './LabVisual'
import styles from './LandingSections.module.css'

const stack = {
  Frontend: ['React','Vite','Next.js','TypeScript','Framer Motion','GSAP'], Backend: ['Node.js','Python','FastAPI','APIs REST','Microservicios'],
  Datos: ['Pandas','PySpark','SQL','Power BI','ETL','Pipelines'], IA: ['LLMs','RAG','Agentes','Bases vectoriales','Salidas estructuradas'],
  Infraestructura: ['Docker','Nginx','CI/CD','Vercel','AWS','GCP','Azure'],
}

const Label = ({children}) => <p className={styles.label}><span>+</span>{children}</p>

export default function LandingSections() {
  return <>
    <SectionReveal className={`${styles.section} ${styles.manifesto}`}>
      <div id="nosotros" className={styles.anchor} />
      <div className={styles.sectionInner}>
        <Label>NEXVORA / TECHNOLOGY STUDIO</Label>
        <div className={styles.manifestoGrid}>
          <div className={styles.manifestoCopy}><h2>No construimos software por construirlo.<br /><em>Creamos tecnología que mueve negocios.</em></h2><p>Diseño, producto, frontend, backend, datos, inteligencia artificial e infraestructura trabajando como un solo sistema.</p><strong>Un solo equipo.<br/>Una sola arquitectura.<br/>Una visión completa del producto.</strong><a className={styles.textLink} href="#servicios">Conoce nuestras capacidades <span>↘</span></a></div>
          <ProductSystem />
        </div>
      </div>
    </SectionReveal>

    <SectionReveal className={`${styles.section} ${styles.problems}`}>
      <div className={styles.sectionInner}>
        <div className={styles.splitHead}><div><Label>PROBLEMAS QUE RESOLVEMOS</Label><h2>Tu empresa no necesita más herramientas.<br /><em>Necesita que todo funcione mejor.</em></h2></div><p>Empezamos por la operación, no por la tecnología. Identificamos el bloqueo y construimos sólo lo que mueve el resultado.</p></div>
        <div className={styles.problemList}>{problems.map(([num,title,copy]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article>)}</div>
      </div>
    </SectionReveal>

    <SectionReveal className={`${styles.section} ${styles.capabilities}`}>
      <div id="servicios" className={styles.anchor} />
      <div className={styles.sectionInner}>
        <div className={styles.splitHead}><div><Label>SERVICIOS / 01—06</Label><h2>Capacidades conectadas.<br /><em>Un solo equipo.</em></h2></div><p>Diseño, ingeniería, datos e inteligencia artificial trabajan sobre el mismo sistema. Menos entregables aislados y más productos que funcionan de punta a punta.</p></div>
        <div className={styles.capabilityGrid}>{capabilities.map((item,index) => <article key={item.number} data-signature={item.signature}><div className={styles.capTop}><span>{item.number}</span><b>↗</b></div><motion.div className={styles.capVisual} aria-hidden="true" initial={{opacity:0,y:8}} whileInView={{opacity:.35,y:0}} viewport={{once:true,amount:.6}} transition={{delay:index*.05,duration:.45}}><i/><i/><i/><i/></motion.div><h3>{item.name}</h3><p>{item.description}</p><div className={styles.capList}><span>CAPACIDADES</span><ul>{item.items.map(x=><li key={x}>{x}</li>)}</ul></div><a href="#contacto">Explorar capacidad <span>→</span></a></article>)}</div>
      </div>
    </SectionReveal>

    <section className={`${styles.section} ${styles.process}`}>
      <div className={styles.sectionInner}>
        <motion.div className={styles.splitHead} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.45}} transition={{duration:.65}}><div><Label>SISTEMA DE TRABAJO / 01—06</Label><h2>De una conversación<br /><em>a un producto real.</em></h2></div><p>Conectamos estrategia, diseño, ingeniería, datos e inteligencia artificial dentro de un solo sistema de trabajo.</p></motion.div>
        <ProcessSystem />
      </div>
    </section>

    <SectionReveal className={`${styles.section} ${styles.projects}`}>
      <div id="proyectos" className={styles.anchor} />
      <div className={styles.sectionInner}>
        <div className={styles.splitHead}>
          <div><Label>SISTEMAS / 01—07</Label><h2>Proyectos que convertimos en <em>sistemas reales.</em></h2></div>
          <p>Desde una necesidad operativa hasta una plataforma completa. Diseñamos, desarrollamos e integramos soluciones adaptadas al negocio.</p>
        </div>
        <div className={styles.projectGrid}>{projects.map(project=><article key={project.id}>
          <div className={styles.projectTop}><span>{project.id}</span><b>↗</b></div>
          <h3>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.projectMeta}><span>CAPACIDADES</span><ul>{project.services.map(x=><li key={x}>{x}</li>)}</ul></div>
          <div className={styles.projectOutcome}><span>RESULTADO ESPERADO</span><p>{project.outcome}</p></div>
          <a href="#servicios">Explorar capacidad <span>→</span></a>
        </article>)}</div>
      </div>
    </SectionReveal>

    <SectionReveal className={`${styles.section} ${styles.labs}`}>
      <div id="productos" className={styles.anchor} />
      <div className={styles.sectionInner}>
        <div className={styles.labsHead}><div><Label>NEXVORA LABS / BUILD 001</Label><h2>También construimos lo que creemos que <em>debería existir.</em></h2></div><p>NEXVORA LABS es nuestro espacio para crear plataformas, herramientas y productos tecnológicos propios.</p></div>
        <div className={styles.products}>{products.map(product=><article key={product.id}><div className={styles.productIdentity}><span>PRODUCTO_{product.id}</span><b>{product.version}</b></div><LabVisual type={product.visual}/><div className={styles.status}><i/>{product.status}</div><p>{product.category}</p><h3>{product.title}</h3><p className={styles.productDescription}>{product.description}</p><ul className={styles.productSkills}>{product.skills.map(x=><li key={x}>{x}</li>)}</ul><button type="button">Próximamente <span>→</span></button></article>)}</div>
      </div>
    </SectionReveal>

    <SectionReveal className={`${styles.section} ${styles.pymes}`}>
      <div className={styles.sectionInner}><Label>PARA EMPRESAS EN CRECIMIENTO</Label><div className={styles.pymesGrid}><h2>Tecnología de nivel empresarial, <em>aterrizada para empresas que están creciendo.</em></h2><div><p>No necesitas transformar toda tu empresa de una vez. Podemos comenzar con una plataforma, una automatización, un dashboard, un flujo de datos o un producto mínimo viable y construir por etapas.</p><ul>{['Proyectos por etapas','Comunicación directa','Alcance claro','Arquitectura para crecer','Acompañamiento después del lanzamiento'].map((x,i)=><li key={x}><span>0{i+1}</span>{x}</li>)}</ul><a href="#contacto">Conversemos sobre tu siguiente etapa <span>↗</span></a></div></div></div>
    </SectionReveal>

    <SectionReveal className={`${styles.section} ${styles.difference}`}>
      <div className={styles.sectionInner}><Label>POR QUÉ NEXVORA</Label><h2>Estrategia de negocio.<br />Criterio de diseño.<br /><em>Disciplina de ingeniería.</em></h2><div className={styles.diffGrid}>{['Visión integral del producto','Diseño y tecnología en el mismo equipo','Arquitectura pensada para evolucionar','IA conectada a problemas reales','Comunicación directa, sin capas','Mentalidad de producto, no de proveedor'].map((x,i)=><p key={x}><span>0{i+1}</span>{x}</p>)}</div></div>
    </SectionReveal>

    <SectionReveal className={`${styles.section} ${styles.technology}`}>
      <div className={styles.sectionInner}><div className={styles.splitHead}><div><Label>SISTEMA TÉCNICO</Label><h2>La herramienta correcta<br /><em>para cada sistema.</em></h2></div><p>Elegimos tecnología por su capacidad de resolver, mantenerse y crecer. Nunca por llenar una lista de logos.</p></div><div className={styles.stack}>{Object.entries(stack).map(([category,items],i)=><article key={category}><span>0{i+1}</span><h3>{category}</h3><p>{items.join('  /  ')}</p></article>)}</div></div>
    </SectionReveal>

    <section className={`${styles.section} ${styles.contact}`} id="contacto">
      <div className={styles.sectionInner}><div className={styles.contactGrid}><div><Label>INICIAR UN PROYECTO</Label><h2>Construyamos algo que tu empresa <em>todavía no tiene.</em></h2><p>Cuéntanos qué quieres mejorar, automatizar o convertir en producto. Te ayudaremos a encontrar la ruta más clara.</p></div><form onSubmit={e=>e.preventDefault()}><div className={styles.fields}><label>Nombre<input name="name" required placeholder="Tu nombre" /></label><label>Empresa<input name="company" placeholder="Nombre de empresa" /></label><label>Correo<input type="email" name="email" required placeholder="tu@empresa.com" /></label><label>Tipo de proyecto<select name="type" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Producto digital</option><option>UX/UI</option><option>Plataforma completa</option><option>Datos y BI</option><option>Inteligencia artificial</option><option>Automatización</option><option>Otro</option></select></label></div><label>¿Qué quieres construir o mejorar?<textarea name="message" required rows="3" placeholder="Cuéntanos brevemente sobre el reto..." /></label><button type="submit">Enviar solicitud <span>↗</span></button><small>Al enviar aceptas que usemos estos datos únicamente para responder tu solicitud.</small></form></div></div>
    </section>
  </>
}
