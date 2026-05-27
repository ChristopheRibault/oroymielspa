import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ?? "gv1jafxm";
const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";
const apiVersion = process.env.SANITY_STUDIO_API_VERSION ?? "2025-01-01";

export default defineConfig({
  name: "oroymiel",
  title: "Oro y Miel Studio",
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
  },
});
