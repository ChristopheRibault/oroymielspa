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
      validation: (Rule) => Rule.required().error("El título es obligatorio"),
    }),
    defineField({
      name: "intro",
      title: "Introducción",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Título", value: "h2" },
            { title: "Subtítulo", value: "h3" },
          ],
          lists: [
            { title: "Viñetas", value: "bullet" },
            { title: "Numerada", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Negrita", value: "strong" },
              { title: "Cursiva", value: "em" },
            ],
            annotations: [],
          },
        },
      ],
    }),
  ],
});
