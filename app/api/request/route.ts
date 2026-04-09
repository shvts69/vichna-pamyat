import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://soljnwquostftxnqezlg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvbGpud3F1b3N0ZnR4bnFlemxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1OTQxNjUsImV4cCI6MjA5MTE3MDE2NX0.riFofW6rOVbHR_-CYqX9kWFnvs4uM22DsUMu03oOt_M"
);

const TELEGRAM_BOT_TOKEN = "8634356552:AAGKLUuclLu8FieLGqxiHeVB-o7KjE7H6Js";
const TELEGRAM_CHAT_ID = "7554753405";

async function sendTelegram(name: string, phone: string, message: string) {
  const text = [
    "Nova zayavka z saytu!",
    "",
    `Im'ya: ${name}`,
    `Telefon: ${phone}`,
    message ? `Povidomlennya: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    }
  );
}

export async function POST(request: Request) {
  const { name, phone, message } = await request.json();

  const { error } = await supabase.from("requests").insert({
    name,
    phone,
    message,
  });

  if (error) {
    return Response.json({ error: "Database error" }, { status: 500 });
  }

  sendTelegram(name, phone, message || "");

  return Response.json({ ok: true });
}
