import type { Metadata } from "next";
import Link from "next/link";
import ServiceIcon from "../components/ServiceIcon";
import Particles from "../components/Particles";

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
    icon: "flame",
  },
  {
    title: "Ритуальні товари",
    description:
      "Широкий вибір трун різних категорій, вінків, квітів, хрестів, свічок та інших ритуальних атрибутів. Якісні товари за доступними цінами.",
    icon: "flower",
  },
  {
    title: "Перевезення по Україні та Європі",
    description:
      "Перевезення тіл померлих з будь-якої точки України та до будь-якого міста. Міжнародне перевезення з країн Європи — за домовленістю, уточнюйте деталі за телефоном. Катафалк, автобус для супроводжуючих.",
    icon: "truck",
  },
  {
    title: "Похорон онлайн",
    description:
      "Ми повністю організовуємо та проводимо похоронну церемонію, а ви та ваші рідні можете спостерігати через пряму відеотрансляцію. Ідеальне рішення для тих, хто перебуває за кордоном або не може бути присутнім особисто.",
    icon: "video",
  },
  {
    title: "Оформлення документів",
    description:
      "Повна допомога з оформленням свідоцтва про смерть, довідок для поховання та інших необхідних документів. Збережемо ваш час у складний період.",
    icon: "filetext",
  },
  {
    title: "Пам'ятники на замовлення",
    description:
      "Виготовлення та встановлення гранітних і мармурових пам'ятників за індивідуальним дизайном. Огорожі, плитка, благоустрій місця поховання. Широкий вибір матеріалів та форм.",
    icon: "landmark",
  },
  {
    title: "Догляд за могилами",
    description:
      "Регулярний догляд за місцем поховання: прибирання території, озеленення, висадка квітів, миття пам'ятника, підтримка в належному стані цілий рік. Фотозвіт після кожного візиту.",
    icon: "tree",
  },
  {
    title: "Кремація",
    description:
      "Організація кремації та видача урни з прахом. Допомога з вибором урни та місця для поховання праху.",
    icon: "flame",
  },
  {
    title: "Ексгумація та перепоховання",
    description:
      "Організація ексгумації та перепоховання з дотриманням усіх юридичних процедур та санітарних норм.",
    icon: "scroll",
  },
];

export default function Poslugy() {
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
              className="text-white font-medium"
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

      {/* Заголовок */}
      <section className="heaven-gradient pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 stars-bg opacity-40" />
        <Particles />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Наші послуги
          </h1>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-lg animate-fade-in-up-delay">
            Повний спектр ритуальних послуг. Ми допоможемо організувати гідне
            прощання з вашими близькими.
          </p>
        </div>
      </section>

      {/* Список послуг */}
      <section className="py-16 px-6 bg-[#0d1229] flex-1 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="max-w-4xl mx-auto flex flex-col gap-6 relative z-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card bg-gradient-to-r from-[#16213e] to-[#111a35] rounded-xl p-8 border border-[#1a2d5e] hover:border-[#e94560]/50 flex gap-6 items-start group relative overflow-hidden"
            >
              {/* Світіння при наведенні */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle, rgba(233,69,96,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="w-14 h-14 rounded-lg bg-[#e94560]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e94560]/20 group-hover:scale-110 transition-all duration-300">
                <ServiceIcon name={service.icon} size={28} />
              </div>
              <div className="relative z-10">
                <h2 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Лінія внизу */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#e94560]/0 to-transparent group-hover:via-[#e94560]/40 transition-all duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center mt-14 relative z-10">
          <Link
            href="/kontakty"
            className="inline-block bg-[#e94560] text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-[#c73e54] transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,69,96,0.4)]"
          >
            Замовити послугу
          </Link>
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
