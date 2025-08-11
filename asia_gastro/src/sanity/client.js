import { createClient } from "@sanity/client";
const client = createClient({
  projectId: "3zl4q7bz",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export default client;
