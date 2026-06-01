import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "serviceCategory",
  title: "Categoría de servicios",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Imagen",
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
      name: "services",
      title: "Servicios",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Nombre", type: "string" }),
            defineField({
              name: "description",
              title: "Descripción",
              type: "text",
              rows: 3,
            }),
            defineField({ name: "price", title: "Precio", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});
