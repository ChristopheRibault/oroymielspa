import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Página de inicio",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Título principal",
      type: "string",
    }),
    defineField({
      name: "heroText",
      title: "Texto principal",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "heroImage",
      title: "Imagen principal",
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
      name: "ctas",
      title: "Llamados a la acción",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Etiqueta",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Página",
              type: "reference",
              to: [
                { type: "homePage" },
                { type: "servicePage" },
                { type: "contactPage" },
              ],
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.max(2).error("Máximo 2 llamados a la acción"),
    }),
    defineField({
      name: "highlights",
      title: "Destacados",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.max(3).error("Máximo 3 destacados"),
    }),
    defineField({
      name: "featuredServices",
      title: "Servicios destacados",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Título", type: "string" }),
            defineField({
              name: "description",
              title: "Descripción",
              type: "text",
              rows: 3,
            }),
            defineField({ name: "price", title: "Precio", type: "string" }),
            defineField({
              name: "image",
              title: "Imagen",
              type: "image",
              options: { hotspot: true },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "Sección Acerca de",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Título", type: "string" }),
        defineField({ name: "text", title: "Texto", type: "text", rows: 4 }),
        defineField({
          name: "image",
          title: "Imagen",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonios",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "quote",
              title: "Cita",
              type: "text",
              rows: 4,
            }),
            defineField({ name: "author", title: "Autor", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});
