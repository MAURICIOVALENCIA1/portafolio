import { ArrowDownRight, ExternalLink, Github, Star } from "lucide-react";
import { textosEs } from "../locales/es.js";

export default function ProjectCard({ proyecto }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <div className="relative overflow-hidden border-b border-slate-200/70 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
        <img
          className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.025]"
          src={proyecto.imagen}
          alt={proyecto.alt}
          loading="lazy"
          width="800"
          height="450"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:bg-slate-950/85 dark:text-slate-200">
          {textosEs.proyectos.capturaEjemplo}
        </span>
        {proyecto.destacado && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white dark:bg-emerald-400 dark:text-slate-950">
            <Star size={13} fill="currentColor" aria-hidden="true" />
            {textosEs.proyectos.destacado}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {proyecto.titulo}
          </h3>
          <ArrowDownRight
            size={20}
            className="mt-1 shrink-0 text-emerald-700 transition group-hover:translate-x-1 group-hover:translate-y-1 dark:text-emerald-300"
            aria-hidden="true"
          />
        </div>
        <p className="mb-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {proyecto.descripcion}
        </p>

        <div className="mb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {textosEs.proyectos.tecnologias}
          </p>
          <ul className="flex flex-wrap gap-2" aria-label={textosEs.proyectos.tecnologias}>
            {proyecto.tecnologias.map((tecnologia) => (
              <li key={tecnologia} className="tag">
                {tecnologia}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          <a
            className="button button-secondary"
            href={proyecto.repositorio}
            target="_blank"
            rel="noreferrer"
            aria-label={`${textosEs.proyectos.repositorio}: ${proyecto.titulo}. ${textosEs.accesibilidad.externo}`}
          >
            <Github size={16} aria-hidden="true" />
            {textosEs.proyectos.repositorio}
          </a>
          {proyecto.sitio && (
            <a
              className="button button-quiet"
              href={proyecto.sitio}
              target="_blank"
              rel="noreferrer"
              aria-label={`${textosEs.proyectos.sitio}: ${proyecto.titulo}. ${textosEs.accesibilidad.externo}`}
            >
              <ExternalLink size={16} aria-hidden="true" />
              {textosEs.proyectos.sitio}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
