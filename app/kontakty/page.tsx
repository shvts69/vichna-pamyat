import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Контакти похоронного бюро Вічна пам'ять у Ладижині. Адреса: вул. Будівельників, 40. Телефони: +380972544818, +380995313501, +380677589700. Працюємо цілодобово.",
};

export default function Kontakty() {
  return (
    <div className="flex flex-col min-h-full">
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
              className="text-white font-medium"
            >
              Контакти
            </Link>
          </div>
        </div>
      </nav>

      {/* Заголовок */}
      <section className="bg-[#16213e] py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Контакти</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Зв&apos;яжіться з нами будь-яким зручним способом. Ми працюємо цілодобово.
        </p>
      </section>

      <section className="py-12 px-6 bg-[#1a1a2e] flex-1">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Контактна інформація */}
          <div className="bg-[#16213e] rounded-xl p-8 border border-[#0f3460]">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Наші контакти
            </h2>
            <div className="flex flex-col gap-6">
              <div>
                <div className="text-sm text-gray-500 mb-1">Телефон (Київстар)</div>
                <a
                  href="tel:+380972544818"
                  className="text-lg text-white hover:text-[#e94560] transition-colors"
                >
                  +38 (097) 254-48-18
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Телефон (Vodafone)</div>
                <a
                  href="tel:+380995313501"
                  className="text-lg text-white hover:text-[#e94560] transition-colors"
                >
                  +38 (099) 531-35-01
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Телефон (Lifecell)</div>
                <a
                  href="tel:+380677589700"
                  className="text-lg text-white hover:text-[#e94560] transition-colors"
                >
                  +38 (067) 758-97-00
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Адреса</div>
                <p className="text-lg text-white">
                  м. Ладижин, вул. Будівельників, 40, цокольний поверх
                </p>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Графік роботи</div>
                <p className="text-lg text-white">Цілодобово, без вихідних</p>
              </div>
            </div>
          </div>

          {/* Форма зворотного зв'язку */}
          <div className="bg-[#16213e] rounded-xl p-8 border border-[#0f3460]">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Написати нам
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#0f3460] py-8 px-6 mt-auto">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} Вічна пам&apos;ять — Ритуальні послуги
          </p>
          <p className="mb-2">м. Ладижин, вул. Будівельників, 40, цокольний поверх</p>
          <p>
            <a href="tel:+380972544818" className="hover:text-white transition-colors">+38 (097) 254-48-18</a>
            {" · "}
            <a href="tel:+380995313501" className="hover:text-white transition-colors">+38 (099) 531-35-01</a>
            {" · "}
            <a href="tel:+380677589700" className="hover:text-white transition-colors">+38 (067) 758-97-00</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
