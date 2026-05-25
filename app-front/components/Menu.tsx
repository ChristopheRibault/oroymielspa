import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <nav aria-label="Menu principal" className="pt-3 sm:pt-6 font-heading">
      <ul className="flex flex-col items-start gap-2">
        <MenuItem label="Inicio" />
        <MenuItem label="Servicios" />
        <MenuItem label="Contacto" />
      </ul>
    </nav>
  );
}
