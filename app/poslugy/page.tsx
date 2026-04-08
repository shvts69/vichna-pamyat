import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Послуги",
  description:
    "Ритуальні послуги в Ладижині: організація похорон, перевезення тіл по Україні та Європі, похорон онлайн з трансляцією, пам'ятники на замовлення, догляд за могилами, кремація. Цілодобово.",
};

const services = [
  {
    title: "Організація похорон",
    description:
      "Повний комплекс послуг з організації похоронної церемонії. Підготовка тіла, облаштування зали прощання, проведення церемонії прощання та поховання. Ми беремо на себе всі організаційні питання.",
    icon: "🕯️",
  },
  {
    title: "Ритуальні товари",
    description:
      "Широкий вибір трун різних категорій, вінків, квітів, хрестів, свічок та інших ритуальних атрибутів. Якісні товари за доступними цінами.",
    icon: "🌹",
  },
  {
    title: "Перевезення по Україні та Європі",
    description:
      "Перевезення тіл померлих з будь-якої точки України та до будь-якого міста. Міжнародне перевезення з країн Європи — за домовленістю, уточнюйте деталі за телефоном. Катафалк, автобус для супроводжуючих.",
    icon: "🚐",
  },
  {
    title: "Похорон онлайн",
    description:
      "Ми повністю організовуємо та проводимо похоронну церемонію, а ви та ваші рідні можете спостерігати через пряму відеотрансляцію. Ідеальне рішення для тих, хто перебуває за кордоном або не може бути присутнім особисто.",
    icon: "📹",
  },
  {
    title: "Оформлення документів",
    description:
      "Повна допомога з оформленням свідоцтва про смерть, довідок для поховання та інших необхідних документів. Збережемо ваш час у складний період.",
    icon: "📋",
  },
  {
    title: "Пам'ятники на замовлення",
    description:
      "Виготовлення та встановлення гранітних і мармурових пам'ятників за індивідуальним дизайном. Огорожі, плитка, благоустрій місця поховання. Широкий вибір матеріалів та форм.",
    icon: "🪦",
  },
  {
    title: "Догляд за могилами",
    description:
      "Регулярний догляд за місцем поховання: прибирання території, озеленення, висадка квітів, миття пам'ятника, підтримка в належному стані цілий рік. Фотозвіт після кожного візиту.",
    icon: "🌿",
  },
  {
    title: "Кремація",
    description:
      "Організація кремації та видача урни з прахом. Допомога з вибором урни та місця для поховання праху.",
    icon: "🏛️",
  },
  {
    title: "Ексгумація та перепоховання",
    description:
      "Організація ексгумації та перепоховання з дотриманням усіх юридичних процедур та санітарних норм.",
    icon: "📜",
  },
];

export default function Poslugy() {
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
              className="text-white font-medium"
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

      {/* Заголовок */}
      <section className="bg-[#16213e] py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Наші послуги</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Повний спектр ритуальних послуг. Ми допоможемо організувати гідне
          прощання з вашими близькими.
        </p>
      </section>

      {/* Список послуг */}
      <section className="py-12 px-6 bg-[#1a1a2e] flex-1">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#16213e] rounded-xl p-8 border border-[#0f3460] flex gap-6 items-start"
            >
              <div className="text-4xl shrink-0">{service.icon}</div>
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/kontakty"
            className="inline-block bg-[#e94560] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#c73e54] transition-colors"
          >
            Замовити послугу
          </Link>
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
