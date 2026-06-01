import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicePage",
  title: "Service page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "serviceCategory" }],
    }),
  ],
});