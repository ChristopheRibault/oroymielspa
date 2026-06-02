import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicePage",
  title: "Página de servicios",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().error("El título es obligatorio"),
    }),
    defineField({
      name: "services",
      title: "Servicios",
      type: "array",
      of: [{ type: "serviceCategory" }],
      validation: (Rule) =>
        Rule.required()
          .error("Los servicios son obligatorios")
          .min(1)
          .error("Debe haber al menos una categoría de servicios"),
    }),
  ],
});
