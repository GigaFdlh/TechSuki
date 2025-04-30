import { serve } from "inngest/next";
import { inngest, synUserCreate, synUserDelete, synUserUpdate } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    synUserCreate,
    synUserUpdate,
    synUserDelete
  ],
});

