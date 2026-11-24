import { Menu, X } from "lucide-react";
import { useState } from "react";
import { textosEs } from "../locales/es.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function SiteHeader({ tema, alCambiarTema }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f7f7f5]/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#101311]/90">
      <a className="skip-link" href="#contenido">
        {textosEs.accesibilidad.saltar}
      </a>
      <div className="page-shell flex min-h-16 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          aria-label="Harold Valencia, inicio"
          onClick={cerrarMenu}
        >
          <span className="grid size-10 place-items-center rounded-xl bg-emerald-700 text-sm font-bold tracking-wide text-white dark:bg-emerald-400 dark:text-slate-950">
            {textosEs.marca}
          </span>
          <span className="hidden text-sm font-semibold sm:block">Harold Valencia</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {textosEs.navegacion.map((enlace) => (
            <a key={enlace.destino} className="nav-link" href={enlace.destino}>
              {enlace.texto}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle tema={tema} alCambiar={alCambiarTema} />
          <button
            type="button"
            className="icon-button lg:hidden"
            aria-label={
              menuAbierto
                ? textosEs.accesibilidad.cerrarMenu
                : textosEs.accesibilidad.abrirMenu
            }
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuAbierto && (
        <nav
          id="menu-movil"
          className="border-t border-slate-200/70 px-5 py-3 dark:border-white/10 lg:hidden"
          aria-label="Navegación móvil"
        >
          <div className="page-shell flex flex-col">
            {textosEs.navegacion.map((enlace) => (
              <a
                key={enlace.destino}
                className="nav-link rounded-lg px-3 py-3"
                href={enlace.destino}
                onClick={cerrarMenu}
              >
                {enlace.texto}
              </a>
            ))}
            <a className="nav-link rounded-lg px-3 py-3" href="#contacto" onClick={cerrarMenu}>
              Contacto
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
