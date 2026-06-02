import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configuración del sitio",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Título del sitio",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("El título del sitio es obligatorio"),
    }),
    defineField({
      name: "siteDescription",
      title: "Descripción del sitio",
      type: "text",
      rows: 3,
      validation: (Rule) =>
        Rule.required().error("La descripción del sitio es obligatoria"),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
        }),
      ],
      validation: (Rule) => Rule.required().error("El logo es obligatorio"),
    }),
    defineField({
      name: "socialMedia",
      title: "Redes sociales",
      type: "object",
      fields: [
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Etiqueta",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) =>
                Rule.required()
                  .uri({
                    scheme: ["http", "https"],
                  })
                  .error("La URL debe ser válida y es obligatoria"),
            }),
          ],
        }),
        defineField({
          name: "facebook",
          title: "Facebook",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Etiqueta",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) =>
                Rule.required()
                  .uri({
                    scheme: ["http", "https"],
                  })
                  .error("La URL debe ser válida y es obligatoria"),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "phone",
      title: "Teléfono",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^\+?[0-9\s\-()]+$/, "El número de teléfono no es válido"),
    }),
    defineField({
      name: "email",
      title: "Correo electrónico",
      type: "string",
      validation: (Rule) =>
        Rule.email().error("El correo electrónico no es válido"),
    }),
    defineField({
      name: "address",
      title: "Dirección",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "openingHours",
      title: "Horario de apertura",
      type: "text",
      rows: 3,
    }),
  ],
});
