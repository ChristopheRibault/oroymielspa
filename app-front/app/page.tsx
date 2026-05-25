import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <header className="w-full flex justify-center px-6 pt-8">
        <Image
          src="/logo_white_gold_light.svg"
          alt="Oroymiel"
          width={160}
          height={160}
          priority
        />
      </header>
    </main>
  );
}
