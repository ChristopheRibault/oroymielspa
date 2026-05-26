import Menu from "./Menu";
import { PrimaryButton } from "./PrimaryButton";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <header className="w-full flex justify-center px-4 py-2 sm:px-8 sm:py-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full gap-4 sm:gap-8">
        <div className="pt-3 sm:pt-6 hidden sm:block">
          <PrimaryButton>Reservar</PrimaryButton>
        </div>

        <Logo />
        <Menu />
      </div>
    </header>
  );
}
