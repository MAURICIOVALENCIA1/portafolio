export default function SectionHeading({ etiqueta, titulo, descripcion, centrado = false }) {
  return (
    <div className={centrado ? "mx-auto mb-10 max-w-2xl text-center" : "mb-10 max-w-2xl"}>
      {etiqueta && <p className="eyebrow mb-3">{etiqueta}</p>}
      <h2 className="section-title">{titulo}</h2>
      {descripcion && <p className="section-description mt-4">{descripcion}</p>}
    </div>
  );
}
