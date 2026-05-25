import { Service } from "@/components/Services/Service";
import { ServicesList } from "@/components/Services/ServicesList";
import { Title } from "@/components/ui/title";

export default function Servicios() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <Title as="h1" className="mb-8">
        Mis Servicios
      </Title>

      <ServicesList title="Faciales" image="/faciales.png">
        <Service
          name="Ritual facial relajante"
          description="Diagnóstico de tu piel, exfoliación, vapor ozono, mascarilla hidratante, masaje craneo facial y máscara LED."
          rate="$450"
        />
        <Service
          name="Limpieza profunda"
          description="Protocolo ritual facial relajante + extracción, alta frecuencia, aplicación serum con activo según tu tipo de piel con ultrasonido."
          rate="$550"
        />
      </ServicesList>

      <div className="my-10" />

      <ServicesList title="Rituales relajantes" image="/rituales.png">
        <Service
          name="Masaje relajante"
          description="Sesión de 60 minutos de masaje y de regalo terapia con piedras calientes."
          rate="$650"
        />
        <Service
          name="Masaje descontracturante"
          description="Sesión de 60 minutos de masaje descontracturante, terapia con piedras calientes y de regalo sesión de presoterapia."
          rate="$800"
        />
        <Service
          name="Ritual piernas cansadas"
          description="Exfoliación y mascarilla de cafeína con centella asiática, drenaje linfático manual, vendas calientes y presoterapia."
          rate="$350"
        />
      </ServicesList>

      <div className="my-10" />

      <ServicesList
        title="Paquetes reductivos y reafirmantes"
        image="/paquetes.png"
      >
        <Service
          name="Paquete reductivo"
          description={
            "10 sesiones que incluyen: maderoterapia, ultracavitación, vacuum y de regalo vendas calientes.\n- Brazos y espalda: 2,000 MXN\n- Abdomen, cintura y espalda: 2,500 MXN\n- Glúteos y piernas completas: 3,000 MXN\n- Cuerpo completo: 4,000 MXN"
          }
          rate="$2,000+"
        />
        <Service
          name="Paquete reductivo reafirmante"
          description={
            "10 sesiones que incluyen: maderoterapia, ultracavitación, vacuum, radiofrecuencia, vendas frías y de regalo electroterapia.\n- Brazos y espalda: 2,500 MXN\n- Abdomen, cintura y espalda: 3,000 MXN\n- Glúteos y piernas completas: 3,500 MXN\n- Cuerpo completo: 4,500 MXN"
          }
          rate="$2,500+"
        />
      </ServicesList>

      <div className="my-10" />

      <ServicesList title="Paquete post operatorio" image="/operatorio.png">
        <Service
          name="Paquete post quirúrgico"
          description="10 sesiones que incluyen: drenaje linfático y ultrasonido."
          rate="$5,500"
        />
        <Service
          name="Paquete antifibrosis"
          description="10 sesiones que incluyen: drenaje linfático, ultracavitación, radiofrecuencia y vendas frías."
          rate="$4,500"
        />
      </ServicesList>
    </main>
  );
}
