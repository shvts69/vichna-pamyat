import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import Particles from "../components/Particles";
import ServiceIcon from "../components/ServiceIcon";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Контакти похоронного бюро Вічна пам'ять у Ладижині. Адреса: вул. Будівельників, 40. Телефони: +380972544818, +380995313501, +380677589700. Працюємо цілодобово.",
};

export default function Kontakty() {
  return (
    <div className="flex flex-col min-h-full">
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
              className="text-white font-medium"
            >
              Контакти
            </Link>
          </div>
        </div>
      </nav>

      {/* Заголовок */}
      <section className="heaven-gradient pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 stars-bg opacity-40" />
        <Particles />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Контакти
          </h1>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-lg animate-fade-in-up-delay">
            Зв&apos;яжіться з нами будь-яким зручним способом. Ми працюємо цілодобово.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d1229] flex-1 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Контактна інформація */}
          <div className="bg-gradient-to-b from-[#16213e] to-[#111a35] rounded-xl p-8 border border-[#1a2d5e] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(233,69,96,0.1) 0%, transparent 70%)",
              }}
            />
            <h2 className="text-2xl font-semibold text-white mb-8 relative z-10">
              Наші контакти
            </h2>
            <div className="flex flex-col gap-7 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e94560]/10 flex items-center justify-center shrink-0">
                  <ServiceIcon name="phone" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Київстар</div>
                  <a
                    href="tel:+380972544818"
                    className="text-lg text-white hover:text-[#e94560] transition-colors"
                  >
                    +38 (097) 254-48-18
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e94560]/10 flex items-center justify-center shrink-0">
                  <ServiceIcon name="phone" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Vodafone</div>
                  <a
                    href="tel:+380995313501"
                    className="text-lg text-white hover:text-[#e94560] transition-colors"
                  >
                    +38 (099) 531-35-01
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e94560]/10 flex items-center justify-center shrink-0">
                  <ServiceIcon name="phone" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Lifecell</div>
                  <a
                    href="tel:+380677589700"
                    className="text-lg text-white hover:text-[#e94560] transition-colors"
                  >
                    +38 (067) 758-97-00
                  </a>
                </div>
              </div>
              <div className="section-divider my-1" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e94560]/10 flex items-center justify-center shrink-0">
                  <ServiceIcon name="landmark" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Адреса</div>
                  <p className="text-lg text-white">
                    м. Ладижин, вул. Будівельників, 40, цокольний поверх
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e94560]/10 flex items-center justify-center shrink-0">
                  <ServiceIcon name="clock" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Графік роботи</div>
                  <p className="text-lg text-white">Цілодобово, без вихідних</p>
                </div>
              </div>
            </div>
          </div>

          {/* Форма зворотного зв'язку */}
          <div className="bg-gradient-to-b from-[#16213e] to-[#111a35] rounded-xl p-8 border border-[#1a2d5e] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(233,69,96,0.1) 0%, transparent 70%)",
              }}
            />
            <h2 className="text-2xl font-semibold text-white mb-8 relative z-10">
              Написати нам
            </h2>
            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Карта */}
      <section className="py-16 px-6 bg-[#0a0f20] relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#e94560] text-sm tracking-widest uppercase text-center mb-3">
            Як нас знайти
          </p>
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Ми на карті
          </h2>
          <div className="section-divider w-24 mx-auto mb-10" />
          <div className="rounded-xl overflow-hidden border border-[#1a2d5e]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5!2d29.2368!3d48.6847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0JvQsNC00LjQttC40L0sINCy0YPQuy4g0JHRg9C00ZbQstC10LvRjNC90LjQutGW0LIsIDQw!5e0!3m2!1suk!2sua!4v1"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Вічна пам'ять на карті"
            />
          </div>
          <p className="text-gray-500 text-center mt-4 text-sm">
            м. Ладижин, вул. Будівельників, 40, цокольний поверх
          </p>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#060a15] py-10 px-6 mt-auto border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p className="text-white/40 text-lg mb-4 tracking-wider">✦ Вічна пам&apos;ять</p>
          <p className="mb-2">м. Ладижин, вул. Будівельників, 40, цокольний поверх</p>
          <p className="mb-4">
            <a href="tel:+380972544818" className="hover:text-white transition-colors">+38 (097) 254-48-18</a>
            {" · "}
            <a href="tel:+380995313501" className="hover:text-white transition-colors">+38 (099) 531-35-01</a>
            {" · "}
            <a href="tel:+380677589700" className="hover:text-white transition-colors">+38 (067) 758-97-00</a>
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
