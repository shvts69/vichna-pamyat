import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://soljnwquostftxnqezlg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvbGpud3F1b3N0ZnR4bnFlemxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1OTQxNjUsImV4cCI6MjA5MTE3MDE2NX0.riFofW6rOVbHR_-CYqX9kWFnvs4uM22DsUMu03oOt_M"
);
