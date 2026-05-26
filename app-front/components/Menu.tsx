import MenuItem from "./MenuItem";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

export default function Menu() {
  return (
    <nav aria-label="Menu principal" className="pt-3 sm:pt-6 font-heading">
      <ul className="flex flex-row flex-wrap sm:flex-col items-start gap-2">
        <MenuItem label="Inicio" href="/" />
        <MenuItem label="Servicios" href="/servicios" />
        <MenuItem label="Contacto" />
      </ul>

      <div className="mt-3 flex items-center gap-2">
        <Link
          href="https://www.instagram.com/oromielspa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="rounded-md p-1.5 text-[#6e5b4e] transition-colors hover:bg-[#e8ded2]"
        >
          <FaInstagram className="size-5" />
        </Link>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="rounded-md p-1.5 text-[#6e5b4e] transition-colors hover:bg-[#e8ded2]"
        >
          <FaFacebookF className="size-5" />
        </Link>
      </div>
    </nav>
  );
}
