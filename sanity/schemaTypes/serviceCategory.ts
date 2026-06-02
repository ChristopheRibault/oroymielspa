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
      validation: (Rule) =>
        Rule.required().error("El título de la categoría es obligatorio"),
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
            defineField({
              name: "name",
              title: "Nombre",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("El nombre del servicio es obligatorio"),
            }),
            defineField({
              name: "description",
              title: "Descripción",
              type: "text",
              rows: 3,
              validation: (Rule) =>
                Rule.required().error(
                  "La descripción del servicio es obligatoria",
                ),
            }),
            defineField({ name: "price", title: "Precio", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});
