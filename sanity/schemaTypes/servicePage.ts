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
    }),
    defineField({
      name: "services",
      title: "Servicios",
      type: "array",
      of: [{ type: "serviceCategory" }],
    }),
  ],
});
