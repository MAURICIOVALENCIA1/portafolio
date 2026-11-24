import { ArrowUpRight } from "lucide-react";

export default function SkillGroup({ grupo, indice }) {
  const enAprendizaje = grupo.titulo === "En aprendizaje";

  return (
    <article
      className={`card p-6 sm:p-8 ${indice === 1 ? "lg:mt-12" : ""}`}
      aria-labelledby={`habilidad-${indice}`}
    >
      <div className="mb-7 flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">{enAprendizaje ? "Explorando" : "Experiencia práctica"}</p>
          <h3 id={`habilidad-${indice}`} className="text-2xl font-semibold tracking-tight">
            {grupo.titulo}
          </h3>
        </div>
        <span className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
          <ArrowUpRight size={20} aria-hidden="true" />
        </span>
      </div>
      <div className="space-y-6">
        {grupo.categorias.map((categoria) => (
          <div key={categoria.nombre}>
            <h4 className="mb-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
              {categoria.nombre}
            </h4>
            <ul className="flex flex-wrap gap-2" aria-label={categoria.nombre}>
              {categoria.elementos.map((elemento) => (
                <li key={elemento} className="tag">
                  {elemento}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
