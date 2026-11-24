import { Moon, Sun } from "lucide-react";
import { textosEs } from "../locales/es.js";

export default function ThemeToggle({ tema, alCambiar }) {
  const temaOscuro = tema === "oscuro";

  return (
    <button
      type="button"
      onClick={alCambiar}
      className="icon-button"
      aria-label={temaOscuro ? textosEs.accesibilidad.temaClaro : textosEs.accesibilidad.temaOscuro}
      title={temaOscuro ? "Modo claro" : "Modo oscuro"}
    >
      {temaOscuro ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
    </button>
  );
}
