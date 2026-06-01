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
    }),
    defineField({
      name: "siteDescription",
      title: "Descripción del sitio",
      type: "text",
      rows: 3,
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
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "phone",
      title: "Teléfono",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Correo electrónico",
      type: "string",
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
