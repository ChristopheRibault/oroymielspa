import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero title",
      type: "string",
    }),
    defineField({
      name: "heroText",
      title: "Hero text",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA label",
      type: "string",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Primary CTA link",
      type: "url",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA label",
      type: "string",
    }),
    defineField({
      name: "secondaryCtaHref",
      title: "Secondary CTA link",
      type: "url",
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "featuredServices",
      title: "Featured services",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({ name: "price", title: "Price", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "quote", title: "Quote", type: "text", rows: 4 }),
            defineField({ name: "author", title: "Author", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});