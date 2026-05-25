import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <nav aria-label="Menu principal" className="pt-3 sm:pt-6 font-heading">
      <ul className="flex flex-col items-start gap-2">
        <MenuItem label="Inicio" href="/" />
        <MenuItem label="Servicios" href="/servicios" />
        <MenuItem label="Contacto" />
      </ul>
    </nav>
  );
}
