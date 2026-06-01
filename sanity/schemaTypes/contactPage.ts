import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Página de contacto",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "intro",
      title: "Introducción",
      type: "text",
      rows: 4,
    }),
  ],
});
