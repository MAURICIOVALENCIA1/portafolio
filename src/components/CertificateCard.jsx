import { ArrowUpRight, BookOpenCheck } from "lucide-react";
import { textosEs } from "../locales/es.js";

export default function CertificateCard({ certificado }) {
  const detalles = [certificado.anio, certificado.detalle, certificado.horas]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="card overflow-hidden">
      {certificado.imagen && (
        <a
          className="group block bg-slate-50 p-3 dark:bg-white/[0.04]"
          href={certificado.imagen}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir certificado: ${certificado.nombre}`}
        >
          <img
            className="aspect-[4/3] max-h-72 w-full rounded-xl object-contain"
            src={certificado.imagen}
            alt={`Certificado de ${certificado.nombre}, ${certificado.institucion}`}
            loading="lazy"
            decoding="async"
          />
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 group-hover:underline dark:text-emerald-300">
            {textosEs.formacion.verCertificado}
            <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </a>
      )}
      <div className="flex gap-4 p-5 sm:p-6">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
          <BookOpenCheck size={20} aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="font-semibold leading-6 text-slate-900 dark:text-white">
              {certificado.nombre}
            </h3>
            {certificado.estado && (
              <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900 dark:bg-amber-300/15 dark:text-amber-200">
                {certificado.estado === "En curso"
                  ? textosEs.formacion.enCurso
                  : certificado.estado}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {certificado.institucion}
          </p>
          {detalles && (
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{detalles}</p>
          )}
          {certificado.enlace && (
            <a
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline dark:text-emerald-300"
              href={certificado.enlace}
              target="_blank"
              rel="noreferrer"
            >
              {textosEs.formacion.enlace}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
