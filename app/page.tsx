import Link from "next/link";
import Candle from "./components/Candle";
import Gallery from "./components/Gallery";
import Particles from "./components/Particles";
import ServiceIcon from "./components/ServiceIcon";

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
    icon: "flame",
  },
  {
    title: "Ритуальні товари",
    description:
      "Труни, вінки, квіти, хрести, пам'ятники та інші ритуальні атрибути.",
    icon: "flower",
  },
  {
    title: "Перевезення по Україні та Європі",
    description:
      "Перевезення тіл з будь-якої точки України. Доставка з-за кордону (Європа — за домовленістю).",
    icon: "truck",
  },
  {
    title: "Похорон онлайн",
    description:
      "Повна організація церемонії з прямою трансляцією для рідних, які не можуть бути присутніми.",
    icon: "video",
  },
  {
    title: "Оформлення документів",
    description:
      "Допомога з оформленням свідоцтва про смерть та інших необхідних документів.",
    icon: "filetext",
  },
  {
    title: "Пам'ятники на замовлення",
    description:
      "Виготовлення та встановлення пам'ятників за індивідуальним дизайном. Огорожі, плитка, благоустрій.",
    icon: "landmark",
  },
  {
    title: "Догляд за могилами",
    description:
      "Регулярний догляд за місцем поховання: прибирання, озеленення, підтримка в належному стані.",
    icon: "tree",
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
      <nav className="bg-transparent absolute top-0 left-0 right-0 z-20 px-6 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white tracking-wider">
            ✦ Вічна пам&apos;ять
          </Link>
          <div className="flex gap-6 text-sm">
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors"
            >
              Головна
            </Link>
            <Link
              href="/poslugy"
              className="text-white/80 hover:text-white transition-colors"
            >
              Послуги
            </Link>
            <Link
              href="/kontakty"
              className="text-white/80 hover:text-white transition-colors"
            >
              Контакти
            </Link>
          </div>
        </div>
      </nav>

      {/* Головний банер — Сходи в небо */}
      <section className="heaven-gradient min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden">
        {/* Зірки */}
        <div className="absolute inset-0 stars-bg opacity-60" />

        {/* Плаваючі частинки світла */}
        <Particles />

        {/* Промені світла зверху */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top center, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Фонове світіння від свічки */}
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,165,0,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Свічки */}
          <div className="flex justify-center items-end gap-16 mb-10">
            <div className="hidden md:block opacity-50 animate-float" style={{ animationDelay: "1s" }}>
              <Candle size="small" />
            </div>
            <div className="animate-float">
              <Candle size="large" />
            </div>
            <div className="hidden md:block opacity-50 animate-float" style={{ animationDelay: "2s" }}>
              <Candle size="small" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up tracking-wide">
            Вічна пам&apos;ять
          </h1>

          <div className="section-divider w-32 mx-auto mb-6 animate-fade-in-up-delay" />

          <p className="text-xl md:text-2xl text-white/70 mb-3 animate-fade-in-up-delay font-light">
            Ритуальні послуги з повагою та турботою
          </p>
          <p className="text-white/40 mb-3 animate-fade-in-up-delay tracking-widest text-sm uppercase">
            м. Ладижин · Цілодобово · Без вихідних
          </p>
          <p className="text-white/50 mb-10 animate-fade-in-up-delay-2 max-w-lg mx-auto">
            Ми допоможемо вам у найважчу хвилину. Повний комплекс ритуальних
            послуг з турботою про вас та ваших близьких.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <Link
              href="/kontakty"
              className="inline-block bg-[#e94560] text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-[#c73e54] transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,69,96,0.4)]"
            >
              Зв&apos;язатися з нами
            </Link>
            <a
              href="tel:+380972544818"
              className="inline-block border border-white/30 text-white px-10 py-4 rounded-lg text-lg font-medium hover:border-white/70 hover:bg-white/5 transition-all duration-300"
            >
              Зателефонувати
            </a>
          </div>

          {/* Стрілка вниз */}
          <div className="mt-16 animate-fade-in-up-delay-2">
            <div className="animate-float text-white/30 text-3xl">↓</div>
          </div>
        </div>
      </section>

      {/* Розділювач */}
      <div className="section-divider" />

      {/* Послуги */}
      <section className="py-20 px-6 bg-[#0d1229] relative overflow-hidden">
        {/* Фонові зірки */}
        <div className="absolute inset-0 stars-bg opacity-30" />

        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#e94560] text-sm tracking-widest uppercase text-center mb-3">
            Що ми пропонуємо
          </p>
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Наші послуги
          </h2>
          <div className="section-divider w-24 mx-auto mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-card bg-gradient-to-b from-[#16213e] to-[#111a35] rounded-xl p-7 border border-[#1a2d5e] hover:border-[#e94560]/50 relative overflow-hidden group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Світіння при наведенні */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle, rgba(233,69,96,0.1) 0%, transparent 70%)",
                  }}
                />

                <div className="w-12 h-12 rounded-lg bg-[#e94560]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#e94560]/20 transition-all duration-300">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>

                {/* Лінія внизу */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#e94560]/0 to-transparent group-hover:via-[#e94560]/50 transition-all duration-500" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/poslugy"
              className="text-[#e94560] hover:text-white transition-colors text-lg inline-flex items-center gap-2"
            >
              Детальніше про послуги →
            </Link>
          </div>
        </div>
      </section>

      {/* Розділювач */}
      <div className="section-divider" />

      {/* Наш салон */}
      <section className="py-20 px-6 bg-[#0a0f20] relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-[#e94560] text-sm tracking-widest uppercase text-center mb-3">
            Завітайте до нас
          </p>
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Наш салон
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
            Широкий вибір ритуальних товарів: труни, вінки, квіти та аксесуари на будь-який бюджет
          </p>
          <Gallery />
        </div>
      </section>

      {/* Розділювач */}
      <div className="section-divider" />

      {/* Чому ми */}
      <section className="py-20 px-6 bg-[#0d1229] relative overflow-hidden">
        <div className="absolute inset-0 stars-bg opacity-30" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#e94560] text-sm tracking-widest uppercase mb-3">
            Наші переваги
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Чому обирають нас
          </h2>
          <div className="section-divider w-24 mx-auto mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group">
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-b from-[#1a2d5e] to-[#16213e] border border-[#1a2d5e] flex items-center justify-center group-hover:border-[#e94560]/50 group-hover:shadow-[0_0_20px_rgba(233,69,96,0.15)] transition-all duration-300">
                <ServiceIcon name="clock" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Цілодобово
              </h3>
              <p className="text-gray-400">
                Працюємо 24/7. Завжди на зв&apos;язку у будь-який час дня та ночі.
              </p>
            </div>
            <div className="group">
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-b from-[#1a2d5e] to-[#16213e] border border-[#1a2d5e] flex items-center justify-center group-hover:border-[#e94560]/50 group-hover:shadow-[0_0_20px_rgba(233,69,96,0.15)] transition-all duration-300">
                <ServiceIcon name="wallet" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Доступні ціни
              </h3>
              <p className="text-gray-400">
                Прозоре ціноутворення без прихованих платежів та комісій.
              </p>
            </div>
            <div className="group">
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-b from-[#1a2d5e] to-[#16213e] border border-[#1a2d5e] flex items-center justify-center group-hover:border-[#e94560]/50 group-hover:shadow-[0_0_20px_rgba(233,69,96,0.15)] transition-all duration-300">
                <ServiceIcon name="handshake" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                З повагою
              </h3>
              <p className="text-gray-400">
                Делікатний підхід та повна повага до ваших побажань та традицій.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секція */}
      <section className="py-16 px-6 relative overflow-hidden" style={{
        background: "linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)"
      }}>
        <Particles />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Потрібна допомога?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Зателефонуйте нам або залиште заявку — ми зв&apos;яжемося з вами якнайшвидше
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+380972544818"
              className="inline-block bg-[#e94560] text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-[#c73e54] transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,69,96,0.4)]"
            >
              +38 (097) 254-48-18
            </a>
            <Link
              href="/kontakty"
              className="inline-block border border-white/30 text-white px-10 py-4 rounded-lg text-lg font-medium hover:border-white/70 hover:bg-white/5 transition-all duration-300"
            >
              Залишити заявку
            </Link>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#060a15] py-10 px-6 mt-auto border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p className="text-white/40 text-lg mb-4 tracking-wider">✦ Вічна пам&apos;ять</p>
          <p className="mb-2">
            м. Ладижин, вул. Будівельників, 40, цокольний поверх
          </p>
          <p className="mb-4">
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
          <div className="section-divider w-16 mx-auto mb-4" />
          <p className="text-gray-600">
            © {new Date().getFullYear()} Вічна пам&apos;ять — Ритуальні послуги
          </p>
        </div>
      </footer>
    </div>
  );
}
