import Link from "next/link";
import Candle from "./components/Candle";
import Gallery from "./components/Gallery";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FuneralHome",
  name: "Вічна пам'ять",
  description:
    "Ритуальні послуги в Ладижині. Організація похорон, перевезення тіл, пам'ятники, догляд за могилами.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "вул. Будівельників, 40, цокольний поверх",
    addressLocality: "Ладижин",
    addressRegion: "Вінницька область",
    addressCountry: "UA",
  },
  telephone: ["+380972544818", "+380995313501", "+380677589700"],
  openingHours: "Mo-Su 00:00-23:59",
  areaServed: {
    "@type": "Country",
    name: "Україна",
  },
};

const services = [
  {
    title: "Організація похорон",
    description:
      "Повний комплекс послуг з організації похоронної церемонії. Ми беремо на себе всі турботи.",
    icon: "🕯️",
  },
  {
    title: "Ритуальні товари",
    description:
      "Труни, вінки, квіти, хрести, пам'ятники та інші ритуальні атрибути.",
    icon: "🌹",
  },
  {
    title: "Перевезення по Україні та Європі",
    description:
      "Перевезення тіл з будь-якої точки України. Доставка з-за кордону (Європа — за домовленістю).",
    icon: "🚐",
  },
  {
    title: "Похорон онлайн",
    description:
      "Повна організація церемонії з прямою трансляцією для рідних, які не можуть бути присутніми.",
    icon: "📹",
  },
  {
    title: "Оформлення документів",
    description:
      "Допомога з оформленням свідоцтва про смерть та інших необхідних документів.",
    icon: "📋",
  },
  {
    title: "Пам'ятники на замовлення",
    description:
      "Виготовлення та встановлення пам'ятників за індивідуальним дизайном. Огорожі, плитка, благоустрій.",
    icon: "🪦",
  },
  {
    title: "Догляд за могилами",
    description:
      "Регулярний догляд за місцем поховання: прибирання, озеленення, підтримка в належному стані.",
    icon: "🌿",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Навігація */}
      <nav className="bg-[#16213e] border-b border-[#0f3460] px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">
            Вічна пам&apos;ять
          </Link>
          <div className="flex gap-6 text-sm">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Головна
            </Link>
            <Link
              href="/poslugy"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Послуги
            </Link>
            <Link
              href="/kontakty"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Контакти
            </Link>
          </div>
        </div>
      </nav>

      {/* Головний банер */}
      <section className="bg-[#16213e] py-20 px-6 text-center relative overflow-hidden">
        {/* Фонове світіння */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-96 h-96 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, rgba(255,165,0,0.4) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Свічки по боках */}
          <div className="flex justify-center items-end gap-12 mb-8">
            <div className="hidden md:block opacity-70">
              <Candle size="small" />
            </div>
            <div>
              <Candle size="large" />
            </div>
            <div className="hidden md:block opacity-70">
              <Candle size="small" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Вічна пам&apos;ять
          </h1>
          <p className="text-lg text-gray-300 mb-4 animate-fade-in-up-delay">
            Ритуальні послуги з повагою та турботою
          </p>
          <p className="text-gray-400 mb-4 animate-fade-in-up-delay">
            м. Ладижин · Працюємо цілодобово
          </p>
          <p className="text-gray-400 mb-8 animate-fade-in-up-delay-2">
            Ми допоможемо вам у найважчу хвилину. Повний комплекс ритуальних
            послуг.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <Link
              href="/kontakty"
              className="inline-block bg-[#e94560] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#c73e54] transition-colors"
            >
              Зв&apos;язатися з нами
            </Link>
            <a
              href="tel:+380972544818"
              className="inline-block border border-gray-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:border-white transition-colors"
            >
              Зателефонувати
            </a>
          </div>
        </div>
      </section>

      {/* Послуги */}
      <section className="py-16 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Наші послуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#16213e] rounded-xl p-6 border border-[#0f3460] hover:border-[#e94560] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Наш салон */}
      <section className="py-16 px-6 bg-[#16213e]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Наш салон
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Широкий вибір ритуальних товарів: труни, вінки, квіти та аксесуари на будь-який бюджет
          </p>
          <Gallery />
        </div>
      </section>

      {/* Чому ми */}
      <section className="py-16 px-6 bg-[#16213e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            Чому обирають нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Цілодобово
              </h3>
              <p className="text-gray-400">
                Працюємо 24/7. Завжди на зв&apos;язку у будь-який час.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Доступні ціни
              </h3>
              <p className="text-gray-400">
                Прозоре ціноутворення без прихованих платежів.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                З повагою
              </h3>
              <p className="text-gray-400">
                Делікатний підхід та повага до ваших побажань.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#0f3460] py-8 px-6 mt-auto">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} Вічна пам&apos;ять — Ритуальні послуги
          </p>
          <p className="mb-2">
            м. Ладижин, вул. Будівельників, 40, цокольний поверх
          </p>
          <p>
            <a
              href="tel:+380972544818"
              className="hover:text-white transition-colors"
            >
              +38 (097) 254-48-18
            </a>
            {" · "}
            <a
              href="tel:+380995313501"
              className="hover:text-white transition-colors"
            >
              +38 (099) 531-35-01
            </a>
            {" · "}
            <a
              href="tel:+380677589700"
              className="hover:text-white transition-colors"
            >
              +38 (067) 758-97-00
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
