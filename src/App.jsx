import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import CertificateCard from "./components/CertificateCard.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import SkillGroup from "./components/SkillGroup.jsx";
import { certificaciones, formacionComplementaria } from "./data/certificados.js";
import { experiencia } from "./data/experiencia.js";
import { gruposHabilidades } from "./data/habilidades.js";
import { perfil } from "./data/perfil.js";
import { proyectos } from "./data/proyectos.js";
import { textosEs } from "./locales/es.js";

function obtenerTemaInicial() {
  try {
    if (localStorage.getItem("tema") === "oscuro") return "oscuro";
    if (localStorage.getItem("tema") === "claro") return "claro";
  } catch {
    // El tema del sistema se usa si el almacenamiento no está disponible.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro";
}

export default function App() {
  const [tema, setTema] = useState(obtenerTemaInicial);
  const linkedinPendiente = perfil.linkedin.includes("tu-usuario");
  const asuntoCorreo = encodeURIComponent("Contacto desde tu portafolio");
  const cuerpoCorreo = encodeURIComponent(
    "Hola Harold,\n\nVi tu portafolio y me gustaría conversar sobre:",
  );
  const proyectosOrdenados = [...proyectos].sort(
    (primero, segundo) => Number(segundo.destacado) - Number(primero.destacado),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", tema === "oscuro");
    try {
      localStorage.setItem("tema", tema);
    } catch {
      // La selección de tema sigue funcionando aunque no se pueda guardar.
    }
  }, [tema]);

  function cambiarTema() {
    setTema((temaActual) => (temaActual === "oscuro" ? "claro" : "oscuro"));
  }

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-slate-900 transition-colors dark:bg-[#101311] dark:text-slate-100">
      <SiteHeader tema={tema} alCambiarTema={cambiarTema} />

      <main id="contenido">
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:pb-36 lg:pt-28"
        >
          <div className="pointer-events-none absolute -right-36 -top-32 -z-10 size-[30rem] rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-700/15" />
          <div className="pointer-events-none absolute -bottom-48 -left-48 -z-10 size-[28rem] rounded-full bg-teal-100/70 blur-3xl dark:bg-teal-900/20" />
          <div className="page-shell grid items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="max-w-3xl">
              <p className="eyebrow mb-6 inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                {textosEs.hero.etiqueta}
              </p>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
                {textosEs.hero.saludo}
                <span className="mt-2 block text-emerald-800 dark:text-emerald-300">
                  {perfil.nombreCorto}.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
                {perfil.titular}
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-500 dark:text-slate-400">
                {textosEs.hero.frase}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="button button-primary" href="#proyectos">
                  {textosEs.hero.proyectos}
                  <ArrowDownRight size={17} aria-hidden="true" />
                </a>
                <a className="button button-secondary" href="#contacto">
                  {textosEs.hero.contacto}
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
              <p className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <MapPin size={16} className="text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
                {perfil.ciudad}
              </p>
            </div>

            <aside className="relative mx-auto w-full max-w-sm" aria-label="Perfil profesional">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-emerald-700/20 dark:border-emerald-300/20" />
              <div className="relative rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-emerald-950/15 sm:p-9 dark:bg-[#1b211e]">
                <div className="mb-12 flex items-center justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-emerald-400 text-lg font-bold text-slate-950">
                    HV
                  </span>
                  <Sparkles size={21} className="text-emerald-300" aria-hidden="true" />
                </div>
                <p className="text-sm text-slate-400">{textosEs.hero.disponibilidad}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  Tecnología con propósito.
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Código, documentación y pruebas para crear experiencias útiles y confiables.
                </p>
                <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-slate-300">
                  <Check size={16} className="text-emerald-300" aria-hidden="true" />
                  {textosEs.hero.disponibilidad}
                </div>
              </div>
            </aside>
          </div>
          <a
            href="#sobre-mi"
            className="mx-auto mt-16 flex w-fit items-center gap-2 text-sm font-medium text-slate-500 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-slate-400 dark:hover:text-emerald-300 sm:mt-20"
          >
            {textosEs.hero.desplazarse}
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </section>

        <section
          id="sobre-mi"
          className="section-pad scroll-mt-24 border-y border-slate-200/70 bg-white/70 dark:border-white/10 dark:bg-white/[0.025]"
        >
          <div className="page-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <SectionHeading
              etiqueta={textosEs.sobreMi.etiqueta}
              titulo={textosEs.sobreMi.titulo}
              descripcion={textosEs.sobreMi.introduccion}
            />
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-9 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9 dark:text-slate-300">
                {textosEs.sobreMi.texto}
              </p>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section-pad scroll-mt-24">
          <div className="page-shell">
            <SectionHeading
              etiqueta="Trayectoria profesional"
              titulo={textosEs.experiencia.titulo}
              descripcion={textosEs.experiencia.introduccion}
            />
            <article className="card overflow-hidden">
              <div className="grid lg:grid-cols-[0.35fr_1fr]">
                <div className="bg-emerald-800 p-6 text-white sm:p-8 dark:bg-emerald-950">
                  <span className="mb-8 grid size-12 place-items-center rounded-xl bg-white/10">
                    <BriefcaseBusiness size={22} aria-hidden="true" />
                  </span>
                  <p className="text-sm font-medium text-emerald-100">{experiencia.fechas}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{experiencia.empresa}</h3>
                  <p className="mt-2 text-sm text-emerald-100">{experiencia.cargo}</p>
                </div>
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
                  <div>
                    <h4 className="mb-4 font-semibold">{textosEs.experiencia.funciones}</h4>
                    <ul className="space-y-3">
                      {experiencia.funciones.map((funcion) => (
                        <li
                          key={funcion}
                          className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                        >
                          <Check
                            size={17}
                            className="mt-1 shrink-0 text-emerald-700 dark:text-emerald-300"
                            aria-hidden="true"
                          />
                          {funcion}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-5 dark:bg-white/[0.04]">
                    <h4 className="mb-3 font-semibold">{textosEs.experiencia.logros}</h4>
                    <ul className="space-y-3">
                      {experiencia.logros.map((logro) => (
                        <li
                          key={logro}
                          className="flex gap-3 text-sm leading-6 text-slate-500 dark:text-slate-400"
                        >
                          <Sparkles
                            size={16}
                            className="mt-1 shrink-0 text-emerald-700 dark:text-emerald-300"
                            aria-hidden="true"
                          />
                          {logro}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          id="proyectos"
          className="section-pad scroll-mt-24 border-y border-slate-200/70 bg-white/70 dark:border-white/10 dark:bg-white/[0.025]"
        >
          <div className="page-shell">
            <SectionHeading
              etiqueta="Trabajo seleccionado"
              titulo={textosEs.proyectos.titulo}
              descripcion={textosEs.proyectos.introduccion}
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {proyectosOrdenados.map((proyecto) => (
                <ProjectCard key={proyecto.id} proyecto={proyecto} />
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="section-pad scroll-mt-24">
          <div className="page-shell">
            <SectionHeading
              etiqueta="Caja de herramientas"
              titulo={textosEs.habilidades.titulo}
              descripcion={textosEs.habilidades.introduccion}
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {gruposHabilidades.map((grupo, indice) => (
                <SkillGroup key={grupo.titulo} grupo={grupo} indice={indice} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="formacion"
          className="section-pad scroll-mt-24 border-y border-slate-200/70 bg-white/70 dark:border-white/10 dark:bg-white/[0.025]"
        >
          <div className="page-shell">
            <SectionHeading
              etiqueta="Aprendizaje continuo"
              titulo={textosEs.formacion.titulo}
              descripcion={textosEs.formacion.introduccion}
            />
            <div className="grid gap-4 lg:grid-cols-2">
              {certificaciones.map((certificado) => (
                <CertificateCard key={certificado.nombre} certificado={certificado} />
              ))}
            </div>
            <div className="mt-12">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {textosEs.formacion.complementaria}
              </h3>
              <div className="grid gap-4 lg:grid-cols-2">
                {formacionComplementaria.map((certificado) => (
                  <CertificateCard key={certificado.nombre} certificado={certificado} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="section-pad scroll-mt-24">
          <div className="page-shell">
            <div className="relative overflow-hidden rounded-[2rem] bg-emerald-900 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 dark:bg-emerald-950">
              <div className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border-[40px] border-white/[0.06]" />
              <div className="pointer-events-none absolute -bottom-44 right-32 size-80 rounded-full border-[1px] border-white/10" />
              <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-2xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    Próximo paso
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                    {textosEs.contacto.titulo}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-emerald-100 sm:text-lg">
                    {textosEs.contacto.introduccion}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    className="button border border-white bg-white text-emerald-950 hover:bg-emerald-50"
                    href={`mailto:${perfil.correo}?subject=${asuntoCorreo}&body=${cuerpoCorreo}`}
                    aria-label={`${textosEs.accesibilidad.email}: ${perfil.correo}`}
                  >
                    <Mail size={17} aria-hidden="true" />
                    {textosEs.contacto.correo}
                  </a>
                  <a
                    className="button border border-white/25 bg-white/10 text-white hover:bg-white/15"
                    href={perfil.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${textosEs.accesibilidad.github}. ${textosEs.accesibilidad.externo}`}
                  >
                    <Github size={17} aria-hidden="true" />
                    {textosEs.contacto.github}
                  </a>
                  <a
                    className="button border border-white/25 bg-white/10 text-white hover:bg-white/15"
                    href={perfil.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${textosEs.accesibilidad.linkedin}. ${textosEs.accesibilidad.externo}`}
                  >
                    <Linkedin size={17} aria-hidden="true" />
                    {textosEs.contacto.linkedin}
                  </a>
                </div>
              </div>
              {linkedinPendiente && (
                <p className="relative z-10 mt-6 text-sm text-emerald-100">
                  {textosEs.contacto.linkedinPendiente}
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/70 py-7 dark:border-white/10">
        <div className="page-shell flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {perfil.nombreCorto}. {textosEs.pie.hecho}
          </p>
          <a className="inline-flex items-center gap-2 font-medium hover:text-emerald-800 dark:hover:text-emerald-300" href="#inicio">
            {textosEs.pie.volver}
            <ArrowDownRight size={15} className="-rotate-90" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
}
