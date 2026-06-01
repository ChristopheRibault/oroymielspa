import { Service } from "@/components/Services/Service";
import { ServicesList } from "@/components/Services/ServicesList";
import { Title } from "@/components/ui/title";
import { getServicePage } from "@/lib/sanity";

export default async function Servicios() {
  const servicePage = await getServicePage();

  const categories =
    servicePage?.services
      ?.map((category) => ({
        title: category.title,
        image: category.image?.asset?.url,
        services:
          category.services?.filter(
            (service) => service.name || service.description || service.price,
          ) ?? [],
      }))
      .filter(
        (category) =>
          category.title || category.image || category.services.length > 0,
      ) ?? [];

  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      {servicePage?.title ? (
        <Title as="h1" className="mb-8">
          {servicePage.title}
        </Title>
      ) : null}

      {categories.map((category, categoryIndex) => (
        <div key={`${category.title}-${categoryIndex}`}>
          <ServicesList title={category.title ?? ""} image={category.image}>
            {category.services.map((service, serviceIndex) => (
              <Service
                key={`${service.name ?? "service"}-${serviceIndex}`}
                name={service.name ?? ""}
                description={service.description ?? ""}
                rate={service.price ?? ""}
              />
            ))}
          </ServicesList>

          {categoryIndex < categories.length - 1 ? (
            <div className="my-10" />
          ) : null}
        </div>
      ))}
    </main>
  );
}
