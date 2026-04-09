"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, message }),
    });

    if (!res.ok) {
      setStatus("error");
    } else {
      setStatus("success");
      setName("");
      setPhone("");
      setMessage("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
          Ваше ім&apos;я
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-[#0f3460] text-white placeholder-gray-500 focus:outline-none focus:border-[#e94560]"
          placeholder="Введіть ваше ім'я"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-[#0f3460] text-white placeholder-gray-500 focus:outline-none focus:border-[#e94560]"
          placeholder="+38 (0__) ___-__-__"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
          Повідомлення
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-[#1a1a2e] border border-[#0f3460] text-white placeholder-gray-500 focus:outline-none focus:border-[#e94560] resize-none"
          placeholder="Опишіть ваше питання або потребу"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#e94560] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#c73e54] transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Надсилаємо..." : "Надіслати"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-center">
          Дякуємо! Ваше повідомлення надіслано. Ми зв&apos;яжемося з вами найближчим часом.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-center">
          Помилка при надсиланні. Спробуйте ще раз або зателефонуйте нам.
        </p>
      )}
    </form>
  );
}
